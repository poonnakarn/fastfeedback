import React, { createContext, useContext, useEffect, useState } from 'react'
import cookie from 'js-cookie'

import { auth } from '@/lib/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
  GithubAuthProvider,
} from 'firebase/auth'
import { createUser } from '@/lib/db'

const AuthContext = createContext({
  currentUser: null,
  signInWithEmail: () => Promise,
  signinWithGithub: () => Promise,
  signInWithGoogle: () => Promise,
  register: () => Promise,
  logOut: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const formattedUser = formatUser(user)

        // get id token from firebase
        user
          .getIdToken()
          .then((token) => setCurrentUser({ ...formattedUser, token }))

        createUser(user.uid, formattedUser)

        cookie.set('fast-feedback-auth', true, {
          expires: 1,
        })
      } else {
        setCurrentUser(null)
        cookie.remove('fast-feedback-auth')
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    console.log('The user is', currentUser)
  }, [currentUser])

  function signInWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  function logOut() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function signinWithGithub() {
    const provider = new GithubAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const value = {
    currentUser,
    signInWithGoogle,
    signinWithGithub,
    signInWithEmail,
    logOut,
    forgotPassword,
    resetPassword,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}
