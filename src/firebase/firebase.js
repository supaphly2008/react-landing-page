import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import firebaseConfig from "firebase/firebase-config";
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
