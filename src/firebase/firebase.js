import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.DATABASE_URL,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSENGER_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,
  apiKey: "AIzaSyCocFptYuYOSorVbZo3WrLuoX4u_HpuNP0",
  authDomain: "budget-manager-ba868.firebaseapp.com",
  databaseURL: "https://budget-manager-ba868-default-rtdb.firebaseio.com",
  projectId: "budget-manager-ba868",
  storageBucket: "budget-manager-ba868.appspot.com",
  messagingSenderId: "264381291799",
  appId: "1:264381291799:web:7d71d4955936a17c292b52",
  measurementId: "G-KF4T5PNDKX"
};
// Initialize Firestore
const initializeApp = firebase.initializeApp(firebaseConfig);
const firestore = initializeApp.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const database = firestore.collection("expenses");
export { firebase, googleAuthProvider };
