import cv2
import numpy as np

def enhance_lighting(frame):
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    hsv[:, :, 2] = np.clip(hsv[:, :, 2] * 1.2, 0, 255)
    return cv2.cvtColor(hsv, cv2.COLOR_HSV2BGR)

print("🚀 AI Lighting Enhancement Module Loaded")
