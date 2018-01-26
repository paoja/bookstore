import firebase from 'firebase'
import 'firebase/firestore'


var config = {
    apiKey: "AIzaSyALv0N9YeqZnAkPXo2dZm4Vm0fDP9ELXZE",
    authDomain: "book-store-b1472.firebaseapp.com",
    databaseURL: "https://book-store-b1472.firebaseio.com",
    projectId: "book-store-b1472",
    storageBucket: "book-store-b1472.appspot.com",
    messagingSenderId: "992241549115"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;
