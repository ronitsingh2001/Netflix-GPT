// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbA_mVU5Sx_ajeINx4DXwD1cT5G0z5TIg",
  authDomain: "netflix-gpt-b62b4.firebaseapp.com",
  projectId: "netflix-gpt-b62b4",
  storageBucket: "netflix-gpt-b62b4.appspot.com",
  messagingSenderId: "637497426053",
  appId: "1:637497426053:web:615ff1a00d181b715469ec",
  measurementId: "G-9RWTFFH131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();