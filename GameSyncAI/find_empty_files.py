import os

def find_empty_files(directory):
    empty_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            if os.path.isfile(file_path) and os.path.getsize(file_path) == 0:
                empty_files.append(file_path)
    
    return empty_files

# Set this to the root of your project
project_directory = "."

empty_files = find_empty_files(project_directory)

if empty_files:
    print("🚨 Empty Files Found:")
    for file in empty_files:
        print(file)
    
    # Save report
    with open("empty_files_report.txt", "w") as report:
        report.write("\n".join(empty_files))
    
    print("\n✅ Report saved as empty_files_report.txt")
else:
    print("🎉 No empty files found!")

