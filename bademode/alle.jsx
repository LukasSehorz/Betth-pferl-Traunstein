import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Bademode", material: "Anita",    img: "/images/bild50.jpg", route: "/bademode" },
  { name: "Bademode", material: "Anita",    img: "/images/bild51.jpg", route: "/bademode" },
  { name: "Bademode", material: "Anita",    img: "/images/bild52.jpg", route: "/bademode" },
  { name: "Bademode", material: "bruno banani", img: "/images/bild54.jpg", route: "/herren-bademode" },
  { name: "Bademode", material: "bruno banani", img: "/images/bild55.jpg", route: "/herren-bademode" },
  { name: "Bademode", material: "bruno banani", img: "/images/bild56.jpg", route: "/herren-bademode" },
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
