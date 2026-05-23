// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { getStorage } from "firebase/storage";

export const resetPassword = async (email) => {
  const auth = getAuth();
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Correo de recuperación enviado. Revisa tu bandeja de entrada.');
  } catch (error) {
    console.error(error);
    alert('Error al enviar el correo de recuperación.');
  }
};


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAPm8fxe7qDVn4-UTWKDKfDBOzOTPAbg7A",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "freya-app-bd.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "freya-app-bd",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "freya-app-bd.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "302665316692",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:302665316692:web:5c2c57b0827c4e843530c1",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-B09LYXNH45",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage }; 
