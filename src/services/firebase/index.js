// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TOD O: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB0MES6u3RFdnFYnD80L9dgAfqLw2q4ClU",
	authDomain: "ecommerce31145-react-587ad.firebaseapp.com",
	projectId: "ecommerce31145-react-587ad",
	storageBucket: "ecommerce31145-react-587ad.appspot.com",
	messagingSenderId: "782936354629",
	appId: "1:782936354629:web:60b47719b2041bd0a3d82c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
