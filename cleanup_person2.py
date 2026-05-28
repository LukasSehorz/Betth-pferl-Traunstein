from PIL import Image
import numpy as np

img = Image.open("./public/images/person2.png").convert("RGBA")
data = np.array(img, dtype=np.uint8).copy()

a = data[:,:,3].astype(int)

# Fully binary: every pixel is either completely opaque or completely transparent
# No semi-transparent pixels — person is never see-through
a_new = np.where(a < 120, 0, 255)

data[:,:,3] = a_new.astype(np.uint8)
Image.fromarray(data).save("./public/images/person2.png")
print("Fertig!")
