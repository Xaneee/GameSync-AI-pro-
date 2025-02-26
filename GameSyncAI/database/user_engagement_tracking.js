import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function trackUserEngagement(userId, action) {
  await addDoc(collection(db, "user_engagement"), {
    userId,
    action,
    timestamp: serverTimestamp()
  });
}

console.log("🚀 Real-Time User Engagement Tracking Loaded");
