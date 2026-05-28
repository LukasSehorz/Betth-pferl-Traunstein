import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Dessous-Set",  material: "NINA VON C",  img: "/images/bild41.jpg", route: null },
  { name: "Dessous-Set",  material: "mey",         img: "/images/bild42.jpg", route: null },
  { name: "Dessous-Set",  material: "Passionata",  img: "/images/bild43.jpg", route: null },
];

export default function DessousLingerie() {
  return (
    <KategoriePage
      title="Dessous & Lingerie"
      products={products}
      bannerImgs={[]}
    />
  );
}
