import React from "react";
import LookDetailPage from "../shared/LookDetailPage";

const products = [
  { name: "Produkt 1", material: "Baumwolle", preis: "–", img: "/images/bild18.png", route: null },
  { name: "Produkt 2", material: "Baumwolle", preis: "–", img: "/images/bild19.png", route: null },
];

export default function HerrenLook1() {
  return <LookDetailPage lookTitle="Look 1" modelImg="/images/bild17.png" products={products} />;
}
