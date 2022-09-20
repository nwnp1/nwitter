/*import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB4aXM5KT7IWxWyUML41kjclyh9SMQkQYI",
  authDomain: "nwitter-82efa.firebaseapp.com",
  projectId: "nwitter-82efa",
  storageBucket: "nwitter-82efa.appspot.com",
  messagingSenderId: "331145022305",
  appId: "1:331145022305:web:0e2923b3e056aeaf84d320"
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth();

export default app;
*/

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4aXM5KT7IWxWyUML41kjclyh9SMQkQYI",
  authDomain: "nwitter-82efa.firebaseapp.com",
  projectId: "nwitter-82efa",
  storageBucket: "nwitter-82efa.appspot.com",
  messagingSenderId: "331145022305",
  appId: "1:331145022305:web:0e2923b3e056aeaf84d320",
};

const app = initializeApp(firebaseConfig);

export const firebaseInstance = app;
export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
