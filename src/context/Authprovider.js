import React, { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const loginWithGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    loginWithGoogle,
    logout,
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unSubscribe()
    }
  }, [])

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default Authprovider
