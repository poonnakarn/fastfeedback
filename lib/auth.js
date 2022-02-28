import React, { useState, useEffect, useContext, createContext } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider
} from 'firebase/auth'
import Router from 'next/router'

const authContext = createContext() // create context object

export function AuthProvider({ children }) {
  const auth = useProvideAuth() // custom hook which returns user or false
  return <authContext.Provider value={auth}>{children}</authContext.Provider> // provider component of the context object
}

export const useAuth = () => {
  return useContext(authContext)
}

// custom hook
function useProvideAuth() {
  const auth = getAuth()
  const user = auth.currentUser

  const signinWithEmail = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    return userCredential.user
  }

  const signinWithGithub = async () => {
    const provider = new GithubAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  }

  const signout = () => {
    Router.push('/')

    return auth.signOut()
  }

  return {
    user,
    signinWithEmail,
    signinWithGithub,
    signout
  }
}
