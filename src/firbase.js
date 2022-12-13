import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcsLmfGuh4pmnvFHC8yMR1b5jrGWy0jw8",
    authDomain: "mba-project-457da.firebaseapp.com",
    projectId: "mba-project-457da",
    storageBucket: "mba-project-457da.appspot.com",
    messagingSenderId: "472393578115",
    appId: "1:472393578115:web:95163676fe2f851403cdb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
