import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function getUserAnalytics(userId) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  return userSnap.exists() ? userSnap.data().analytics || {} : {};
}

console.log("🚀 User Analytics Module Loaded");
