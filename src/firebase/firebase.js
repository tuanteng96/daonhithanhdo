import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDVb1ioOAyOMlaJdK1MerzV0FH0zMr54ZI",
    authDomain: "daonhithanhdo-72433.firebaseapp.com",
    projectId: "daonhithanhdo-72433",
    storageBucket: "daonhithanhdo-72433.appspot.com",
    messagingSenderId: "798840130629",
    appId: "1:798840130629:web:464d9f5a5fe6f829a8a72c",
    measurementId: "G-50L6HV9DE7"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };