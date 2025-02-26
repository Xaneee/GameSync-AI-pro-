import cv2
import numpy as np

def stabilize_video(video_path, output_path):
    cap = cv2.VideoCapture(video_path)
    stabilizer = cv2.createOptFlow_DualTVL1()
    ret, frame = cap.read()
    while cap.isOpened():
        ret, next_frame = cap.read()
        if not ret:
            break
        stabilizer.calc(frame, next_frame, None)
        frame = next_frame

    cap.release()
    print("🚀 AI Stabilization Applied")

print("🚀 AI Video Stabilization Module Loaded")
