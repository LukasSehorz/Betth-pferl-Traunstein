import React from "react";
import LookDetailPage from "../shared/LookDetailPage";

const products = [
  { name: "Pyjama Hose",    material: "Baumwolle", preis: "89,00 €", img: "/images/bild15.jpg", route: "/produkt/baumwoll-pyjama" },
  { name: "Pyjama Oberteil", material: "Baumwolle", preis: "79,00 €", img: "/images/bild14.jpg", route: "/produkt/baumwoll-pyjama" },
];

export default function DamenLook1() {
  return <LookDetailPage lookTitle="Look 1" modelImg="/images/bild16.jpg" products={products} />;
}
