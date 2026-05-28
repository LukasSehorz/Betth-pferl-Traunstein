import { removeBackground } from "@imgly/background-removal-node";
import { readFileSync, writeFileSync } from "fs";

const imageData = readFileSync("./Bilder/Bild 3.jpeg");
const blob = new Blob([imageData], { type: "image/jpeg" });
const result = await removeBackground(blob);
const arrayBuffer = await result.arrayBuffer();
writeFileSync("./public/images/person2.png", Buffer.from(arrayBuffer));
console.log("Restored person2.png from Bild 3");
