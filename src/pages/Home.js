import React from 'react'
import firebase from 'firebase/app'
import { withRouter } from 'react-router-dom'

const Signin = () => {
  const signInWithGoogle = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new firebase.auth.GoogleAuthProvider()
    // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        alert('success : ' + user.user.displayName + 'さんでログインしました')
        return(<Redirect to="/calender"/>)
      })
      .catch((error) => {
        alert(error.message)
        return(<Redirect to="/"/>)
      })
  }

  return (
    <div>
      <div className="login">
        <h1>ログイン</h1>
      </div>
      <div className="signin_button">
        <img
          src="../../public/btn_google_signin.png"
          onClick={() => signInWithGoogle()}
          alt="google signin"
        />
      </div>
    </div>
  )
}

export default withRouter(Signin)
