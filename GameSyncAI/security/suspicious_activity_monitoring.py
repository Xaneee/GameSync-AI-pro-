import time

def monitor_suspicious_activity(events):
    flagged = [e for e in events if e["type"] == "suspicious"]
    return flagged

print("🚀 Suspicious Activity Monitoring System Loaded")
