import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import app from "./firebase_config";

const db = getFirestore(app);

export async function logAIAnalysis(userId, analysisType, result) {
  await addDoc(collection(db, "ai_analysis"), {
    userId,
    analysisType,
    result,
    timestamp: serverTimestamp()
  });
}

console.log("🚀 AI Real-Time Analysis Logging Loaded");
