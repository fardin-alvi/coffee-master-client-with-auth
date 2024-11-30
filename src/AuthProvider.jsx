import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState([])
    const [loading, setloading] = useState(true)
    
    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userinfo = {
        user,
        setUser,
        loading,
        createuser,
        singin
    }

    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;