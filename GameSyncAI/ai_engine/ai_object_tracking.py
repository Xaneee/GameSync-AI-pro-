import cv2
import numpy as np

def track_objects(video_path):
    cap = cv2.VideoCapture(video_path)
    tracker = cv2.legacy.TrackerMOSSE_create()
    
    ret, frame = cap.read()
    bbox = cv2.selectROI("Tracking", frame, False)
    tracker.init(frame, bbox)

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        success, bbox = tracker.update(frame)
        if success:
            p1 = (int(bbox[0]), int(bbox[1]))
            p2 = (int(bbox[0] + bbox[2]), int(bbox[1] + bbox[3]))
            cv2.rectangle(frame, p1, p2, (255, 0, 0), 2, 1)
        cv2.imshow("Tracking", frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    cap.release()
    cv2.destroyAllWindows()

print("🚀 AI Object Tracking Module Loaded")
