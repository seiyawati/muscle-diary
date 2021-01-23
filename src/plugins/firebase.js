import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyApEmDDpmnQTar-ov4_GC1uC7h5hkv_us4',
  authDomain: 'muscle-diary-eacb2.firebaseapp.com',
  projectId: 'muscle-diary-eacb2',
  storageBucket: 'muscle-diary-eacb2.appspot.com',
  messagingSenderId: '274479441978',
  appId: '1:274479441978:web:30cb2c517f090ad4b6ad03',
  measurementId: 'G-YSM94XFGY3',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
export default firebase
export const db = firebase.firestore()
