
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { Auth } from './firebase_init';
import { useEffect, useState } from 'react';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(Auth,email,password)
  }
  const googleProvider=new GoogleAuthProvider();

  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(Auth,email,password)

  }

  const logOut=()=>{
    return signOut(Auth)
  }

  const signInWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(Auth,googleProvider)
  }

  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(Auth,(currentUser)=>{
         setUser(currentUser)
         setLoading(false)
        })
    
    return ()=>unSubscribe()

  },[])
  const authInfo={
   createUser,
   user,
   signIn,
   logOut,
   loading,
   signInWithGoogle
  }
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;