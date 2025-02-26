import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function getLeaderboard() {
  const usersRef = collection(db, "users");
  const snapshot = await getDocs(usersRef);
  let leaderboard = [];
  
  snapshot.forEach(doc => {
    leaderboard.push({ id: doc.id, gsPoints: doc.data().gsPoints });
  });

  leaderboard.sort((a, b) => b.gsPoints - a.gsPoints);
  return leaderboard;
}

console.log("🚀 GS Points Leaderboard Loaded");
