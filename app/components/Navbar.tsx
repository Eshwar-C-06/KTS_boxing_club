"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "../lib/business";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Coaches", href: "#coaches" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const currentLink =
        navLinks.findLast((link) => {
          const section = document.querySelector(link.href);
          if (!section) return false;

          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          return window.scrollY + 140 >= sectionTop;
        })?.href ?? "#home";

      setActiveLink(currentLink);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "border-gold/[0.08] bg-matte/[0.78] backdrop-blur-[16px] shadow-[0_14px_42px_rgba(0,0,0,0.34)]"
            : "border-transparent bg-matte/[0.14] backdrop-blur-[3px]"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[4.5rem] md:h-[5.25rem]">
            <a href="#home" className="flex items-center gap-3.5 group" aria-label="KTS Boxing Academy Home">
              <div className="relative w-9 h-9 md:w-12 md:h-12">
                <Image
                  src="/images/kts_logo.png"
                  alt="KTS Boxing Academy Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-fight text-lg md:text-xl tracking-widest leading-none">KTS</span>
                <span className="font-accent text-gold/80 text-[9px] md:text-[10px] tracking-[0.25em] leading-none mt-0.5">
                  BOXING ACADEMY
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-10 xl:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative pb-1 text-[13px] font-semibold uppercase leading-none tracking-[0.14em] transition-colors duration-[720ms] ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:left-1/2 after:top-full after:mt-[4px] after:h-px after:w-[112%] after:-translate-x-1/2 after:origin-left after:scale-x-0 after:bg-gold/75 after:opacity-0 after:transition-all after:duration-[720ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-fight hover:after:scale-x-100 hover:after:opacity-100 ${
                    activeLink === link.href
                      ? "text-fight after:scale-x-100 after:opacity-100"
                      : "text-steel/85"
                  }`}
                  aria-current={activeLink === link.href ? "page" : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 text-steel/60 text-[12px] tracking-[0.08em]">
                <MapPin className="w-3.5 h-3.5 text-gold/60" aria-hidden="true" />
                <span>Madipakkam</span>
              </div>
              <a
                href="#contact"
                className="group relative inline-flex h-[46px] min-w-[216px] items-center justify-center overflow-hidden rounded-full border border-gold/35 bg-matte pl-6 pr-[4.15rem] text-[11px] font-semibold uppercase tracking-[0.16em] text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_22px_rgba(0,0,0,0.24)] transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold/55 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.28),0_0_18px_rgba(212,175,55,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold/70"
              >
                <span className="relative z-10 block w-full text-center leading-none transition-colors duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-matte">
                  Join The Elite
                </span>
                <span className="absolute inset-y-1 right-1 z-0 flex w-11 items-center justify-end rounded-full bg-gold px-3 text-matte shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)]">
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-fight/80 p-3 rounded-full hover:text-gold transition-colors duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-matte/98 backdrop-blur-[10px] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-3xl md:text-4xl text-fight/90 hover:text-gold transition-colors duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] tracking-wider"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative mt-6 inline-flex h-12 w-full max-w-xs items-center justify-center overflow-hidden rounded-full border border-gold/35 bg-matte pl-6 pr-[4.2rem] text-[11px] font-semibold uppercase tracking-[0.16em] text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_22px_rgba(0,0,0,0.24)] transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold/55 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.28),0_0_18px_rgba(212,175,55,0.08)]"
              >
                <span className="relative z-10 block w-full text-center leading-none transition-colors duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-matte">
                  Join The Elite
                </span>
                <span className="absolute inset-y-1 right-1 z-0 flex w-11 items-center justify-end rounded-full bg-gold px-3 text-matte shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)]">
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
