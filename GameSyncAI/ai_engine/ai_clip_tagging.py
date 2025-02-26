import torch

def classify_clip_action(clip_features):
    categories = ["kill", "headshot", "clutch", "objective", "assist"]
    return categories[int(torch.argmax(torch.tensor(clip_features)))]

print("🚀 AI Clip Tagging Module Loaded")
