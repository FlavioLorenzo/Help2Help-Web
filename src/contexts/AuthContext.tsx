/**
 * This file contains the context that handles the authentication of the user.
 * It provides both information about the currently logged user, as well as the functions that handle user's registration
 * and basic account management capabilities.
 *
 * Reference video: https://www.youtube.com/watch?v=PKwu15ldZ7k
 */

import React, { useContext, useState, useEffect } from "react";
import firebase, { firebaseAuth } from "../config/firebaseConfig";

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
    loginWithGoogle: () => Promise<void>;
    loginWithFacebook: () => Promise<void>;
    signup: (email: string, password: string) => Promise<any>; // Promise<firebase.auth.UserCredential>
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    updateEmail: (email: string) => Promise<void> | undefined;
    updatePassword: (password: string) => Promise<void> | undefined;
    handleEmailVerification: (actionCode: string) => Promise<void>;
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

    function signup(email: string, password: string) {
        return firebaseAuth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                userCredential.user?.sendEmailVerification();
                firebaseAuth.signOut();
            })
            .catch((error) => {
                // TODO: Handle error code with translation and more in detail
                switch (error.code) {
                    case "auth/email-already-in-use":
                        return Promise.reject(
                            "L'indirizzo email è già in uso da un altro account."
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
                // TODO: Add translation
                // TODO: We need to think of a way through which the user can request to resend the email verification link
                // if they lose it
                if (!userCredential.user?.emailVerified) {
                    firebaseAuth.signOut();
                    return Promise.reject(
                        "L'indirizzo mail non è stato ancora verificato."
                    );
                }
            });
    }

    function loginWithGoogle() {
        return firebaseAuth.signInWithRedirect(googleProvider);
    }

    function loginWithFacebook() {
        return firebaseAuth.signInWithRedirect(facebookProvider);
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
     * When the user logs in or gets created Firebase notifies the event through the listener onAuthStateChanged.
     * This gets run only when the component gets mounted
     */
    useEffect(() => {
        // The unsubscribe method will get triggered when component gets unmounted
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value: AuthContextType = {
        currentUser,
        loginWithEmailAndPassword,
        loginWithGoogle,
        loginWithFacebook,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        handleEmailVerification,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
}
