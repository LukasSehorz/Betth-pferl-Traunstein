import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Unterwäsche", material: "bruno banani", img: "/images/bild53.png", route: "/herren-unterwaesche" },
  { name: "Bademode",    material: "bruno banani", img: "/images/bild54.png", route: "/herren-bademode" },
  { name: "Bademode",    material: "bruno banani", img: "/images/bild55.png", route: "/herren-bademode" },
  { name: "Bademode",    material: "bruno banani", img: "/images/bild56.png", route: "/herren-bademode" },
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
