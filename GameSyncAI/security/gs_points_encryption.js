import crypto from "crypto";

export function secureEncrypt(data, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-gcm", Buffer.from(key), iv);
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");
    return { encryptedData: encrypted, iv: iv.toString("hex") };
}

console.log("🚀 Advanced GS Points Encryption Module Loaded");
