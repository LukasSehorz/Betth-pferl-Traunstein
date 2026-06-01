// Convert palette-mode PNGs to proper RGBA using sharp
import sharp from "sharp";
import { existsSync } from "fs";

for (const [i, file] of [
  ["./public/images/person1.jpg", "./public/images/person1.jpg"],
  ["./public/images/person2.jpg", "./public/images/person2.jpg"],
].entries()) {
  const [src, dest] = file;
  if (!existsSync(src)) { console.log(`Missing: ${src}`); continue; }
  await sharp(src).ensureAlpha().png().toFile(dest + ".tmp.png");
  const { renameSync } = await import("fs");
  renameSync(dest + ".tmp.png", dest);
  console.log(`Fixed: ${dest}`);
}
