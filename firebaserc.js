// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCGc_PL_p6sCEFIqbEKQ9pCw4cK56NCZK8',
  authDomain: 'portone-ex.firebaseapp.com',
  projectId: 'portone-ex',
  storageBucket: 'portone-ex.appspot.com',
  messagingSenderId: '355928545927',
  appId: '1:355928545927:web:11f9364d959b701f4fb622',
  measurementId: 'G-S8TV16N9X9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
