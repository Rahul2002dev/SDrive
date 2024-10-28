// firebaseConfigTemplate.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


console.log("API Key:", import.meta.env.VITE_APIKEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export default firebaseConfig;
