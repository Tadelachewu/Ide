import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBISQR-DfjT8531eo8P_v4IZxC9BHVJPL4",
  authDomain: "fanoapp-f8d35.firebaseapp.com",
  projectId: "fanoapp-f8d35",
  storageBucket: "fanoapp-f8d35.appspot.com",
  messagingSenderId: "359456053650",
  appId: "1:359456053650:web:33f86ddff08553148c494b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export {auth};
export default app;