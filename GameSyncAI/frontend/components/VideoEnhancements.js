import React, { useEffect, useState } from "react";

export default function VideoEnhancements() {
    const [enhancements, setEnhancements] = useState(["Cinematic Zoom", "Lighting Enhancement"]);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🎬 Live Video Enhancements</h2>
            <ul>
                {enhancements.map((effect, index) => (
                    <li key={index} className="mt-2">✅ {effect}</li>
                ))}
            </ul>
        </div>
    );
}
