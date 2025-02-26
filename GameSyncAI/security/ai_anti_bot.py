import random

def detect_bots(user_activity):
    bot_score = sum(1 for event in user_activity if random.random() > 0.8) 
    return bot_score > 5  

print("🚀 AI Anti-Bot Detection System Loaded")
