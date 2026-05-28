import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Bademode", material: "CHANTELLE",    img: "/images/bild50.png", route: "/bademode" },
  { name: "Bademode", material: "CHANTELLE",    img: "/images/bild51.png", route: "/bademode" },
  { name: "Bademode", material: "CHANTELLE",    img: "/images/bild52.png", route: "/bademode" },
  { name: "Bademode", material: "bruno banani", img: "/images/bild54.png", route: "/herren-bademode" },
  { name: "Bademode", material: "bruno banani", img: "/images/bild55.png", route: "/herren-bademode" },
  { name: "Bademode", material: "bruno banani", img: "/images/bild56.png", route: "/herren-bademode" },
];

export default function BademodeAlle() {
  return (
    <KategoriePage
      title="Bademode"
      products={products}
      bannerImgs={[]}
    />
  );
}
