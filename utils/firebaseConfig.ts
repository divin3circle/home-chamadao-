import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB61VxBmv8zKLrqqhw8FP8ajfwZWTizHgc",
  authDomain: "chamadao-88c25.firebaseapp.com",
  projectId: "chamadao-88c25",
  storageBucket: "chamadao-88c25.firebasestorage.app",
  messagingSenderId: "472579166316",
  appId: "1:472579166316:web:28996c5d02d0002c92c849",
  measurementId: "G-DPTY4W1GJ3",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
