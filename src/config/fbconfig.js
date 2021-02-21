import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDz99Gv80EqTfVulUDdCIqQtTJCLgAH1qM",
  authDomain: "evernote-e13ed.firebaseapp.com",
  projectId: "evernote-e13ed",
  storageBucket: "evernote-e13ed.appspot.com",
  messagingSenderId: "769822571413",
  appId: "1:769822571413:web:40ffa66915eb21ee13d49c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
