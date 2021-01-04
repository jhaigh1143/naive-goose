import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDsfd5hrTR1cI0QPvMeueX1D-izWX5aduU",
  authDomain: "naivegoose.firebaseapp.com",
  projectId: "naivegoose",
  storageBucket: "naivegoose.appspot.com",
  messagingSenderId: "118417357060",
  appId: "1:118417357060:web:e7cf75d4c3fe147614b851"
};

firebase.initializeApp(firebaseConfig);

export default firebase;