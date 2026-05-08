"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5, label: "Training Focus Areas", suffix: "" },
  { value: 2, label: "Daily Batch Windows", suffix: "" },
  { value: 8, label: "Kids Training Age", suffix: "+" },
  { value: 1, label: "Discipline First Culture", suffix: "" },
];

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number; to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    // Check for reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(to);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [to, from, duration, isInView]);

  return (
    <span ref={ref} className="font-display">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-20 md:py-24 bg-matte overflow-hidden border-y border-white/5" aria-label="Academy Statistics">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center bg-fixed bg-no-repeat opacity-[0.05] grayscale mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte via-transparent to-matte" />
        <div className="absolute inset-0 bg-gradient-to-t from-matte via-transparent to-matte" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={containerRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" role="list">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
              role="listitem"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl text-fight mb-2 group-hover:text-gold transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] gold-glow-subtle inline-block" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-steel text-xs sm:text-sm tracking-widest uppercase font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
