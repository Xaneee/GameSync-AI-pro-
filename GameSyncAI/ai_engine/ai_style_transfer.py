import cv2
import numpy as np

def apply_style_transfer(content_image, style_image):
    content = cv2.imread(content_image)
    style = cv2.imread(style_image)
    return cv2.addWeighted(content, 0.6, style, 0.4, 0)

print("🚀 AI Style Transfer Module Loaded")
