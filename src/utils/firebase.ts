import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBZnd22-OtnUKm7TNBJLZrRJ7FqSUGPCvc",
  authDomain: "send-files-8074a.firebaseapp.com",
  projectId: "send-files-8074a",
  storageBucket: "send-files-8074a.appspot.com",
  messagingSenderId: "1046825940688",
  appId: "1:1046825940688:web:588dc5decf7101443ad0d5"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, auth, firestore, googleProvider };