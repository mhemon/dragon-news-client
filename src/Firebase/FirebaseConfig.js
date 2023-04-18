// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnOdxgBYHk5c-DIj0B7sndgOmcFVbRj2w",
  authDomain: "the-dragon-news-1bf57.firebaseapp.com",
  projectId: "the-dragon-news-1bf57",
  storageBucket: "the-dragon-news-1bf57.appspot.com",
  messagingSenderId: "120348440528",
  appId: "1:120348440528:web:c15cbf0f146d1a9e59abd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app