import React, { useEffect, useState } from "react";

export default function MarketplaceListings() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/backend/src/marketplace_listings.rs")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🛒 Marketplace Listings</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="mt-2">
                        {item.item} - {item.price} GS Points
                    </li>
                ))}
            </ul>
        </div>
    );
}
