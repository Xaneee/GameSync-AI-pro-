import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../database/gs_points_leaderboard";

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        async function fetchLeaderboard() {
            const data = await getLeaderboard();
            setLeaderboard(data);
        }
        fetchLeaderboard();
    }, []);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🏆 GS Points Leaderboard</h2>
            <ul>
                {leaderboard.map((user, index) => (
                    <li key={index} className="mt-2">#{index + 1} - {user.id}: {user.gsPoints} points</li>
                ))}
            </ul>
        </div>
    );
}
