// import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOhBkjomRv6PlENAstOa2U73W7sXnlhdU",
  authDomain: "prison-health-auth.firebaseapp.com",
  projectId: "prison-health-auth",
  storageBucket: "prison-health-auth.appspot.com",
  messagingSenderId: "350631175713",
  appId: "1:350631175713:web:eaed62db6b6da3cf07e560",
  measurementId: "G-468WG0GQ38",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();

export { firebase, db, googleProvider, auth };
