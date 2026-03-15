// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Ct5MXfUuSJLGfd0vwW9dnx3JwAf3mV8",
  authDomain: "test-learn-73ba9.firebaseapp.com",
  projectId: "test-learn-73ba9",
  storageBucket: "test-learn-73ba9.firebasestorage.app",
  messagingSenderId: "700456625903",
  appId: "1:700456625903:web:82e9f3dc5436f337d29d1a",
  measurementId: "G-C7Y7P86Q7B",
  databaseURL: "https://test-learn-73ba9-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
