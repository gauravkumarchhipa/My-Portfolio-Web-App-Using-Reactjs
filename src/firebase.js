import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiZ4JQ8bMJgP90TwAGL4EkdZRBF_KW2Nw",
  authDomain: "react-portfolio-ca63b.firebaseapp.com",
  projectId: "react-portfolio-ca63b",
  storageBucket: "react-portfolio-ca63b.appspot.com",
  messagingSenderId: "510829009897",
  appId: "1:510829009897:web:2b788aee16e6f25b2f4978"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();