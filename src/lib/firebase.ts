import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF5UyyYAeq49DJsQVwAN5L6EuGsfbBr70",
  authDomain: "svelte-tryouts.firebaseapp.com",
  projectId: "svelte-tryouts",
  storageBucket: "svelte-tryouts.appspot.com",
  messagingSenderId: "897350121601",
  appId: "1:897350121601:web:9a066ea9fc0f7a84357580"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()