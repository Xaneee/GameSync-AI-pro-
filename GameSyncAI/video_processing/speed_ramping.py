import cv2

def apply_speed_ramp(video_path, output_path, speed_factor=2.0):
    cap = cv2.VideoCapture(video_path)
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    out = cv2.VideoWriter(output_path, fourcc, 30.0 / speed_factor, (640, 480))

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        out.write(frame)

    cap.release()
    out.release()

print("🚀 AI Speed Ramping Module Loaded")
