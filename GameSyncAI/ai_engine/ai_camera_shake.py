import cv2
import numpy as np

def apply_camera_shake(frame, intensity=5):
    height, width = frame.shape[:2]
    tx = np.random.randint(-intensity, intensity)
    ty = np.random.randint(-intensity, intensity)
    M = np.float32([[1, 0, tx], [0, 1, ty]])
    return cv2.warpAffine(frame, M, (width, height))

print("🚀 AI Camera Shake Effect Module Loaded")
