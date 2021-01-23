// import { useContext } from 'react'
// import { AuthContext } from './auth'
import firebase, { db } from '../plugins/firebase'
// import { AuthContext } from '../auth/AuthProvider'

// DBに登録する関数
/**
@param: data appointment型
const appointments = [
    {
        appid:
        
    }
*/
// memo；DOM Document Object Model：
// 文書の構造をメモリ内に表現し, ウェブページとスクリプトを接続するもの
export const addtoDB = async (data, uid) => {
  // data={setid, start, end}
  console.log('CALLED!!!', data, uid)
  try {
    // const datRef = db.collection('datasets').doc(data.)
    // await
    const docRef = db.collection('appointments').doc()
    // console.log('yay')
    await docRef.set({
      // uid: currentUser.uid,
      // id: firebase.firestore.collection('menu').doc().id,
      id: docRef.id,
      uid: uid,
      title: data.title,
      startDate: data.startDate,
      endDate: data.endDate,
      tagId: data.tagId,
      url: data.url,
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
export const fetchData = async (uid) => {
  try {
    // await collection(uid).doc(docId).add({
    const colRef = db.collection('appointments')
    const snapshots = await colRef.where('uid', '==', uid).get()
    console.log('HOGE', snapshots)
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
    await db.collection('appointments').doc(id).delete()
  } catch (e) {
    console.log(e)
  }
}
