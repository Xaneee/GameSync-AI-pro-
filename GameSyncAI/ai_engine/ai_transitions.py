import cv2
import numpy as np

def generate_transition(frame1, frame2, effect="fade"):
    if effect == "fade":
        return cv2.addWeighted(frame1, 0.5, frame2, 0.5, 0)
    elif effect == "slide":
        return np.hstack((frame1[:, :frame1.shape[1]//2], frame2[:, frame2.shape[1]//2:]))
    return frame2

print("🚀 AI Transitions Module Loaded")
