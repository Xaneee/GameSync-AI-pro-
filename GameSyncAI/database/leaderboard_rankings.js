import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function getLeaderboardRankings() {
  const usersRef = collection(db, "users");
  const snapshot = await getDocs(query(usersRef, orderBy("gsPoints", "desc")));
  let leaderboard = [];

  snapshot.forEach(doc => {
    leaderboard.push({ id: doc.id, gsPoints: doc.data().gsPoints });
  });

  return leaderboard;
}

console.log("🚀 Dynamic Leaderboard Rankings Loaded");
