import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function getTransactionHistory(userId) {
  const transactionsRef = collection(db, "users", userId, "transactions");
  const snapshot = await getDocs(transactionsRef);
  let history = [];
  
  snapshot.forEach(doc => {
    history.push(doc.data());
  });

  return history;
}

console.log("🚀 GS Points Transaction History Loaded");
