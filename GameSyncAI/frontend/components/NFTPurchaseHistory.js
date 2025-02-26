import React, { useEffect, useState } from "react";

export default function NFTPurchaseHistory({ userId }) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch(`/backend/src/nft_purchase_transaction.rs?userId=${userId}`)
            .then((res) => res.json())
            .then((data) => setHistory(data));
    }, [userId]);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🛒 NFT Purchase History</h2>
            <ul>
                {history.map((purchase, index) => (
                    <li key={index} className="mt-2">
                        {purchase.asset_id} - {purchase.price} Tokens - {purchase.buyer}
                    </li>
                ))}
            </ul>
        </div>
    );
}
