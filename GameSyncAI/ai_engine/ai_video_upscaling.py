import cv2

def upscale_video(frame, scale=2):
    return cv2.resize(frame, None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)

print("🚀 AI Video Upscaling Module Loaded")
