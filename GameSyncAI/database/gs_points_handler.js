import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function updateGSPoints(userId, points) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    let currentPoints = userSnap.data().gsPoints || 0;
    await setDoc(userRef, { gsPoints: currentPoints + points }, { merge: true });
  } else {
    await setDoc(userRef, { gsPoints: points });
  }
}

console.log("🚀 GS Points System Initialized");
