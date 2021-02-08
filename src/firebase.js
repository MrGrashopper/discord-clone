import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCCrhNvTStzXdB_NznIJhVAw8ZT9ehRnIM",
    authDomain: "discord-clone-ac740.firebaseapp.com",
    projectId: "discord-clone-ac740",
    storageBucket: "discord-clone-ac740.appspot.com",
    messagingSenderId: "873370659470",
    appId: "1:873370659470:web:8b3d6500a2ca077c05f7df"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;