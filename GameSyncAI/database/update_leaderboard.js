import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function updateLeaderboard(userId, points) {
  const userRef = doc(db, "users", userId);
  await setDoc(userRef, { gsPoints: points }, { merge: true });
}

console.log("🚀 Real-Time Leaderboard Updates Loaded");
