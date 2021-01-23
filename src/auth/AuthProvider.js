import React, { useEffect, useState } from 'react'
import firebase from '../plugins/firebase'

// contextの作成
export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  // ユーザーをログインさせる関数
  const login = async (history) => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await firebase.auth().signInWithPopup(provider)
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login: login,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
