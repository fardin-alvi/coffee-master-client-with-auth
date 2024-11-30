import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyC0Y3qX5ijoczM_xAzVC0fRctxIx99QNH8",
    authDomain: "coffee-master-fa005.firebaseapp.com",
    projectId: "coffee-master-fa005",
    storageBucket: "coffee-master-fa005.firebasestorage.app",
    messagingSenderId: "734984409797",
    appId: "1:734984409797:web:25f9b95d5709ae4ac3d6ac"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);