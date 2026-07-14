
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCmS3JQazcHZFRtBejK-shUzVeHbwmDCsk",
  authDomain: "cubes-62678.firebaseapp.com",
  projectId: "cubes-62678",
  storageBucket: "cubes-62678.firebasestorage.app",
  messagingSenderId: "805108012327",
  appId: "1:805108012327:web:a895ef82ca64bf58fbc502",
  measurementId: "G-4EEXD4KKC4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
