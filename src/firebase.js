
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUFWBM6g0Zxp56P87cYDy7OwCOuBDOFwk",
  authDomain: "taskmanager-bf7be.firebaseapp.com",
  databaseURL: "https://taskmanager-bf7be-default-rtdb.firebaseio.com",
  projectId: "taskmanager-bf7be",
  storageBucket: "taskmanager-bf7be.firebasestorage.app",
  messagingSenderId: "392860004832",
  appId: "1:392860004832:web:780658993534db9882fb85"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const  db = getFirestore(app);