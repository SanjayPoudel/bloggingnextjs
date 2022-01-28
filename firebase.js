import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAMPQhKMx1sCJ2GttwxF0MekGokGbYrN5s",
  authDomain: "nextjsblog-f5e6d.firebaseapp.com",
  projectId: "nextjsblog-f5e6d",
  storageBucket: "nextjsblog-f5e6d.appspot.com",
  messagingSenderId: "153558915790",
  appId: "1:153558915790:web:740c0ca9a7f128afeb8e9f"
};


  if(!firebase.apps.length) 
  firebase.initializeApp(firebaseConfig)

  
const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()


export {auth,db,storage}