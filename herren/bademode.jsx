import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Bademode", material: "bruno banani", img: "/images/bild54.jpg", route: null },
  { name: "Bademode", material: "bruno banani", img: "/images/bild55.jpg", route: null },
  { name: "Bademode", material: "bruno banani", img: "/images/bild56.jpg", route: null },
];

export default function HerrenBademode() {
  return (
    <KategoriePage
      title="Bademode"
      products={products}
      bannerImgs={[]}
    />
  );
}
