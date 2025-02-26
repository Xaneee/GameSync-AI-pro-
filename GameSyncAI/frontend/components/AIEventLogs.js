import React, { useEffect, useState } from "react";

export default function AIEventLogs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetch("/security/event_logs.txt")
            .then((res) => res.text())
            .then((text) => setLogs(text.split("\n").filter((log) => log !== "")));
    }, []);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-md">
            <h2 className="text-lg font-bold">📝 AI Event Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index} className="mt-2">{log}</li>
                ))}
            </ul>
        </div>
    );
}
