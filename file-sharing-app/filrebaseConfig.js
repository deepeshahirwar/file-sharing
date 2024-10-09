// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Yq4xQFsTsus4NTokRXPiWh37uB3IJG4",
  authDomain: "file-sharing-app-2b820.firebaseapp.com",
  projectId: "file-sharing-app-2b820",
  storageBucket: "file-sharing-app-2b820.appspot.com",
  messagingSenderId: "749239205857",
  appId: "1:749239205857:web:a7c97084712da0c41c1ca0",
  measurementId: "G-N04LD0KSDM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
