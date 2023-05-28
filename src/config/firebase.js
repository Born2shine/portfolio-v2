import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBrh3-BBhf1pKSZ2nfIrbJ4Gt7KDMCntJ0",
  authDomain: "tom-portfolio-9ba5a.firebaseapp.com",
  projectId: "tom-portfolio-9ba5a",
  storageBucket: "tom-portfolio-9ba5a.appspot.com",
  messagingSenderId: "896124219952",
  appId: "1:896124219952:web:bd254522fb1b8e91dab3f5",
  measurementId: "G-9R5HCWCHHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)