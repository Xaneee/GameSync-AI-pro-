import React, { useEffect, useState } from "react";
import { updateLeaderboard } from "../database/update_leaderboard";

export default function GSPointsTracker({ userId }) {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        async function fetchPoints() {
            const userPoints = await updateLeaderboard(userId, 0);
            setPoints(userPoints);
        }
        fetchPoints();
    }, [userId]);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🔥 Live GS Points: {points}</h2>
        </div>
    );
}
