import React, { useEffect, useRef } from "react";

export default function AudioVisualizer({ audioStream }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const analyser = audioStream.getAnalyser();

        function draw() {
            requestAnimationFrame(draw);
            const dataArray = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(dataArray);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "lime";
            dataArray.forEach((value, i) => {
                ctx.fillRect(i * 2, canvas.height - value, 2, value);
            });
        }
        draw();
    }, [audioStream]);

    return <canvas ref={canvasRef} className="w-full h-20 bg-black" />;
}
