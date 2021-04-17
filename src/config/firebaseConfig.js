import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Configuration for firebase service
const firebaseConfig = {
    apiKey: "AIzaSyCAXT-tOOy0AS6aVnAkDvoMddLOLiyfJfk",
    authDomain: "help-2-help.firebaseapp.com",
    databaseURL:
        "https://help-2-help-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "help-2-help",
    storageBucket: "help-2-help.appspot.com",
    messagingSenderId: "697938195108",
    appId: "1:697938195108:web:45d15cfe2c709bbec82c31",
    measurementId: "G-VVMHK4THRK",
};

firebase.initializeApp(firebaseConfig);

export const firestoreDB = firebase.firestore();
export const firebaseStorage = firebase.storage().ref();
export const firebaseAuth = firebase.auth();

export default firebase;
