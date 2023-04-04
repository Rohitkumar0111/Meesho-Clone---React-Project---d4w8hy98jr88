
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD---lY7C03WKzH03vQZGNhWKpv67V_S4s",
  authDomain: "my-shop-57a28.firebaseapp.com",
  projectId: "my-shop-57a28",
  storageBucket: "my-shop-57a28.appspot.com",
  messagingSenderId: "1094791803973",
  appId: "1:1094791803973:web:6afec0aa8ac559664cdf2c",
  measurementId: "G-QQF7T5F32F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export   {auth,provider};