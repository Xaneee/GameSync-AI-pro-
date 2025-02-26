import ffmpeg

def compress_video(input_video, output_video, quality="medium"):
    ffmpeg.input(input_video).output(output_video, vcodec="libx265", crf=28 if quality == "medium" else 23).run()

print("🚀 AI Video Compression Module Loaded")
