import whisper

def generate_subtitles(audio_path):
    model = whisper.load_model("base")
    result = model.transcribe(audio_path)
    return result["text"]

print("🚀 AI Subtitles Module Loaded")
