import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Pyjama Classic",       material: "Baumwolle", img: "/images/bild12.png", route: null },
  { name: "Baumwoll-Pyjama",      material: "Baumwolle", img: "/images/bild7.png",  route: "/produkt/baumwoll-pyjama" },
  { name: "Seiden-Pyjama",        material: "Seide",     img: null,                 route: null },
  { name: "Modal-Schlafanzug",    material: "Modal",     img: null,                 route: null },

  { name: "Bademantel Soft",      material: "Frottee",   img: null,                 route: null },
  { name: "Satin-Morgenmantel",   material: "Satin",     img: "/images/bild8.png",  route: "/produkt/satin-morgenmantel" },
  { name: "Leinen-Pyjama",        material: "Leinen",    img: null,                 route: null },
  { name: "Kaschmir-Schlafanzug", material: "Kaschmir",  img: null,                 route: null },

  { name: "Bambus-Pyjama",        material: "Bambus",    img: null,                 route: null },
  { name: "Viskose-Schlafanzug",  material: "Viskose",   img: null,                 route: null },
  { name: "Satin-Pyjama",         material: "Satin",     img: null,                 route: null },
  { name: "Baumwoll-Morgenmantel",material: "Baumwolle", img: null,                 route: null },

  { name: "Modal-Pyjama",         material: "Modal",     img: null,                 route: null },
  { name: "Seiden-Morgenmantel",  material: "Seide",     img: null,                 route: null },
  { name: "Frottee-Bademantel",   material: "Frottee",   img: null,                 route: null },
  { name: "Leinen-Schlafanzug",   material: "Leinen",    img: null,                 route: null },
];

export default function HerrenNachtwaesche() {
  return (
    <KategoriePage
      title="Nachtwäsche"
      products={products}
      bannerImgs={[null, null, null]}
    />
  );
}
