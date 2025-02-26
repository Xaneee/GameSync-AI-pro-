import React, { useEffect, useState } from "react";

export default function AIOverlay({ text }) {
    return (
        <div className="absolute top-5 left-5 p-4 bg-black bg-opacity-50 text-white rounded-md">
            <h2 className="text-lg font-bold">{text}</h2>
        </div>
    );
}
