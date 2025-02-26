import cv2
import numpy as np

def remove_green_screen(frame):
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    lower_green = np.array([35, 43, 46])
    upper_green = np.array([90, 255, 255])
    mask = cv2.inRange(hsv, lower_green, upper_green)
    frame[mask != 0] = [0, 0, 0]
    return frame

print("🚀 AI Background Removal (Green Screen) Module Loaded")
