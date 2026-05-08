"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Target, Users, Dumbbell, Trophy } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Target, title: "Beginner Friendly", desc: "Clear basics, steady correction, and no pressure to know boxing before you start." },
  { icon: Users, title: "Community Training", desc: "Small-batch energy with students training for fitness, discipline, and confidence." },
  { icon: Dumbbell, title: "Fitness + Boxing", desc: "A balanced mix of technique, conditioning, strength, agility, and fat-loss work." },
  { icon: Trophy, title: "Coach-Led Culture", desc: "Focused sessions, practical feedback, and training habits that build consistency." },
];

const images = [
  { src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop", alt: "Inside the academy — heavy bags under dramatic lighting" },
  { src: "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=600&auto=format&fit=crop", alt: "Boxer training on heavy bag" },
  { src: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=600&auto=format&fit=crop", alt: "Boxing gloves hanging in the gym" },
];

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 bg-matte overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute top-0 right-0 w-1/2 h-full warm-light-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="font-body text-gold/90 text-[11px] md:text-xs tracking-[0.24em] uppercase font-medium">About The Academy</span>
          </div>
          <h2 id="about-heading" className="text-fight leading-[0.92]">
            <span className="block font-body text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[0.14em] uppercase text-fight/92">
              Where Chennai
            </span>
            <span className="mt-3 block font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-fight [text-shadow:0_10px_26px_rgba(0,0,0,0.4)]">
              Learns <span className="text-stroke-accent">To Fight</span>
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="space-y-8">
            <p className="text-steel text-base md:text-lg leading-relaxed">
              KTS Boxing Academy is a focused boxing and fitness training space in Madipakkam for students who want real coaching, disciplined routines, and a supportive place to improve.
            </p>
            <p className="text-steel text-base md:text-lg leading-relaxed">
              From first-time beginners to regular fitness members, every session is built around technique, conditioning, and consistency. You train hard, learn safely, and keep showing up.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-8">
              {features.map((feature, index) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group p-5 md:p-6 bg-carbon/50 border border-white/5 hover:border-gold/30 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-gold mb-3 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
                  <h3 className="font-body text-base md:text-lg font-semibold uppercase tracking-[0.08em] text-fight mb-1">{feature.title}</h3>
                  <p className="text-steel text-xs md:text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.blockquote initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="relative pl-6 border-l-2 border-gold mt-12">
              <p className="six-caps-regular text-3xl md:text-4xl lg:text-5xl text-fight italic leading-relaxed">&ldquo;Discipline Beats Talent. Every Single Time.&rdquo;</p>
              <cite className="text-steel text-sm mt-4 tracking-wider uppercase block not-italic">— KTS Philosophy</cite>
            </motion.blockquote>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-2 gap-3 md:gap-4">
            {images.map((img, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 + index * 0.15, ease: [0.16, 1, 0.3, 1] }} className={`relative overflow-hidden group rounded-xl ${index === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" />
                <Image src={img.src} alt={img.alt} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"} className="object-cover image-hover-zoom" style={{ filter: "brightness(0.65) contrast(1.15) saturate(0.85)" }} loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
