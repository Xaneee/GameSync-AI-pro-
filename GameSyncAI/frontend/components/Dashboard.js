import React, { useEffect, useState } from "react";
import { getUserAnalytics } from "../database/user_analytics";

export default function Dashboard() {
    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        async function fetchAnalytics() {
            const userId = "test-user"; 
            const data = await getUserAnalytics(userId);
            setAnalytics(data);
        }
        fetchAnalytics();
    }, []);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">📊 User Dashboard</h2>
            <p>Total Clips Created: {analytics.total_clips_created || 0}</p>
            <p>GS Points Earned: {analytics.gs_points_earned || 0}</p>
        </div>
    );
}
