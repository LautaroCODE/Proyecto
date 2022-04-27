// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TOD O: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAx50Z6Ej-h0tSpWv8ZHRDHQ04g9FdY5iI",
	authDomain: "ecommerce31145-react.firebaseapp.com",
	projectId: "ecommerce31145-react",
	storageBucket: "ecommerce31145-react.appspot.com",
	messagingSenderId: "953005917024",
	appId: "1:953005917024:web:cfcdec80f1e075753a1405",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
