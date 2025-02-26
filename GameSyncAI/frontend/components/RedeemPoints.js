import React, { useState } from "react";
import axios from "axios";

export default function RedeemPoints() {
    const [points, setPoints] = useState(0);
    const [message, setMessage] = useState("");

    async function redeem() {
        const response = await axios.post("http://localhost:3001/", { user_id: "test-user", points });
        setMessage(response.data.message);
    }

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🎁 Redeem GS Points</h2>
            <input
                type="number"
                className="mt-2 p-2 bg-gray-700 rounded"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
            />
            <button className="mt-2 p-2 bg-green-500 rounded" onClick={redeem}>Redeem</button>
            {message && <p className="mt-2">{message}</p>}
        </div>
    );
}
