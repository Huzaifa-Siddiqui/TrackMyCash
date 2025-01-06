import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO7p0jxXT2KEQAhqL7CsVQNSUpooO2ze8",
  authDomain: "trackmycash-80911.firebaseapp.com",
  projectId: "trackmycash-80911",
  storageBucket: "trackmycash-80911.firebasestorage.app",
  messagingSenderId: "293675401286",
  appId: "1:293675401286:web:1e726a157f635d7d420a47"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
