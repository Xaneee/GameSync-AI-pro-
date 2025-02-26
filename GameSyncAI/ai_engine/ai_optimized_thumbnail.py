import cv2

def generate_optimized_thumbnail(video_path, output_path):
    cap = cv2.VideoCapture(video_path)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_count // 3)  

    ret, frame = cap.read()
    if ret:
        cv2.imwrite(output_path, frame)

    cap.release()

print("🚀 AI Optimized Thumbnail Generator Loaded")
