import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_API_KEY,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_APP_ID,
  measurementId: process.env.NEXT_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
