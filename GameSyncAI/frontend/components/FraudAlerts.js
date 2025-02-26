import React, { useEffect, useState } from "react";

export default function FraudAlerts() {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        fetch("/backend/src/fraud_detection.rs")
            .then((res) => res.json())
            .then((data) => setAlerts(data));
    }, []);

    return (
        <div className="p-6 bg-red-700 text-white rounded-md">
            <h2 className="text-lg font-bold">⚠️ Fraud Detection Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index} className="mt-2">{alert.user} - Risk Level: {alert.fraud_risk}</li>
                ))}
            </ul>
        </div>
    );
}
