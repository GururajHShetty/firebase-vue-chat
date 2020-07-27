// import firebase from "firebase";
import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDYQqv--mENbGWVL2ZlTR4eC2Ew9jmuXZU",
  authDomain: "fir-chat-6d1dd.firebaseapp.com",
  databaseURL: "https://fir-chat-6d1dd.firebaseio.com",
  projectId: "fir-chat-6d1dd",
  storageBucket: "fir-chat-6d1dd.appspot.com",
  messagingSenderId: "288726786874",
  appId: "1:288726786874:web:3b9c7e6d949620cfd0e603"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
