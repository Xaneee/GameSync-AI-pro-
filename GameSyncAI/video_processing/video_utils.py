import ffmpeg

def apply_slow_motion(input_video, output_video, speed=0.5):
    ffmpeg.input(input_video).filter("setpts", str(1/speed)+"*PTS").output(output_video).run()

print("🚀 FFmpeg Video Processing Module Loaded")
