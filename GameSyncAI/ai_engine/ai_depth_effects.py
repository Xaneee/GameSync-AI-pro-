import cv2
import numpy as np

def apply_depth_effect(frame, intensity=3):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    depth_map = cv2.GaussianBlur(gray, (intensity, intensity), 0)
    return cv2.applyColorMap(depth_map, cv2.COLORMAP_JET)

print("🚀 AI Depth Effects Module Loaded")
