import librosa
import numpy as np

def analyze_voice(audio_path):
    y, sr = librosa.load(audio_path)
    pitch = librosa.yin(y, fmin=75, fmax=600)
    return np.mean(pitch)

print("🚀 AI Real-Time Voice Analysis Module Loaded")
