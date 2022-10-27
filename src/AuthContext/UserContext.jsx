import React from 'react';
import app from '../Firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

//call get auth function
const auth = getAuth(app)
export const AuthContext = createContext(); 
const UserContext = ({children}) => {
    const [ user,setUser ] = useState();
    const [loading,setLoading] = useState(true);
    //google auth provider
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    //create user with email password function
    const createUserWithEmail = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //on auth state change
    useEffect(()=>{
           const subscription = onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser)
                setLoading(false);
           })
        return () => subscription()
    },[])
    //sign out
    const logOut = () =>{
        return signOut(auth)
    }
    //sign in with email and password
    const loginwithEmailPass = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    //sign in with google 
    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    //sign in with github 
    const signInWithGithub = () =>{
        return signInWithPopup(auth,githubProvider);
    }
    //value for context
    const authInfo = {
        user,
        createUserWithEmail,
        logOut,
        loading,
        loginwithEmailPass,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;