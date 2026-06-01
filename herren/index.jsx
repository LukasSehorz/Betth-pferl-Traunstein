import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Unterwäsche", material: "bruno banani", img: "/images/bild53.jpg", route: "/herren-unterwaesche" },
  { name: "Bademode",    material: "bruno banani", img: "/images/bild54.jpg", route: "/herren-bademode" },
  { name: "Bademode",    material: "bruno banani", img: "/images/bild55.jpg", route: "/herren-bademode" },
  { name: "Bademode",    material: "bruno banani", img: "/images/bild56.jpg", route: "/herren-bademode" },
];

export default function Herren() {
  return (
    <KategoriePage
      title="Herren"
      products={products}
      bannerImgs={[]}
    />
  );
}
