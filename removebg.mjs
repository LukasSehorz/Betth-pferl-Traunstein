import { removeBackground } from "@imgly/background-removal-node";
import { readFileSync, writeFileSync } from "fs";
import { createCanvas, loadImage } from "canvas";

async function removeBg(inputPath, outputPath) {
  console.log(`Processing ${inputPath}...`);
  const imageData = readFileSync(inputPath);
  const blob = new Blob([imageData], { type: "image/jpeg" });
  const result = await removeBackground(blob);
  const arrayBuffer = await result.arrayBuffer();
  writeFileSync(outputPath, Buffer.from(arrayBuffer));
  console.log(`Saved: ${outputPath}`);
}

await removeBg("./Bilder/Bild 1.jpeg", "./public/images/person1.png");
await removeBg("./Bilder/Bild 2.jpeg", "./public/images/person2.png");
console.log("Done!");
