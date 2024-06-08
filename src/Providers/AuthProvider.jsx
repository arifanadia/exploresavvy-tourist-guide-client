import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup, signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure()



    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        }
        )
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // const getToken = async email => {
    //     const { data } = await axiosSecure.post(`/jwt`, { email }
    //         , { withCredentials: true }

    //     )
    // }

    const saveUser = async user => {
        const currentUser = {
            email: user?.email,
            role: 'tourist',
            status: 'Verified'
        }
        const { data } = axiosSecure.put(`/users`, currentUser)
        console.log(data);
        return data
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                saveUser(currentUser)
            }
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
        signInWithGoogle,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;