import cv2

def generate_text_overlay(frame, text="Highlight!", position=(50, 50), color=(255, 255, 255)):
    font = cv2.FONT_HERSHEY_SIMPLEX
    cv2.putText(frame, text, position, font, 1, color, 2, cv2.LINE_AA)
    return frame

print("🚀 AI Text Overlay Generator Loaded")
