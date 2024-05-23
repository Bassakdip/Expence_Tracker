
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFTRme7IB0-5s7MWkm1JGgr127GgIC4pI",
  authDomain: "expence-tracker-7482f.firebaseapp.com",
  projectId: "expence-tracker-7482f",
  storageBucket: "expence-tracker-7482f.appspot.com",
  messagingSenderId: "591863084659",
  appId: "1:591863084659:web:8f0b1cee705ca69b895c06",
  measurementId: "G-9J85KQ3N8H",
  databaseUrl: " https://expence-tracker-7482f-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };