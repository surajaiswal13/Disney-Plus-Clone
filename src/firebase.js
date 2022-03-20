import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBM3RnUfZvSpfs-JsyX1JfSg4CLn2Pjp5U",
    authDomain: "disney-plus-clone-3d4dd.firebaseapp.com",
    projectId: "disney-plus-clone-3d4dd",
    storageBucket: "disney-plus-clone-3d4dd.appspot.com",
    messagingSenderId: "1097861108641",
    appId: "1:1097861108641:web:ece35886d90df35c9471e0"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;