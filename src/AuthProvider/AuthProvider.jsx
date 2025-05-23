import {
    GoogleAuthProvider,
    signInWithPopup
}
    from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext("");
const provider = new GoogleAuthProvider
const AuthProvider = ({ children }) => {
    const signInWithGoogle = () => {
        return signInWithPopup
    }
    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;