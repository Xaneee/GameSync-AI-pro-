import React, { useEffect, useState } from "react";

export default function AINotifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch("/backend/src/real_time_notifications.rs")
            .then((res) => res.json())
            .then((data) => setNotifications(data));
    }, []);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">📢 AI Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index} className="mt-2">{notification.user}: {notification.message}</li>
                ))}
            </ul>
        </div>
    );
}
