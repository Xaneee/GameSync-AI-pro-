import React, { useState } from "react";
import axios from "axios";

export default function PaymentUI() {
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");

    async function processPayment() {
        const response = await axios.post("http://localhost:3001/payment/process", { user: "test-user", amount });
        setMessage(response.data.message);
    }

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">�� Web3 Payment Processing</h2>
            <input type="number" className="mt-2 p-2 bg-gray-700 rounded" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button className="mt-2 p-2 bg-blue-500 rounded" onClick={processPayment}>Pay</button>
            {message && <p className="mt-2">{message}</p>}
        </div>
    );
}
