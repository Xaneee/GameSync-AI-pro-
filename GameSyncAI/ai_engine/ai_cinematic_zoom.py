import cv2

def apply_cinematic_zoom(frame, zoom_factor=1.2):
    height, width = frame.shape[:2]
    center_x, center_y = width // 2, height // 2
    new_width, new_height = int(width / zoom_factor), int(height / zoom_factor)
    cropped = frame[center_y - new_height//2:center_y + new_height//2, center_x - new_width//2:center_x + new_width//2]
    return cv2.resize(cropped, (width, height))

print("🚀 AI Cinematic Zoom Effect Module Loaded")
