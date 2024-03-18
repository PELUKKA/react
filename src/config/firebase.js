import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBZVxa5VSbo8gecVng8lI1KLNrh4Il_-RM",
    authDomain: "clase1354020.firebaseapp.com",
    projectId: "clase1354020",
    storageBucket: "clase1354020.appspot.com",
    messagingSenderId: "464683958765",
    appId: "1:464683958765:web:32dd3f543e12f73e44a7e4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);