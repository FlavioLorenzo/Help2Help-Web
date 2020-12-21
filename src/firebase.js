import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAXT-tOOy0AS6aVnAkDvoMddLOLiyfJfk",
    authDomain: "help-2-help.firebaseapp.com",
    projectId: "help-2-help",
    storageBucket: "help-2-help.appspot.com",
    messagingSenderId: "697938195108",
    appId: "1:697938195108:web:45d15cfe2c709bbec82c31",
    measurementId: "G-VVMHK4THRK"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase