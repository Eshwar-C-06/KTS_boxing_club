"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Image from "next/image";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop", title: "The Fighter", size: "large" },
  { src: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=600&auto=format&fit=crop", title: "Sparring Rounds", size: "tall" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop", title: "Morning Training", size: "normal" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop", title: "Between Rounds", size: "normal" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", title: "Strength Work", size: "wide" },
  { src: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?q=80&w=600&auto=format&fit=crop", title: "The Ring", size: "tall" },
  { src: "https://images.unsplash.com/photo-1609899464726-209befab8e0f?q=80&w=600&auto=format&fit=crop", title: "Heavy Bags", size: "normal" },
  { src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop", title: "Conditioning", size: "large" },
];

const sizeClasses: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  normal: "",
};

export default function Gallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  return (
    <section ref={sectionRef} id="gallery" className="relative py-24 md:py-32 bg-carbon overflow-hidden" aria-labelledby="gallery-heading">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">Academy Atmosphere</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 id="gallery-heading" className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-fight leading-[0.9]">
            THE ELITE<br /><span className="text-stroke-accent">EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl bg-matte ${sizeClasses[image.size] || ""}`}
            >
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none" />
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 pointer-events-none rounded-xl" />
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover image-hover-zoom"
                style={{ filter: "brightness(0.6) contrast(1.15) saturate(0.85)" }}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-matte/95 to-transparent z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <p className="font-display text-lg md:text-xl text-fight">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
