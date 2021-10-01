import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBxiwOCJE3pzqt_qm9xHeEdAZjqmdZPUOY",
  authDomain: "react-netflix-f9462.firebaseapp.com",
  projectId: "react-netflix-f9462",
  storageBucket: "react-netflix-f9462.appspot.com",
  messagingSenderId: "912025009502",
  appId: "1:912025009502:web:12315e51372be5d0f923cf",
  measurementId: "G-EPG04FGCNH",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
