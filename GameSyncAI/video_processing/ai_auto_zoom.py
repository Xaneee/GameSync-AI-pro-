import cv2

def apply_auto_zoom(video_path, output_path):
    cap = cv2.VideoCapture(video_path)
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    out = cv2.VideoWriter(output_path, fourcc, 30.0, (640, 480))

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        zoomed = cv2.resize(frame, (640, 480), interpolation=cv2.INTER_LINEAR)
        out.write(zoomed)
    
    cap.release()
    out.release()

print("🚀 AI Auto Zoom Module Loaded")
