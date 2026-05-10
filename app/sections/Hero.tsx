"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import LegendCarousel from "@/components/LegendCarousel";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useIsMobile } from "../hooks/useMediaQuery";
import { getWhatsAppUrl } from "../lib/business";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();
  const trialUrl = getWhatsAppUrl("Hi, I'd like to book a free trial at KTS Boxing Academy.");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bannerY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "8%"]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // LegendCarousel is handled by a dedicated component (see components/LegendCarousel)

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-section relative min-h-screen flex items-center justify-center overflow-visible bg-matte"
      aria-label="Hero — KTS Boxing Academy"
    >
      {/* ===== BACKGROUND LAYERS ===== */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Atmospheric base using hero_img (blurred + desaturated) */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero_img.png"
            alt=""
            fill
            priority
            quality={70}
            className="object-cover"
            style={{
              filter: "brightness(0.45) contrast(1.06) saturate(0.82) blur(4px)",
            }}
            sizes="100vw"
          />
        </div>

        {/* Softer vignette & reduced warm overlay to preserve image visibility */}
        <div className="absolute inset-0 cinematic-vignette opacity-40" />
        <div className="absolute inset-0 subtle-warm-gradient-overlay opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="font-display hero-title text-fight mb-4 sm:mb-5"
      >
      >
        <div className="relative w-[62%] md:w-[56%] lg:w-[50%] max-w-[1100px] pr-4 md:pr-8">
          <Image
            src="/images/hero_img.png"
            alt="Legendary fighters banner"
            fill
            priority
            quality={85}
            className="object-cover object-right"
            style={{
              filter: "contrast(1.08) brightness(1.0) saturate(1.02)",
            }}
            sizes="(max-width: 1024px) 65vw, 45vw"
          />

          {/* softer cinematic overlays to integrate image without hiding it */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-matte/40 pointer-events-none" />
          <div className="absolute inset-0 cinematic-vignette opacity-50 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(212,175,55,0.03),transparent_28%)] pointer-events-none" />
        </div>
      </motion.div>



      {/* ===== GIANT TYPOGRAPHY BEHIND BOXER ===== */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none select-none"
      >
        <div className="relative w-full max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-0"
          >
                {["TRAIN", "FIGHT", "RISE"].map((word, i) => (
                  <span
                    key={word}
                    className="font-display text-[18vw] md:text-[16vw] lg:text-[14vw] leading-[0.85] text-stroke tracking-tight"
                    style={{
                      opacity: 0.12 + i * 0.04,
                    }}
                  >
                    {word}
                  </span>
                ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Old single-boxer image removed — hero_img is primary backdrop now */}

      {/* ===== HERO CONTENT ===== */}
      <motion.div
        style={{ opacity }}
        className="relative z-[20] hero-container w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20 md:pt-32 pb-14 md:pb-20"
      >
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="font-accent text-gold text-base md:text-lg tracking-[0.08em]">
              Elite Combat Institution
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.1rem] sm:text-[2.4rem] md:text-[4rem] lg:text-[5.2rem] text-fight leading-[1.0] mb-4 sm:mb-5"
          >
            BUILT IN CHENNAI.
            <br />
            <span className="text-gold">FORGED THROUGH</span>
            <br />
            DISCIPLINE.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-steel text-base sm:text-lg md:text-lg max-w-xl mb-8 sm:mb-9 leading-relaxed"
          >
            Train with professional coaches inside a premium combat environment
            designed for fighters, athletes, and warriors. Elite instruction meets raw discipline.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <a
              href={trialUrl ?? "#contact"}
              target={trialUrl ? "_blank" : undefined}
              rel={trialUrl ? "noopener noreferrer" : undefined}
              id="hero-cta-primary"
              className="premium-cta group px-8 py-4 text-[12px] sm:text-[13px] w-full sm:w-auto flex items-center justify-center"
            >
              Join The Elite
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              id="hero-cta-secondary"
              className="border border-white/20 hover:border-gold/50 text-fight hover:text-gold px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-sm bg-white/5 hover:bg-gold/10 w-full sm:w-auto flex items-center justify-center"
            >
              View Programs
            </a>
          </motion.div>

          {/* Trust badges removed — marquee moved to its own section below the Hero */}
        </div>
      </motion.div>

        {/* LEGEND CAROUSEL COMPONENT (provided) */}
        <LegendCarousel />

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-steel/70 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-matte to-transparent z-[4]" />
      
    </section>
  );
}
