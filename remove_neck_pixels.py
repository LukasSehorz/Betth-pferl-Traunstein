from PIL import Image
import numpy as np
from collections import deque

img = Image.open("./public/images/person2.png").convert("RGBA")
data = np.array(img, dtype=np.uint8).copy()

a = data[:,:,3]
h, w = a.shape

binary = (a > 0)
visited = np.zeros((h, w), dtype=bool)

for start_y in range(h):
    for start_x in range(w):
        if binary[start_y, start_x] and not visited[start_y, start_x]:
            cluster = []
            q = deque([(start_y, start_x)])
            visited[start_y, start_x] = True
            while q:
                y, x = q.popleft()
                cluster.append((y, x))
                for dy, dx in [(-1,0),(1,0),(0,-1),(0,1)]:
                    ny, nx = y+dy, x+dx
                    if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and binary[ny, nx]:
                        visited[ny, nx] = True
                        q.append((ny, nx))
            if len(cluster) < 2000:
                for y, x in cluster:
                    data[y, x, 3] = 0

Image.fromarray(data).save("./public/images/person2.png")
print("Fertig!")
