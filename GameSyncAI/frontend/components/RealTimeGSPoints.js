import React, { useEffect, useState } from "react";
import { trackGSPoints } from "../database/gs_points_realtime";

export default function RealTimeGSPoints({ userId }) {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const unsubscribe = trackGSPoints(userId, setPoints);
        return () => unsubscribe();
    }, [userId]);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🔥 Live GS Points: {points}</h2>
        </div>
    );
}
