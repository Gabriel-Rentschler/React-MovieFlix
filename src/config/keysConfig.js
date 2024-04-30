
import { firebaseConfig } from "./keys";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();