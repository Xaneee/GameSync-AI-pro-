import cv2
import numpy as np

def apply_advanced_motion_blur(frame, blur_level=15):
    kernel = np.zeros((blur_level, blur_level))
    kernel[int((blur_level - 1)/2), :] = np.ones(blur_level)
    kernel = kernel / blur_level
    return cv2.filter2D(frame, -1, kernel)

print("🚀 AI Motion Blur Enhancement Loaded")
