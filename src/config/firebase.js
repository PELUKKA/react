
import { initializeApp } from "firebase/app";
import {getFirestore}from"firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDe6xy0IjSKTF8zQ2HMXBS-hDHqItiXYYg",
    authDomain: "proyecto-final-react-f2ca6.firebaseapp.com",
    projectId: "proyecto-final-react-f2ca6",
    storageBucket: "proyecto-final-react-f2ca6.appspot.com",
    messagingSenderId: "18509867509",
    appId: "1:18509867509:web:50ad980e687a7f417498bc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);