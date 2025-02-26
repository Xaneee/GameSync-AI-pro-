import React, { useEffect, useState } from "react";

export default function LiveLeaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch("/backend/src/gs_points_leaderboard_storage.rs")
            .then((res) => res.json())
            .then((data) => setLeaderboard(data));
    }, []);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🏆 Live Leaderboard</h2>
            <ul>
                {leaderboard.map((user, index) => (
                    <li key={index} className="mt-2">#{index + 1} - {user.user}: {user.gs_points} GS Points</li>
                ))}
            </ul>
        </div>
    );
}
