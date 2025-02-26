import time

def verify_payment(payment_data):
    return payment_data["amount"] > 0 and payment_data["status"] == "success"

print("🚀 Advanced Payment Verification System Loaded")
