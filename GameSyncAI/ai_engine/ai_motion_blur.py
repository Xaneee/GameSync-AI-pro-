import cv2
import numpy as np

def apply_motion_blur(image, kernel_size=10):
    kernel = np.zeros((kernel_size, kernel_size))
    kernel[int((kernel_size - 1)/2), :] = np.ones(kernel_size)
    kernel = kernel / kernel_size
    return cv2.filter2D(image, -1, kernel)

print("🚀 AI Motion Blur Module Loaded")
