import os
import json

def generate_manifest():
    manifest = []
    base_url = "https://raw.githubusercontent.com/tanvirmahfuz100/tanvirpremium/main/files/"
    
    # Walk through the "files" directory
    for root, dirs, files in os.walk('files'):
        for file in files:
            # Skip non-PDF files (optional)
            if not file.endswith('.pdf'):
                continue
            
            # Generate URL with forward slashes
            relative_path = os.path.relpath(os.path.join(root, file), 'files')
            download_url = f"{base_url}{relative_path.replace(os.sep, '/')}"
            
            manifest.append({
                "name": file,
                "url": download_url
            })
    
    # Write manifest to repo root
    with open("manifest.json", "w") as f:
        json.dump(manifest, f, indent=2)

if __name__ == "__main__":
    generate_manifest()
