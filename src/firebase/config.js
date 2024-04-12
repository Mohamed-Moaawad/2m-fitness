// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getStorage } from 'firebase/storage'

import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDEsoBiZwBHuj7ugToZeQUqNv854GNuu0",
    authDomain: "m-fitness-128bb.firebaseapp.com",
    projectId: "m-fitness-128bb",
    storageBucket: "m-fitness-128bb.appspot.com",
    messagingSenderId: "19767502810",
    appId: "1:19767502810:web:dd7e6b4b9cf8cdd352c2e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const storageDB = getStorage(app)

export const db = getFirestore(app)