import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQIv9_wHbNVUMwaUx-ZvW3-1zf77lmvpA",
    authDomain: "netflix-95b2f.firebaseapp.com",
    projectId: "netflix-95b2f",
    storageBucket: "netflix-95b2f.appspot.com",
    messagingSenderId: "989792136826",
    appId: "1:989792136826:web:6a36b71e1af84ba82f95c3",
    measurementId: "G-C08YPF6KVY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };