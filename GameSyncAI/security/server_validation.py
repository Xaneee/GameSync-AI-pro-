import axios from "axios";

export async function validatePurchase(userId, transactionId) {
    const response = await axios.post("https://secure-server.com/validate", {
        userId,
        transactionId
    });

    return response.data.valid;
}

console.log("🚀 Server Validation Module Loaded");
