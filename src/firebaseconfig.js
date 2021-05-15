import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDorwLqTEqBGabC0qoUreGtAb4L4CfF8Us",
    authDomain: "consultorio-89d2f.firebaseapp.com",
    projectId: "consultorio-89d2f",
    storageBucket: "consultorio-89d2f.appspot.com",
    messagingSenderId: "548801257267",
    appId: "1:548801257267:web:83fc5a4852b557d5a06846",
    measurementId: "G-KBZ5PF8ZJT"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  const auth = fire.auth();
  export {auth};