import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unSubscribe();
        }
    }, [])




    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        login,
        signInWithGoogle
        logOut,
        userUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider >
    );
};

export default AuthProvider;