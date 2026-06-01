import React, { useState } from "react";
import { HeroCollage } from "./components/HeroCollage";
import { ProductSection } from "./components/ProductSection";
import { ResortSection } from "./components/ResortSection";
import { DerLookSection } from "./components/DerLookSection";
import { EditorialSection } from "./components/EditorialSection";
import { InsideSection } from "./components/InsideSection";
import { Footer } from "./components/Footer";
import { IntroScreen } from "./components/IntroScreen";

// Resets on every full page reload, persists during in-app navigation
let introShown = false;

export default function Page() {
  const [showIntro, setShowIntro] = useState(!introShown);

  return (
    <div>
      {showIntro && (
        <IntroScreen onDone={() => { introShown = true; setShowIntro(false); }} />
      )}
      <HeroCollage />
      <ProductSection />
      <ResortSection />
      <DerLookSection />
      <EditorialSection />
      <InsideSection />
      <Footer />
    </div>
  );
}
