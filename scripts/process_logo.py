from rembg import remove
from PIL import Image
import os

input_path = r'd:\PROJECTS\madras-boxing-club\images\kts_boxing_logo.jpeg'
output_path = r'd:\PROJECTS\madras-boxing-club\public\images\kts_logo.png'

print("Loading image...")
input_image = Image.open(input_path)

print("Removing background...")
# Use alpha matting for cleaner edges
output_image = remove(input_image, alpha_matting=True)

print(f"Saving transparent PNG to {output_path}...")
output_image.save(output_path, "PNG")
print("Done!")
