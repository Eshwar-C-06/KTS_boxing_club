"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Image from "next/image";

const coaches = [
  {
    name: "Coach R. Kumar",
    role: "Head Boxing Coach",
    specialty: "Boxing Fundamentals",
    experience: "KTS Team",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
    quote: "Build the stance first. Power and confidence come after discipline.",
  },
  {
    name: "Coach Praveen",
    role: "Strength & Conditioning Coach",
    specialty: "Fitness & Conditioning",
    experience: "KTS Team",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
    quote: "Fitness improves when training becomes consistent, not complicated.",
  },
  {
    name: "Coach Meena",
    role: "Youth Training Coach",
    specialty: "Kids & Beginners",
    experience: "KTS Team",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
    quote: "Young students learn best when discipline and confidence grow together.",
  },
  {
    name: "Coach Arun",
    role: "Fitness Boxing Coach",
    specialty: "Weight Loss & Agility",
    experience: "KTS Team",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    quote: "A strong session should leave you tired, sharper, and ready to return.",
  },
];

export default function Coaches() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="coaches" className="relative py-24 md:py-32 bg-matte overflow-hidden" aria-labelledby="coaches-heading">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(42,26,14,0.1) 0%, transparent 50%)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-matte via-matte/95 to-matte" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">The Team</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 id="coaches-heading" className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-fight leading-[0.9]">
            MEET THE<br /><span className="text-stroke-accent">COACHES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {coaches.map((coach, index) => (
            <motion.article
              key={coach.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
              aria-label={`${coach.name}, ${coach.role}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-carbon mb-4 md:mb-6 rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-matte via-transparent to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left z-20" />
                <Image
                  src={coach.image}
                  alt={`Coach ${coach.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover grayscale-hover filter-coaches-img"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gold text-[10px] md:text-xs tracking-widest uppercase">{coach.role}</span>
                  <span className="text-steel text-[10px] md:text-xs hidden sm:block">{coach.experience}</span>
                </div>
                <h3 className="font-display text-lg md:text-2xl text-fight mb-1 md:mb-2 group-hover:text-gold transition-colors duration-500">{coach.name}</h3>
                <p className="text-steel text-xs md:text-sm mb-3 md:mb-4">{coach.specialty}</p>
                <p className="text-steel/70 text-[11px] md:text-xs italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  &ldquo;{coach.quote}&rdquo;
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
