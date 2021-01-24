import firebase, { db } from '../plugins/firebase'

// DBに登録する関数
/**
@param: data appointment型
*/
// memo；DOM Document Object Model：
// 文書の構造をメモリ内に表現し, ウェブページとスクリプトを接続するもの
export const addtoDB = async (data, uid, movie_list) => {
  // data={setid, start, end}
  console.log('CALLED!!!', data, uid, movie_list)
  try {
    const movie = movie_list[data.movieId.target.value]
    console.log('MOVIE', movie)
    const docRef = db.collection('appointments').doc()
    await docRef.set({
      // uid: currentUser.uid,
      // id: firebase.firestore.collection('menu').doc().id,
      id: docRef.id,
      uid: uid,
      title: movie.title,
      // notes: movie.title,
      startDate: data.startDate,
      endDate: data.endDate,
      tagId: movie.tagId,
      url: movie.url,
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
    const colRef = db.collection('appointments')
    const snapshots = await colRef.where('uid', '==', uid).get()
    console.log('HOGE', snapshots)
    const docs = snapshots.docs.map((doc) => doc.data())

    const time = docs.map(function (value) {
      value.startDate = value.startDate.toDate()
      value.endDate = value.endDate.toDate()
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
    await db.collection('appointments').doc(id).delete()
  } catch (e) {
    console.log(e)
  }
}
