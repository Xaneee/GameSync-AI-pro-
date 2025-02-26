import React, { useEffect, useState } from "react";
import { getTransactionHistory } from "../database/gs_points_transaction_history";

export default function TransactionHistory({ userId }) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchHistory() {
            const data = await getTransactionHistory(userId);
            setHistory(data);
        }
        fetchHistory();
    }, [userId]);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">📜 GS Points Transaction History</h2>
            <ul>
                {history.map((transaction, index) => (
                    <li key={index} className="mt-2">
                        {transaction.type}: {transaction.amount} GS Points on {new Date(transaction.timestamp).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
