// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsAnaTCoJb0vIGhrDi07Xx4Gx0kk9lIUM",
  authDomain: "crud-326d4.firebaseapp.com",
  databaseURL: "https://crud-326d4.firebaseio.com",
  projectId: "crud-326d4",
  storageBucket: "crud-326d4.appspot.com",
  messagingSenderId: "300000700978",
  appId: "1:300000700978:web:262c09c191d23d54a22a2b"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;