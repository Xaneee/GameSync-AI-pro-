import cv2
import numpy as np

def detect_highlight(frame):
    brightness = np.mean(frame)
    if brightness > 180:
        return "Bright Scene - Possible Highlight"
    return "Normal Scene"

print("🚀 AI Auto Highlights Module Loaded")
