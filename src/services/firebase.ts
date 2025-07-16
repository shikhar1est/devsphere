
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCx6rHZKKncSZF9V21E6U-IfgajRzm_10",
  authDomain: "devsphere-6fc5d.firebaseapp.com",
  projectId: "devsphere-6fc5d",
  storageBucket: "devsphere-6fc5d.firebasestorage.app",
  messagingSenderId: "744087065549",
  appId: "1:744087065549:web:e0dfef49178f228ef2aa84"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
