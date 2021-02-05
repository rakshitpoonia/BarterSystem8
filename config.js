import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDkqgHeht2cCjP2YCCwZeqdlWaGklVBqc0",
  authDomain: "bartersystem-3baa7.firebaseapp.com",
  databaseURL: "https://bartersystem-3baa7-default-rtdb.firebaseio.com",
  projectId: "bartersystem-3baa7",
  storageBucket: "bartersystem-3baa7.appspot.com",
  messagingSenderId: "4980129186",
  appId: "1:4980129186:web:41337b3f93f38c3ab606fb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();