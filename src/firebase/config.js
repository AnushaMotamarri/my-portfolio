import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD0_wWISFFBaocwFXXF0BJEdKQS7NLf_KQ",
    authDomain: "portfolio-459b3.firebaseapp.com",
    projectId: "portfolio-459b3",
    storageBucket: "portfolio-459b3.appspot.com",
    messagingSenderId: "1001276344518",
    appId: "1:1001276344518:web:de73a1c7499b33c0faefc7"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore =firebase.firestore();

export {projectFirestore,projectStorage}