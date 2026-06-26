import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASKXXbsHpIlzWhch_z7oYGwS3lvsBb4Dw",
  authDomain: "interviewx-e3e46.firebaseapp.com",
  projectId: "interviewx-e3e46",
  storageBucket: "interviewx-e3e46.firebasestorage.app",
  messagingSenderId: "409171114159",
  appId: "1:409171114159:web:2ece4aae247aa75d79fc5a",
  measurementId: "G-788GNFJHWQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
