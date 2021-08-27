/**
 * This file contains the context that handles the authentication of the user.
 * It provides both information about the currently logged user, as well as the functions that handle user's registration
 * and basic account management capabilities.
 *
 * Reference video: https://www.youtube.com/watch?v=PKwu15ldZ7k
 */

import React, { useContext, useState, useEffect } from "react";
import firebase, { firebaseAuth, firestoreDB } from "../config/firebaseConfig";

import * as translations from "./AuthContext.translations";

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextType {
    currentUser: firebase.User | null | undefined;
    loginWithEmailAndPassword: (
        email: string,
        password: string
    ) => Promise<any>;
    loginWithGoogle: () => Promise<any>;
    loginWithFacebook: () => Promise<any>;
    signupVolunteer: (
        email: string,
        password: string,
        firstName: string,
        lastName: string
    ) => Promise<any>; // Promise<firebase.auth.UserCredential>
    signupOrganization: (
        email: string,
        password: string,
        name: string
    ) => Promise<any>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    updateEmail: (email: string) => Promise<void> | undefined;
    updatePassword: (password: string) => Promise<void> | undefined;
    handleEmailVerification: (actionCode: string) => Promise<void>;
    validateResetPassword: (actionCode: string) => Promise<string>;
    confirmResetPassword: (
        actionCode: string,
        newPassword: string
    ) => Promise<void>;
}

const AuthContext = React.createContext<Partial<AuthContextType>>({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>();
    // When the page initially gets rendered, the current user will be null. Only after
    // the local storage is configured by Firebase the currentUser variable will be
    // populated.
    // The loading check determines whether this initialization has already been done
    const [loading, setLoading] = useState<boolean>(true);

    function signupVolunteer(
        email: string,
        password: string,
        firstName: string,
        lastName: string
    ) {
        return firebaseAuth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const promises = [];

                promises.push(
                    firestoreDB
                        .collection("volunteers")
                        .doc(userCredential.user?.uid)
                        .set({
                            firstName: firstName,
                            lastName: lastName,
                            newUser: true,
                        })
                );

                promises.push(userCredential.user?.sendEmailVerification());

                promises.push(
                    userCredential.user?.updateProfile({
                        displayName: firstName + " " + lastName,
                    })
                );

                return Promise.all(promises).then(() => firebaseAuth.signOut());
            })
            .catch((error) => {
                // TODO: Handle error codes with translation and more in detail
                switch (error.code) {
                    case "auth/email-already-in-use":
                        return Promise.reject(
                            translations.authErrorMessageEmailAlreadyInUse
                        );
                    default:
                        break;
                }
            });
    }

    function signupOrganization(email: string, password: string, name: string) {
        return firebaseAuth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const promises = [];

                promises.push(
                    firestoreDB
                        .collection("organizations")
                        .doc(userCredential.user?.uid)
                        .set({
                            name: name,
                            newUser: true,
                        })
                );

                promises.push(userCredential.user?.sendEmailVerification());

                promises.push(
                    userCredential.user?.updateProfile({
                        displayName: name,
                    })
                );

                return Promise.all(promises).then(() => firebaseAuth.signOut());
            })
            .catch((error) => {
                // TODO: Handle error codes with translation and more in detail
                switch (error.code) {
                    case "auth/email-already-in-use":
                        return Promise.reject(
                            translations.authErrorMessageEmailAlreadyInUse
                        );
                    default:
                        break;
                }
            });
    }

    /**
     * Log the user with their email and password. If the user was not verified, it logs them out and sends a warning message
     * @param email The email provided by the user
     * @param password The password provided by the user
     */
    function loginWithEmailAndPassword(email: string, password: string) {
        return firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // TODO: We need to think of a way through which the user can request to resend the email verification link
                // if they lose it
                if (!userCredential.user?.emailVerified) {
                    firebaseAuth.signOut();

                    return Promise.reject(
                        translations.authErrorMessageEmailNotVerified
                    );
                }
            });
    }

    function loginWithGoogle() {
        return firebaseAuth
            .signInWithPopup(googleProvider)
            .then((userCredential) => {
                if (!userCredential.additionalUserInfo?.isNewUser) return;

                let newVolunteer: any = {
                    newUser: true,
                };

                // If name and surname are available populate the related fields
                const profile = userCredential.additionalUserInfo
                    ?.profile as any;
                if (profile && profile.family_name)
                    newVolunteer.lastName = profile.family_name;
                if (profile && profile.given_name)
                    newVolunteer.firstName = profile.given_name;

                firestoreDB
                    .collection("volunteers")
                    .doc(userCredential.user?.uid)
                    .set(newVolunteer);

                return Promise.resolve(userCredential);
            });
    }

    function loginWithFacebook() {
        return firebaseAuth
            .signInWithPopup(facebookProvider)
            .then((userCredential) => {
                if (!userCredential.additionalUserInfo?.isNewUser) return;

                let newVolunteer: any = {
                    newUser: true,
                };

                // If name and surname are available populate the related fields
                const profile = userCredential.additionalUserInfo
                    ?.profile as any;
                if (profile && profile.last_name)
                    newVolunteer.lastName = profile.last_name;
                if (profile && profile.first_name)
                    newVolunteer.firstName = profile.first_name;

                firestoreDB
                    .collection("volunteers")
                    .doc(userCredential.user?.uid)
                    .set(newVolunteer);

                return Promise.resolve(userCredential);
            });
    }

    function logout() {
        return firebaseAuth.signOut();
    }

    function resetPassword(email: string) {
        return firebaseAuth.sendPasswordResetEmail(email);
    }

    function updateEmail(email: string) {
        return currentUser?.updateEmail(email);
    }

    function updatePassword(password: string) {
        return currentUser?.updatePassword(password);
    }

    /**
     * Function that performs the actions required to verify a user's mail
     * @param actionCode One-time code for verifying the user.
     */
    function handleEmailVerification(actionCode: string) {
        // Localize the UI to the selected language as determined by the lang
        // parameter.
        // Try to apply the email verification code.
        return firebaseAuth.applyActionCode(actionCode).catch((error) => {
            // Code is invalid or expired. Ask the user to verify their email address
            // again.
            throw new Error(error);
        });
    }

    /**
     * Function that validates a user's password recovery request
     * @param actionCode One-time code for validating the request.
     */
    function validateResetPassword(actionCode: string) {
        // Localize the UI to the selected language as determined by the lang
        // parameter.
        // Try to apply the email verification code.
        return firebaseAuth
            .verifyPasswordResetCode(actionCode)
            .catch((error) => {
                // Code is invalid or expired. Ask the user to verify their email address
                // again.
                throw new Error(error);
            });
    }

    /**
     * Function that performs the actions required to recover a user's password
     * @param actionCode One-time code for validating the request.
     */
    function confirmResetPassword(actionCode: string, newPassword: string) {
        // Localize the UI to the selected language as determined by the lang
        // parameter.
        // Try to apply the email verification code.
        return firebaseAuth
            .confirmPasswordReset(actionCode, newPassword)
            .catch((error) => {
                // An error occurred during confirmation. The code might have expired or the password is too weak
                throw new Error(error);
            });
    }

    /**
     * When the user logs in or gets created Firebase notifies the event through the listener onAuthStateChanged.
     * This gets run only when the component gets mounted
     */
    useEffect(() => {
        // The unsubscribe method will get triggered when component gets unmounted
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            // Set the user as current only if verified
            if (!user || user?.emailVerified) setCurrentUser(user);

            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value: AuthContextType = {
        currentUser,
        loginWithEmailAndPassword,
        loginWithGoogle,
        loginWithFacebook,
        signupVolunteer,
        signupOrganization,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        handleEmailVerification,
        validateResetPassword,
        confirmResetPassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
}
