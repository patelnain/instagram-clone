import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhqOxZZ16OsP-Yh2cI9vWmsQaNIklpbQg",
  authDomain: "insta-clone-57e50.firebaseapp.com",
  projectId: "insta-clone-57e50",
  storageBucket: "insta-clone-57e50.appspot.com",
  messagingSenderId: "920040812119",
  appId: "1:920040812119:web:a7a1e1d901249861307d12",
  measurementId: "G-B1HEV0NQC7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
