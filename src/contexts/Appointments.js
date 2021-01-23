//import { useCallback } from 'react'
// import { AuthContext } from './auth'
import firebase, { db } from '../plugins/firebase'

// DBに登録する関数
/**
@param: data appointment型
*/
// memo；DOM Document Object Model：
// 文書の構造をメモリ内に表現し, ウェブページとスクリプトを接続するもの
export const addtoDB = async (data) => {
  console.log('CALLED!!!')
  try {
    // await collection(uid).doc(docId).add({
    // console.log(data.title, 'hello')
    /** 
    db.collection('menu').add({
      // uid: currentUser.uid,
      // id: firebase.firestore.collection('menu').doc().id,
      title: data.title,
      notes: data.notes,
      startDate: data.startDate,
      endDate: data.endDate,
      tagId: data.tagId,
      // URL: url,
      //createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    */
    const docRef = db.collection('menu').doc()
    // console.log('yay')
    await docRef.set({
      // uid: currentUser.uid,
      // id: firebase.firestore.collection('menu').doc().id,
      title: data.title,
      notes: data.notes,
      startDate: data.startDate,
      endDate: data.endDate,
      tagId: data.tagId,
      id: docRef.id,
      // URL: url,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  } catch (e) {
    console.log(e)
  }
}

// DBからデータをとってくる関数
/**
@param: data appointment型
*/
export const fetchData = async () => {
  try {
    // await collection(uid).doc(docId).add({
    const colRef = db.collection('menu')
    const snapshots = await colRef.get()
    const docs = snapshots.docs.map((doc) => doc.data())

    const time = docs.map(function (value) {
      value.startDate = value.startDate.toDate()
      value.endDate = value.endDate.toDate()
      //console.log(value.startDate, 'bye')
    })
    console.log(time, 'hie')
    return docs
  } catch (e) {
    console.log(e)
  }
}

// DBのデータを消す関数
/**
@param: data appointment型
*/
export const deletefromDB = async (id) => {
  console.log('DELETING')
  try {
    // await collection(uid).doc(docId).add({
    await db.collection('menu').doc(id).delete()
  } catch (e) {
    console.log(e)
  }
}
