import jwt from "jsonwebtoken";

export function generateToken(userId) {
  return jwt.sign({ id: userId }, "YOUR_SECRET_KEY", { expiresIn: "30d" });
}

console.log("🚀 Authentication Token Module Loaded");
