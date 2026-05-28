import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Leinen-Hemd",          material: "Leinen",    img: null, route: null },
  { name: "Leinenhose",           material: "Leinen",    img: null, route: null },
  { name: "Seiden-Hemd",          material: "Seide",     img: null, route: null },
  { name: "Leinen-Blazer",        material: "Leinen",    img: null, route: null },

  { name: "Baumwoll-Hemd",        material: "Baumwolle", img: null, route: null },
  { name: "Viskose-Shirt",        material: "Viskose",   img: null, route: null },
  { name: "Kaschmir-Pullover",    material: "Kaschmir",  img: null, route: null },
  { name: "Leinen-Shorts",        material: "Leinen",    img: null, route: null },

  { name: "Seiden-Krawatte",      material: "Seide",     img: null, route: null },
  { name: "Leinen-Jacke",         material: "Leinen",    img: null, route: null },
  { name: "Baumwoll-Polo",        material: "Baumwolle", img: null, route: null },
  { name: "Viskose-Hose",         material: "Viskose",   img: null, route: null },

  { name: "Seiden-Schal",         material: "Seide",     img: null, route: null },
  { name: "Leinen-Weste",         material: "Leinen",    img: null, route: null },
  { name: "Kaschmir-Cardigan",    material: "Kaschmir",  img: null, route: null },
  { name: "Baumwoll-Chino",       material: "Baumwolle", img: null, route: null },
];

export default function HerrenItalienischeMode() {
  return (
    <KategoriePage
      title="Italienische Mode"
      products={products}
      bannerImgs={[null, null, null]}
    />
  );
}
