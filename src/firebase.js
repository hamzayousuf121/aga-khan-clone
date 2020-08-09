import firebase from "firebase/app"; 
import  "firebase/firestore"; 
import  "firebase/database"; 
import  "firebase/auth"; 

const config = {
  
   apiKey: "AIzaSyCbDCskHLliSkz0ybdOaDR6wmTZDksxKTM",
    authDomain: "aga-khan-clone.firebaseapp.com",
    databaseURL: "https://aga-khan-clone.firebaseio.com",
    projectId: "aga-khan-clone",
    storageBucket: "aga-khan-clone.appspot.com",
    messagingSenderId: "24278591176",
    appId: "1:24278591176:web:b942da98bf8e1ef03727fd",
    measurementId: "G-NGJ512Y1MT"
  };


  // Initialize Firebase with a default Firebase project
firebase.initializeApp(config);
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence()

export default firebase;