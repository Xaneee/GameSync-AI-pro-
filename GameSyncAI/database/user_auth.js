import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase_config";

const auth = getAuth(app);

export async function loginUser(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export async function logoutUser() {
    await signOut(auth);
}

console.log("🚀 Secure Login and Session Management Loaded");
