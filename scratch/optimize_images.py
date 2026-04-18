import os
from PIL import Image

def optimize_images(directory, target_width=900, quality=75):
    if not os.path.exists(directory):
        print(f"Directory {directory} not found.")
        return

    for filename in os.listdir(directory):
        # Skip already optimized or unrelated files
        if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
            continue
            
        file_path = os.path.join(directory, filename)
        try:
            with Image.open(file_path) as img:
                # Maintain aspect ratio while resizing
                if img.width > target_width:
                    w_percent = (target_width / float(img.width))
                    h_size = int((float(img.height) * float(w_percent)))
                    # Use LANCZOS for high-quality downsampling
                    img = img.resize((target_width, h_size), Image.Resampling.LANCZOS)
                
                # Define output path
                # We save with the same name but .webp extension
                new_filename = os.path.splitext(filename)[0] + ".webp"
                new_path = os.path.join(directory, new_filename)
                
                # Save as WebP
                img.save(new_path, "WEBP", quality=quality, method=6) # method=6 for speed/quality balance
                print(f"Optimized: {filename} ({os.path.getsize(file_path)/1024:.1f}KB) -> {new_filename} ({os.path.getsize(new_path)/1024:.1f}KB)")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    # Current working directory is projects/portifolio
    img_dir = "assets/images"
    optimize_images(img_dir)
