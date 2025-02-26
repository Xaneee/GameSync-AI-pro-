import time

def log_event(event):
    with open("security/event_logs.txt", "a") as log_file:
        log_file.write(f"{time.strftime("%Y-%m-%d %H:%M:%S")} - {event}\n")

print("🚀 AI-Based Event Logging System Loaded")
