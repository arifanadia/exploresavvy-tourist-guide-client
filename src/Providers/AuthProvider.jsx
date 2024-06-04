import { createContext, useState } from "react";




const AuthContext = createContext(null)

const AuthProvider = () => {
    const [user,setUser] = useState(null);


    

    const authInfo ={
        user,
        loader,
        setUser,
        createUser,
        login,
        logOut,
        userUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;