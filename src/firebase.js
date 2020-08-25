import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDO5wiloThl0r6WggxmYV9T_49jHkZ-IQ8",
  authDomain: "insta-reels-react.firebaseapp.com",
  databaseURL: "https://insta-reels-react.firebaseio.com",
  projectId: "insta-reels-react",
  storageBucket: "insta-reels-react.appspot.com",
  messagingSenderId: "972952302002",
  appId: "1:972952302002:web:c8b27eef17a1da6322f4ab"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
