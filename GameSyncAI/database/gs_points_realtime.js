import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export function trackGSPoints(userId, callback) {
  const userRef = doc(db, "users", userId);
  return onSnapshot(userRef, (doc) => {
    callback(doc.exists() ? doc.data().gsPoints : 0);
  });
}

console.log("🚀 Real-Time GS Points Tracking Loaded");
