import React from "react";
import LookDetailPage from "../shared/LookDetailPage";

const products = [
  { name: "Produkt 1", material: "Baumwolle", preis: "–", img: "/images/bild18.jpg", route: null },
  { name: "Produkt 2", material: "Baumwolle", preis: "–", img: "/images/bild19.jpg", route: null },
];

export default function HerrenLook1() {
  return <LookDetailPage lookTitle="Look 1" modelImg="/images/bild17.jpg" products={products} />;
}
