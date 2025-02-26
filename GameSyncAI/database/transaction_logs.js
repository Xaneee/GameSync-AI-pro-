import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function logTransaction(userId, transactionType, amount) {
  const transactionRef = doc(db, "transactions", userId);
  const userSnap = await getDoc(transactionRef);

  let transactions = userSnap.exists() ? userSnap.data().transactions || [] : [];
  transactions.push({ type: transactionType, amount, timestamp: Date.now() });

  await setDoc(transactionRef, { transactions }, { merge: true });
}

console.log("🚀 GS Points Transaction Logging Loaded");
