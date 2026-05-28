import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Nachtwäsche", material: "PIP Studio", img: "/images/bild47.png", route: null },
  { name: "Nachtwäsche", material: "PIP Studio", img: "/images/bild48.png", route: null },
  { name: "Nachtwäsche", material: "PIP Studio", img: "/images/bild49.png", route: null },
];

export default function Nachtwaesche() {
  return (
    <KategoriePage
      title="Nachtwäsche"
      products={products}
      bannerImgs={[]}
    />
  );
}
