import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
}
    from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext("");
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const manageProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const signOutUser = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log(currentUser);
            }
            else {
                setUser(null);
            }
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        signInWithGoogle,
        signOutUser,
        createUserWithEmail,
        manageProfile,
        signInWithEmail,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;