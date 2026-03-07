from PIL import Image, ImageChops
import os

def trim_white(img):
    # Create a solid white background image of the same size
    bg = Image.new(img.mode, img.size, (255, 255, 255))
    # Calculate the difference between the image and the white background
    diff = ImageChops.difference(img, bg)
    # Get the bounding box of the difference (non-white areas)
    bbox = diff.getbbox()
    if bbox:
        return img.crop(bbox)
    return img

def process_slices(directory, prefix):
    for i in range(1, 4):
        filename = f"{prefix}_{i}.jpg"
        filepath = os.path.join(directory, filename)
        if os.path.exists(filepath):
            img = Image.open(filepath).convert("RGB")
            trimmed_img = trim_white(img)
            trimmed_img.save(filepath, quality=95)
            print(f"Trimmed and saved {filename}")

if __name__ == "__main__":
    folder = r"c:\Users\johnm\OneDrive\Documents\Technology\glacier\src\lib\assets"
    process_slices(folder, "melt_part")
