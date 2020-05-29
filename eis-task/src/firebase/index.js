import firebase from "firebase/app";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDxPFZjpXEj0SI90slh0-eftpsG0JkU3ho",
    authDomain: "testtask-689db.firebaseapp.com",
    databaseURL: "https://testtask-689db.firebaseio.com",
    projectId: "testtask-689db",
    storageBucket: "testtask-689db.appspot.com",
    messagingSenderId: "666869029966",
    appId: "1:666869029966:web:fa12fd52778d349ba8771f",
    measurementId: "G-TVF6GNJ3L7"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };