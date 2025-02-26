import cv2
import numpy as np

def remove_object(frame, mask):
    inpainted = cv2.inpaint(frame, mask, 3, cv2.INPAINT_TELEA)
    return inpainted

print("🚀 AI Object Removal Module Loaded")
