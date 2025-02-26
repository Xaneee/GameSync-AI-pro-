import crypto from "crypto";

export function encryptData(data, key) {
    const cipher = crypto.createCipher("aes-256-cbc", key);
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

console.log("🚀 Security Encryption Module Loaded");
