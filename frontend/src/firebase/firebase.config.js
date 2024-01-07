// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDNBM83FtwPz4Q8xvgyb2pm1wnxBVTUCc",
  authDomain: "mern-book-client.firebaseapp.com",
  projectId: "mern-book-client",
  storageBucket: "mern-book-client.appspot.com",
  messagingSenderId: "727381732931",
  appId: "1:727381732931:web:8607c59981b974ea8caef6",
  measurementId: "G-Y64H7FL0KJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;