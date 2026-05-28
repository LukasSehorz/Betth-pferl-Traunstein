import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Unterwäsche-Set", material: "MARIE JO",     img: "/images/bild44.jpg", route: null },
  { name: "Unterwäsche-Set", material: "MARIE JO",     img: "/images/bild45.jpg", route: null },
  { name: "Unterwäsche-Set", material: "PRIMA DONNA",  img: "/images/bild46.jpg", route: null },
];

export default function Unterwaesche() {
  return (
    <KategoriePage
      title="Unterwäsche"
      products={products}
      bannerImgs={[]}
    />
  );
}
