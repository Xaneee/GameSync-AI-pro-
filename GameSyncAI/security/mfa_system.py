import random
import time

def generate_mfa_code():
    return random.randint(100000, 999999)

def validate_mfa_code(input_code, generated_code):
    return input_code == generated_code

print("🚀 Multi-Factor Authentication System Loaded")
