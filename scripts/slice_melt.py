from PIL import Image
import os

def slice_image(input_path, output_dir, prefix):
    img = Image.open(input_path)
    width, height = img.size
    
    # Slice horizontally into 3 even parts
    slice_height = height // 3
    
    for i in range(3):
        top = i * slice_height
        bottom = (i + 1) * slice_height if i < 2 else height
        box = (0, top, width, bottom)
        slice_img = img.crop(box)
        slice_img.save(os.path.join(output_dir, f"{prefix}_{i+1}.jpg"), quality=95)
        print(f"Saved {prefix}_{i+1}.jpg")

if __name__ == "__main__":
    input_file = r"c:\Users\johnm\OneDrive\Documents\Technology\glacier\src\lib\assets\the_big_melt.jpg"
    output_folder = r"c:\Users\johnm\OneDrive\Documents\Technology\glacier\src\lib\assets"
    slice_image(input_file, output_folder, "melt_part")
