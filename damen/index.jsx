import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Dessous-Set",  material: "NINA VON C",  img: "/images/bild41.jpg", route: "/dessous-lingerie" },
  { name: "Dessous-Set",  material: "mey",          img: "/images/bild42.jpg", route: "/dessous-lingerie" },
  { name: "Dessous-Set",  material: "Passionata",   img: "/images/bild43.jpg", route: "/dessous-lingerie" },
  { name: "Unterwäsche",  material: "MARIE JO",     img: "/images/bild44.jpg", route: "/unterwaesche" },
  { name: "Unterwäsche",  material: "MARIE JO",     img: "/images/bild45.jpg", route: "/unterwaesche" },
  { name: "Unterwäsche",  material: "PRIMA DONNA",  img: "/images/bild46.jpg", route: "/unterwaesche" },
  { name: "Nachtwäsche",  material: "PIP Studio",   img: "/images/bild47.png", route: "/nachtwaesche" },
  { name: "Nachtwäsche",  material: "PIP Studio",   img: "/images/bild48.png", route: "/nachtwaesche" },
  { name: "Nachtwäsche",  material: "PIP Studio",   img: "/images/bild49.png", route: "/nachtwaesche" },
  { name: "Bademode",     material: "CHANTELLE",    img: "/images/bild50.png", route: "/bademode" },
  { name: "Bademode",     material: "CHANTELLE",    img: "/images/bild51.png", route: "/bademode" },
  { name: "Bademode",     material: "CHANTELLE",    img: "/images/bild52.png", route: "/bademode" },
];

export default function Damen() {
  return (
    <KategoriePage
      title="Damen"
      products={products}
      bannerImgs={[]}
    />
  );
}
