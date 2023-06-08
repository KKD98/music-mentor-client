import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const signIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth , googleProvider)
        .then(res => console.log(res.user))
        .catch(error => console.log(error.message))
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name , photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            console.log('Current-User:' , currentUser)
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        handleGoogleSignIn,
        updateUserProfile,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;