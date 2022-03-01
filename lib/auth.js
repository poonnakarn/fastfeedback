import React, { useState, useEffect, useContext, createContext } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider
} from 'firebase/auth'
import Router from 'next/router'
import { createUser } from './db'

const authContext = createContext() // create context object

export function AuthProvider({ children }) {
  const auth = useProvideAuth() // auth custom hook
  return <authContext.Provider value={auth}>{children}</authContext.Provider> // provide custom hook to consumer
}

export const useAuth = () => {
  return useContext(authContext)
}

// custom hook
function useProvideAuth() {
  const auth = getAuth()
  const [user, setUser] = useState(null)

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)

      createUser(user.uid, user)
      setUser(user)
      return user
    } else {
      setUser(false)
      return false
    }
  }

  const signinWithEmail = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    return handleUser(userCredential.user)
  }

  const signinWithGithub = async () => {
    const provider = new GithubAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)

    return handleUser(userCredential.user)
  }

  const signout = () => {
    Router.push('/')
    auth.signOut()

    return handleUser(false)
  }

  return {
    user,
    signinWithEmail,
    signinWithGithub,
    signout
  }
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  }
}
