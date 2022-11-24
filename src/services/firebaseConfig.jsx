import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWY9Gc2PX1_S8hzA7GxW8fYynJnGYI6wg",
  authDomain: "reactjs-camada-34775-glktk.firebaseapp.com",
  projectId: "reactjs-camada-34775-glktk",
  storageBucket: "reactjs-camada-34775-glktk.appspot.com",
  messagingSenderId: "864979864791",
  appId: "1:864979864791:web:0c4f50ed81fb06b69ab492"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)