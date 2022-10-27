import React from 'react';
import app from '../Firebase/Firebase.init';

import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth'

import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

//call get auth function
const auth = getAuth(app)
export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState();
    const [name,setName ] = useState()
    const [photo,setPhoto] = useState()
     const [loading, setLoading] = useState(true);
    //google auth provider
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    //create user with email password function
    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //on auth state change
    useEffect(() => {
        const subscription = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            //set name and photo to state for using in navbar
            setName(currentUser?.displayName)
            setPhoto(currentUser?.photoURL)

            setLoading(false);
        })
        return () => subscription()
    }, [])
    //sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //sign in with email and password
    const loginwithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //sign in with google 
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //sign in with github 
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    //user profile update 
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //value for context
    const authInfo = {
        user,
        createUserWithEmail,
        logOut,
        loading,
        loginwithEmailPass,
        signInWithGoogle,
        signInWithGithub,
        profileUpdate,
        setUser,
        name,
        photo,
        setName,
        setPhoto
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;