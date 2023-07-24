import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANyeEhKnXwF8rKvlgb3wpaYUGNZY7ap3I",
  authDomain: "nari-376818.firebaseapp.com",
  projectId: "nari-376818",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const register = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );
    // You can save additional user data (e.g., name) to Firestore or Realtime Database here
    // ...
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserData = () => {
  const user = auth.currentUser;
  if (user) {
    const { uid, displayName, email, photoURL } = user;
    // uid: The unique user ID
    // displayName: The display name of the user (if set)
    // email: The email address of the user (if available)
    // photoURL: The URL of the user's profile photo (if available)
    return { uid, displayName, email, photoURL };
  } else {
    // User not logged in
    return null;
  }
};
const usr = getUserData();
console.log("user data : ", usr);
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const logout = async () => {
  try {
    await signOut();
  } catch (error) {
    throw new Error(error.message);
  }
};
const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
// const db = firestore();

export { getUserData, register, login, logout, GoogleAuth };
