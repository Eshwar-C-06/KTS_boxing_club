"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface Fighter {
  id: number;
  name: string;
  src: string;
}

const fighters: Fighter[] = [
  { id: 1, name: "THE GREATEST", src: "/images/boxer_1.webp" }, // Muhammad Ali
  { id: 2, name: "THE DRAGON", src: "/images/boxer_2.webp" }, // Bruce Lee
  { id: 3, name: "IRON MIKE", src: "/images/boxer_3.webp" }, // Mike Tyson
  { id: 4, name: "PAC-MAN", src: "/images/boxer_4.webp" }, // Manny Pacquiao
  { id: 5, name: "MONEY", src: "/images/boxer_5.webp" }, // Floyd Mayweather Jr.
  { id: 6, name: "CANELO", src: "/images/boxer_6.webp" }, // Canelo Álvarez
];

export default function LegendCarousel() {
  const prefersReduced = useReducedMotion();
  const count = fighters.length;
  const angleStep = 360 / count;
  const translateZ = 320; // px — pushes cards outward in 3D space (increased for final polish)
  const rotateX = -6; // degrees — tilts the ring slightly downward for cinematic angle
  const spinDuration = 16; // seconds — showroom spin

  return (
    <div
      className="hidden lg:block absolute z-10"
      aria-hidden="true"
      style={{ width: 380, height: 460, right: "6%", top: "50%", transform: "translateY(-50%)" }}
    >
      {/* 
        PERSPECTIVE CONTAINER
        - Establishes the 3D viewing context
        - Must NOT have overflow:hidden or transforms that flatten
        - Isolated to prevent parent clipping issues
      */}
      <motion.div
        className="relative w-full h-full"
        style={{
          perspective: "2200px",
          perspectiveOrigin: "50% 50%",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
        initial={
          prefersReduced
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 30, scale: 0.92 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* 
          ROTATING SLIDER
          - The actual spinning ring
          - rotateX gives the tilted showroom feel
          - Infinite rotation via CSS animation
        */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(80px) rotateX(${rotateX}deg)`,
            animation: prefersReduced ? "none" : `legendSpin ${spinDuration}s linear infinite`,
            pointerEvents: "none",
            willChange: "transform",
          }}
        >
            {fighters.map((fighter, index) => {
              const angle = index * angleStep;

              return (
                <div
                  key={fighter.id}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: "translate(-50%, -50%)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      willChange: "transform",
                    }}
                  >
                {/* 
                  CARD
                  - Portrait aspect ratio
                  - Premium gold border treatment
                  - Cinematic vignette overlay
                  - Soft shadow for depth
                */}
                  <div
                    className="relative w-[160px] h-[230px] rounded-2xl overflow-hidden border border-[#C9A96E]/30 bg-[#0a0a0a] shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(201,169,110,0.1)] group"
                  >
                  {/* Fighter Image */}
                  <Image
                    src={fighter.src}
                    alt={fighter.name}
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                    priority={index < 2}
                  />

                  {/* Cinematic Vignette Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-black/40
                      pointer-events-none
                    "
                  />

                  {/* Gold Rim Light (subtle edge glow) */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      pointer-events-none
                    "
                    style={{
                      boxShadow: "inset 0 0 20px rgba(201,169,110,0.15)",
                    }}
                  />

                  {/* Fighter Name Label */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      px-3
                      py-2.5
                      bg-gradient-to-t
                      from-black/90
                      to-transparent
                    "
                  >
                    <span
                      className="
                        block
                        text-[10px]
                        font-medium
                        tracking-[0.2em]
                        uppercase
                        text-[#C9A96E]/90
                        text-center
                      "
                    >
                      {fighter.name}
                    </span>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* 
        KEYFRAMES
        - Injected via style tag to avoid external CSS dependency
        - Pure rotation on Y axis
      */}
      <style jsx>{`
        @keyframes legendSpin {
          from { transform: rotateX(${rotateX}deg) rotateY(0deg); }
          to { transform: rotateX(${rotateX}deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
