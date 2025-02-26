import os
import hashlib
import argparse

def calculate_file_hash(file_path):
    """Calculate the SHA-256 hash of a file."""
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()

def detect_modifications(original_hashes, directory):
    """Detect modifications in files within a directory based on original hashes."""
    modified_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            current_hash = calculate_file_hash(file_path)
            if file_path in original_hashes and original_hashes[file_path] != current_hash:
                modified_files.append(file_path)
    return modified_files

def load_original_hashes(hash_file):
    """Load original file hashes from a hash file."""
    original_hashes = {}
    with open(hash_file, "r") as f:
        for line in f:
            file_path, file_hash = line.strip().split(',')
            original_hashes[file_path] = file_hash
    return original_hashes

def save_original_hashes(directory, hash_file):
    """Save the original file hashes to a hash file."""
    with open(hash_file, "w") as f:
        for root, _, files in os.walk(directory):
            for file in files:
                file_path = os.path.join(root, file)
                file_hash = calculate_file_hash(file_path)
                f.write(f"{file_path},{file_hash}\n")

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description="Detect modifications in files.")
    parser.add_argument("directory", help="Directory to scan for modifications")
    parser.add_argument("hash_file", help="File to load/save original hashes")
    parser.add_argument("--save", action="store_true", help="Save original hashes instead of detecting modifications")

    args = parser.parse_args()

    if args.save:
        save_original_hashes(args.directory, args.hash_file)
    else:
        original_hashes = load_original_hashes(args.hash_file)
        modified_files = detect_modifications(original_hashes, args.directory)
        if modified_files:
            print("Modified files detected:")
            for file in modified_files:
                print(file)
        else:
            print("No modifications detected.")