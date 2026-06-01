import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Nachtwäsche", material: "PIP Studio", img: "/images/bild47.jpg", route: null },
  { name: "Nachtwäsche", material: "PIP Studio", img: "/images/bild48.jpg", route: null },
  { name: "Nachtwäsche", material: "PIP Studio", img: "/images/bild49.jpg", route: null },
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
