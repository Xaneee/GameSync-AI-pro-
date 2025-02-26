const cv = require('opencv4nodejs');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Set up video capture
const wCap = new cv.VideoCapture(0);
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 640);
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 480);

// Serve static files
app.use(express.static('public'));

// Handle socket connection
io.on('connection', (socket) => {
    console.log('New client connected');
    
    const sendFrame = () => {
        const frame = wCap.read();
        const image = cv.imencode('.jpg', frame).toString('base64');
        socket.emit('frame', image);
    };

    const interval = setInterval(sendFrame, 1000 / 30); // 30 FPS

    socket.on('disconnect', () => {
        clearInterval(interval);
        console.log('Client disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
process.on('SIGINT', () => {
    wCap.release();
    process.exit();
});