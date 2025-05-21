// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXUfBQuWCPw9V0vR12lNhECoscttb_CmA",
  authDomain: "opinatec-74d85.firebaseapp.com",
  projectId: "opinatec-74d85",
  storageBucket: "opinatec-74d85.firebasestorage.app",
  messagingSenderId: "679129672881",
  appId: "1:679129672881:web:80e38e2079539dbcca4690"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
