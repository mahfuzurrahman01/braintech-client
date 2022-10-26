// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFhN-6KZZEsrSHa3K8O4y47z9F_wo8cRs",
  authDomain: "braintech-app.firebaseapp.com",
  projectId: "braintech-app",
  storageBucket: "braintech-app.appspot.com",
  messagingSenderId: "1024656422524",
  appId: "1:1024656422524:web:9a52a8dfc94befa45bfbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;