import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Seiden-Bluse",       material: "Seide",     img: null, route: null },
  { name: "Leinenhose",         material: "Leinen",    img: null, route: null },
  { name: "Sommer-Kleid",       material: "Viskose",   img: null, route: null },
  { name: "Seiden-Rock",        material: "Seide",     img: null, route: null },

  { name: "Leinen-Blazer",      material: "Leinen",    img: null, route: null },
  { name: "Seiden-Top",         material: "Seide",     img: null, route: null },
  { name: "Baumwoll-Kleid",     material: "Baumwolle", img: null, route: null },
  { name: "Viskose-Bluse",      material: "Viskose",   img: null, route: null },

  { name: "Leinen-Kleid",       material: "Leinen",    img: null, route: null },
  { name: "Seiden-Palazzo",     material: "Seide",     img: null, route: null },
  { name: "Baumwoll-Bluse",     material: "Baumwolle", img: null, route: null },
  { name: "Viskose-Rock",       material: "Viskose",   img: null, route: null },

  { name: "Seiden-Jumpsuit",    material: "Seide",     img: null, route: null },
  { name: "Leinen-Top",         material: "Leinen",    img: null, route: null },
  { name: "Sommer-Blazer",      material: "Leinen",    img: null, route: null },
  { name: "Viskose-Kleid",      material: "Viskose",   img: null, route: null },
];

export default function ItalienischeMode() {
  return (
    <KategoriePage
      title="Italienische Mode"
      products={products}
      bannerImgs={[null, null, null]}
    />
  );
}
