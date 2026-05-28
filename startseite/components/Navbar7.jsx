"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const damenLinks = [
  { label: "Neue Kollektionen", href: "/damen" },
  { label: "Nachtwäsche",       href: "/nachtwaesche" },
  { label: "Unterwäsche",       href: "/unterwaesche" },
  { label: "Dessous & Lingerie",href: "/dessous-lingerie" },
  { label: "Bademode",          href: "/bademode" },
  { label: "Italienische Mode", href: "/italienische-mode" },
];

const herrenLinks = [
  { label: "Neue Kollektionen", href: "/herren" },
  { label: "Nachtwäsche",       href: "/herren-nachtwaesche" },
  { label: "Unterwäsche",       href: "/herren-unterwaesche" },
  { label: "Bademode",          href: "/herren-bademode" },
  { label: "Italienische Mode", href: "/herren-italienische-mode" },
];

const simpleLinks = [
  { label: "Angebote",  href: "/highlights-angebote" },
  { label: "Boutique",  href: "/boutique" },
  { label: "Journal",   href: "/journal" },
];

function DropdownMenu({ links, allHref, navigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 mt-0 w-56 border border-gray-200 bg-white shadow-lg"
    >
      <div className="flex flex-col py-2">
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => navigate(link.href)}
            className="px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors text-left"
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
          >
            {link.label}
          </button>
        ))}
        <div className="mx-5 my-2 border-t border-border-primary" />
        <button
          onClick={() => navigate(allHref)}
          className="px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors text-left"
          style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
        >
          Alles ansehen →
        </button>
      </div>
    </motion.div>
  );
}

function NavItemWithDropdown({ label, href, links, allHref, navigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => navigate(href)}
        className="block px-4 py-6 text-base hover:opacity-60 transition-opacity"
        style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", color: "#1a1a1a" }}
        style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
      >
        {label}
      </button>
      <AnimatePresence>
        {open && <DropdownMenu links={links} allHref={allHref} navigate={navigate} />}
      </AnimatePresence>
    </div>
  );
}

export function Navbar7() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative z-[999] flex min-h-16 w-full items-center bg-transparent px-[5%] md:min-h-18">
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="text-2xl font-bold tracking-tight text-white"
          style={{ background: "none", border: "none", cursor: "pointer" }}>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1 ml-40">
          <NavItemWithDropdown label="Damen"  href="/damen"  links={damenLinks}  allHref="/damen/alle"  navigate={navigate} />
          <NavItemWithDropdown label="Herren" href="/herren" links={herrenLinks} allHref="/herren/alle" navigate={navigate} />
          {simpleLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => navigate(link.href)}
              className="px-4 py-6 text-base hover:opacity-60 transition-opacity"
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", color: "#1a1a1a" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block w-32" />

        {/* Mobile Hamburger */}
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <motion.span className="my-[3px] h-0.5 w-6 bg-[#1a1a1a]"
            animate={isMobileMenuOpen ? { translateY: 8, rotate: -45 } : { translateY: 0, rotate: 0 }}
            transition={{ duration: 0.3 }} />
          <motion.span className="my-[3px] h-0.5 w-6 bg-[#1a1a1a]"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }} />
          <motion.span className="my-[3px] h-0.5 w-6 bg-[#1a1a1a]"
            animate={isMobileMenuOpen ? { translateY: -8, rotate: 45 } : { translateY: 0, rotate: 0 }}
            transition={{ duration: 0.3 }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4 lg:hidden"
          >
            <div className="flex flex-col">
              <p className="py-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Damen</p>
              {damenLinks.map((link) => (
                <button key={link.label} onClick={() => { navigate(link.href); setIsMobileMenuOpen(false); }}
                  className="py-2.5 text-md border-b border-border-primary text-left"
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                  {link.label}
                </button>
              ))}
              <button onClick={() => { navigate("/damen/alle"); setIsMobileMenuOpen(false); }}
                className="py-2.5 text-md border-b border-border-primary font-medium text-left"
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                Alles ansehen →
              </button>

              <p className="mt-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Herren</p>
              {herrenLinks.map((link) => (
                <button key={link.label} onClick={() => { navigate(link.href); setIsMobileMenuOpen(false); }}
                  className="py-2.5 text-md border-b border-border-primary text-left"
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                  {link.label}
                </button>
              ))}
              <button onClick={() => { navigate("/herren/alle"); setIsMobileMenuOpen(false); }}
                className="py-2.5 text-md border-b border-border-primary font-medium text-left"
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                Alles ansehen →
              </button>

              <div className="mt-4 flex flex-col">
                {simpleLinks.map((link) => (
                  <button key={link.label} onClick={() => { navigate(link.href); setIsMobileMenuOpen(false); }}
                    className="py-2.5 text-md border-b border-border-primary last:border-none text-left"
                    style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
