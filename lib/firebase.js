
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgd2KcL1QExQhfM5TU3gtuogiPVQfz3yw",
  authDomain: "holochat-jugwb.firebaseapp.com",
  projectId: "holochat-jugwb",
  storageBucket: "holochat-jugwb.appspot.com",
  messagingSenderId: "590331774580",
  appId: "1:590331774580:web:a3c53ff39f2a1885f5b321"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
