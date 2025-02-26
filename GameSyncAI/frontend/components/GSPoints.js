import React, { useEffect, useState } from "react";
import { updateGSPoints } from "../database/gs_points_handler";

export default function GSPoints() {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        async function fetchPoints() {
            const userId = "test-user"; // Replace with auth logic
            const userPoints = await updateGSPoints(userId, 0);
            setPoints(userPoints);
        }
        fetchPoints();
    }, []);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🎯 GS Points: {points}</h2>
        </div>
    );
}
