/**
 * This file contains the context that handles the authentication of the user.
 * It provides both information about the currently logged user, as well as the functions that handle user's registration
 * and basic account management capabilities.
 */

import React, { useContext, useState, useEffect } from "react";
import firebase, { firebaseAuth } from "../config/firebaseConfig";

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextType {
    currentUser?: firebase.User | null | undefined;
    loginWithEmailAndPassword?: (
        email: string,
        password: string
    ) => Promise<firebase.auth.UserCredential>;
    loginWithGoogle?: () => Promise<void>;
    loginWithFacebook?: () => Promise<void>;
    signup?: (
        email: string,
        password: string
    ) => Promise<firebase.auth.UserCredential>;
    logout?: () => Promise<void>;
    resetPassword?: (email: string) => Promise<void>;
    updateEmail?: (email: string) => Promise<void> | undefined;
    updatePassword?: (password: string) => Promise<void> | undefined;
}

const AuthContext = React.createContext<AuthContextType>({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>();
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

    useEffect(() => {
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
