from PIL import Image, ImageChops
import os

def trim_white_robust(img, threshold=240):
    # Convert to grayscale to simplify thresholding
    gray = img.convert("L")
    # Invert the grayscale image (white becomes black)
    # We want to find areas that are NOT white (i.e., NOT above the threshold)
    # So if gray > threshold, it's white.
    # Create a mask where white is 0 and non-white is 255
    mask = gray.point(lambda p: 255 if p < threshold else 0)
    bbox = mask.getbbox()
    if bbox:
        return img.crop(bbox)
    return img

def process_slices(directory, prefix):
    for i in range(1, 4):
        filename = f"{prefix}_{i}.jpg"
        filepath = os.path.join(directory, filename)
        if os.path.exists(filepath):
            img = Image.open(filepath).convert("RGB")
            trimmed_img = trim_white_robust(img)
            trimmed_img.save(filepath, quality=95)
            print(f"Robustly trimmed and saved {filename}")

if __name__ == "__main__":
    folder = r"c:\Users\johnm\OneDrive\Documents\Technology\glacier\src\lib\assets"
    process_slices(folder, "melt_part")
