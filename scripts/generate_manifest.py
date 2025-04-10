
import os
import json

def generate_manifest():
    manifest = []
    base_url = "https://raw.githubusercontent.com/tanvirmahfuz100/tanvirpremium/main/files/"
    
    for root, dirs, files in os.walk('files'):
        for file in files:
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, 'files')
            download_url = f"{base_url}{relative_path}"
            manifest.append({
                "name": file,
                "url": download_url
            })
    
    with open("manifest.json", "w") as f:
        json.dump(manifest, f, indent=2)

if __name__ == "__main__":
    generate_manifest()
