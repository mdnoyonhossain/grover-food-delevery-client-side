import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userDisplayName = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile)
    }

    const userSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        localStorage.removeItem('grover-token');
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setLoader(false)
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const userInfo = { user, createUser, userDisplayName, userSignIn, googleSignIn, logOut, loader };
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;