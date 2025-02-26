import numpy as np
import cv2

def add_particle_effects(frame, intensity=5):
    noise = np.random.randint(0, 50, frame.shape, dtype=np.uint8)
    return cv2.addWeighted(frame, 0.8, noise, 0.2, 0)

print("🚀 AI Particle Effects Generator Loaded")
