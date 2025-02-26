import cv2
import numpy as np

def auto_select_clips(video_path, output_dir):
    cap = cv2.VideoCapture(video_path)
    frame_rate = int(cap.get(cv2.CAP_PROP_FPS))
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    key_moments = []
    for i in range(0, frame_count, frame_rate * 5):  
        cap.set(cv2.CAP_PROP_POS_FRAMES, i)
        ret, frame = cap.read()
        if not ret:
            break
        key_moments.append(frame)

    cap.release()
    return key_moments

print("🚀 AI Auto Clip Selection Module Loaded")
