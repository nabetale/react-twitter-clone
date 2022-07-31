// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy5kosCZWj25P3sczdOkv0R-imb6IenEA",
  authDomain: "twitter-clone-udemy-e9ea7.firebaseapp.com",
  projectId: "twitter-clone-udemy-e9ea7",
  storageBucket: "twitter-clone-udemy-e9ea7.appspot.com",
  messagingSenderId: "412288642045",
  appId: "1:412288642045:web:0d008e24cdec0e0097c794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;