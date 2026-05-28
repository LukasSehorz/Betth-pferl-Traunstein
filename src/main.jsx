import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import "./hover.css";

import Startseite from "../startseite/index.jsx";
import Boutique from "../boutique/index.jsx";
import Damen from "../damen/index.jsx";
import DamenAlle from "../damen/alle.jsx";
import Herren from "../herren/index.jsx";
import HerrenAlle from "../herren/alle.jsx";
import HerrenUnterwaesche from "../herren/unterwaesche.jsx";
import HerrenBademode from "../herren/bademode.jsx";
import Bademode from "../bademode/index.jsx";
import BademodeAlle from "../bademode/alle.jsx";
import DessousLingerie from "../dessous-&-lingerie/index.jsx";
import Nachtwaesche from "../nachtwäsche/index.jsx";
import Unterwaesche from "../unterwäsche/index.jsx";
import Marken from "../marken/index.jsx";
import MarkenDetail from "../marken-detail/index.jsx";
import HighlightsAngebote from "../highlights-&-angebote/index.jsx";
import BeratungService from "../beratung-&-service/index.jsx";
import Journal from "../journal/index.jsx";
import Beitrag from "../beitrag/index.jsx";
import Looks from "../looks/index.jsx";
import Impressum from "../impressum/index.jsx";
import Datenschutz from "../datenschutz/index.jsx";
import DamenLook1 from "../looks/damen-1.jsx";
import HerrenLook1 from "../looks/herren-1.jsx";
import Bikini from "../produkt/bikini.jsx";
import SpitzenNeglige from "../produkt/spitzen-neglige.jsx";
import BaumwollPyjama from "../produkt/baumwoll-pyjama.jsx";
import SatinMorgenmantel from "../produkt/satin-morgenmantel.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/damen" element={<Damen />} />
        <Route path="/damen/alle" element={<DamenAlle />} />
        <Route path="/herren" element={<Herren />} />
        <Route path="/herren/alle" element={<HerrenAlle />} />
        <Route path="/herren-unterwaesche" element={<HerrenUnterwaesche />} />
        <Route path="/herren-bademode" element={<HerrenBademode />} />
        <Route path="/bademode" element={<Bademode />} />
        <Route path="/bademode/alle" element={<BademodeAlle />} />
        <Route path="/dessous-lingerie" element={<DessousLingerie />} />
        <Route path="/nachtwaesche" element={<Nachtwaesche />} />
        <Route path="/unterwaesche" element={<Unterwaesche />} />
        <Route path="/marken" element={<Marken />} />
        <Route path="/marken-detail" element={<MarkenDetail />} />
        <Route path="/highlights-angebote" element={<HighlightsAngebote />} />
        <Route path="/beratung-service" element={<BeratungService />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/beitrag" element={<Beitrag />} />
        <Route path="/looks" element={<Looks />} />
        <Route path="/looks/damen-1" element={<DamenLook1 />} />
        <Route path="/looks/herren-1" element={<HerrenLook1 />} />
        <Route path="/produkt/bikini" element={<Bikini />} />
        <Route path="/produkt/spitzen-neglige" element={<SpitzenNeglige />} />
        <Route path="/produkt/baumwoll-pyjama" element={<BaumwollPyjama />} />
        <Route path="/produkt/satin-morgenmantel" element={<SatinMorgenmantel />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
