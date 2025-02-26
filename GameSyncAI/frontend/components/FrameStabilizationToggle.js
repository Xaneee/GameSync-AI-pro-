import React, { useState } from "react";

export default function FrameStabilizationToggle() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">🎥 Frame Stabilization</h2>
            <button className={`mt-2 p-2 rounded ${enabled ? "bg-green-500" : "bg-red-500"}`} 
                onClick={() => setEnabled(!enabled)}>
                {enabled ? "Enabled" : "Disabled"}
            </button>
        </div>
    );
}
