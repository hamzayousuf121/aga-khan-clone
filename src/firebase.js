import firebase from "firebase/app"; 
import  "firebase/firestore"; 
import  "firebase/database"; 
import  "firebase/auth"; 

const config = {
  
   apiKey: "",
    authDomain: "aga-khan-clone.firebaseapp.com",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };


  // Initialize Firebase with a default Firebase project
firebase.initializeApp(config);
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence()

export default firebase;
