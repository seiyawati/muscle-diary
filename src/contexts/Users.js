// import { useContext } from 'react'
// import { AuthContext } from './auth'
import firebase, { db } from '../plugins/firebase'
// import { AuthContext } from '../auth/AuthProvider'

// ユーザ情報をDBに登録する関数
/**
@param: data appointment型
*/
// memo；DOM Document Object Model：
// 文書の構造をメモリ内に表現し, ウェブページとスクリプトを接続するもの
export const addUser = async (user) => {
  //console.log('CALLED!!!')
  try {
    const docRef = db.collection('users').doc(user)
    // console.log('yay')
    await docRef.set({
      uid: docRef.id,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  } catch (e) {
    console.log(e)
  }
}

// DBのユーザデータを消す関数(いらない)
/**
@param: data appointment型
*/
export const deleteUserfromDB = async (id) => {
  console.log('DELETING')
  try {
    // await collection(uid).doc(docId).add({
    await db.collection('users').doc(id).delete()
  } catch (e) {
    console.log(e)
  }
}
