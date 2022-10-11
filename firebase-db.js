// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Yu0AIGOl3zzjdoMhft6jfY2yLqRQfHA",
  authDomain: "cloudoldoado.firebaseapp.com",
  databaseURL: "https://cloudoldoado-default-rtdb.firebaseio.com",
  projectId: "cloudoldoado",
  storageBucket: "cloudoldoado.appspot.com",
  messagingSenderId: "402338188521",
  appId: "1:402338188521:web:229cd6a476d34dd85d3478",
  measurementId: "G-S4922MWRQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);