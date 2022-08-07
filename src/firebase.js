import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyA1fa2LzQe7PxIxot8xwkgxuHZW6U1WNos",
    authDomain: "whatsapp-clone-fd2a6.firebaseapp.com",
    projectId: "whatsapp-clone-fd2a6",
    storageBucket: "whatsapp-clone-fd2a6.appspot.com",
    messagingSenderId: "667260738110",
    appId: "1:667260738110:web:4371152f0c5adfad72cf6f",
    measurementId: "G-JDYFD0BNFL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;