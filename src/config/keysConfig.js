
import { firebaseConfig } from "./keys";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore"

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app)
export const db = getFirestore(app);

export const _MovieListTable = collection(db, "MovieList")