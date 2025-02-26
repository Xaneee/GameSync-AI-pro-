const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

// Function to process video
function processVideo(inputPath, outputPath, callback) {
    ffmpeg(inputPath)
        .output(outputPath)
        .on('end', () => {
            console.log('Processing finished successfully');
            callback(null);
        })
        .on('error', (err) => {
            console.error('Error processing video: ' + err.message);
            callback(err);
        })
        .run();
}

// Example usage
const inputVideoPath = path.join(__dirname, 'input.mp4');
const outputVideoPath = path.join(__dirname, 'output.mp4');

processVideo(inputVideoPath, outputVideoPath, (err) => {
    if (err) {
        console.error('Failed to process video:', err);
    } else {
        console.log('Video processed successfully');
    }
});

module.exports = {
    processVideo
};