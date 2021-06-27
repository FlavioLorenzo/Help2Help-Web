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
    ) => Promise<firebase.auth.UserCredential>;
    loginWithGoogle: () => Promise<void>;
    loginWithFacebook: () => Promise<void>;
    signup: (
        email: string,
        password: string
    ) => Promise<firebase.auth.UserCredential>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    updateEmail: (email: string) => Promise<void> | undefined;
    updatePassword: (password: string) => Promise<void> | undefined;
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
        return firebaseAuth.createUserWithEmailAndPassword(email, password);
    }

    function loginWithEmailAndPassword(email: string, password: string) {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
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
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
}
