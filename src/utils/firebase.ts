import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA4y03Pj9DqQj3tVfF7lZ409yMdjuZ3rww",
    authDomain: "react-firebase-chat-846db.firebaseapp.com",
    projectId: "react-firebase-chat-846db",
    storageBucket: "react-firebase-chat-846db.appspot.com",
    messagingSenderId: "701069286841",
    appId: "1:701069286841:web:f9560db4c7ce5e1260ea68"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, auth, firestore, googleProvider };