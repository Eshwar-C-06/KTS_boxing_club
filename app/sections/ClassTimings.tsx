"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, Dumbbell, Moon, Sun, Users } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const batches = [
  {
    icon: Sun,
    name: "Morning Batch",
    time: "5:30 AM - 7:00 AM",
    days: "Monday - Saturday",
    focus: "Boxing basics, bag work, conditioning, and mobility for beginners and regular members.",
  },
  {
    icon: Moon,
    name: "Evening Batch",
    time: "6:30 PM - 8:30 PM",
    days: "Monday - Saturday",
    focus: "Technique rounds, agility drills, strength work, and fitness boxing after work hours.",
  },
  {
    icon: CalendarDays,
    name: "Weekend Sessions",
    time: "7:00 AM - 8:30 AM",
    days: "Saturday & Sunday",
    focus: "Skill correction, pad work, endurance rounds, and catch-up training for busy schedules.",
  },
  {
    icon: Users,
    name: "Kids Training",
    time: "5:00 PM - 6:00 PM",
    days: "Monday, Wednesday, Friday",
    focus: "Age-appropriate boxing movement, coordination, focus, and confidence-building drills.",
  },
  {
    icon: Dumbbell,
    name: "Fitness Boxing",
    time: "7:30 PM - 8:30 PM",
    days: "Monday - Saturday",
    focus: "Weight loss, cardio boxing, strength circuits, and high-energy conditioning for all levels.",
  },
];

export default function ClassTimings() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="timings" className="relative py-24 md:py-28 bg-matte overflow-hidden border-t border-white/5" aria-labelledby="timings-heading">
      <div className="absolute top-0 left-0 w-1/2 h-full warm-light-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-14 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">Class Timings</span>
          </div>
          <h2 id="timings-heading" className="font-display text-4xl sm:text-5xl md:text-7xl text-fight leading-[0.9]">
            TRAINING<br /><span className="text-stroke-accent">WINDOWS</span>
          </h2>
          <p className="text-steel text-sm md:text-base max-w-2xl mt-6 leading-relaxed">
            Sample batch schedule for planning your visit. Final timings can be confirmed directly with the academy before joining.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {batches.map((batch, index) => (
            <motion.article
              key={batch.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-carbon/70 border border-white/5 hover:border-gold/30 rounded-xl p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="w-11 h-11 rounded-full bg-matte border border-white/10 flex items-center justify-center mb-5 group-hover:border-gold/40 transition-colors duration-500">
                <batch.icon className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-fight mb-3 group-hover:text-gold transition-colors duration-500">{batch.name}</h3>
              <div className="flex items-center gap-2 text-gold text-xs tracking-wider uppercase mb-2">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{batch.time}</span>
              </div>
              <p className="text-fight/70 text-xs uppercase tracking-[0.16em] mb-4">{batch.days}</p>
              <p className="text-steel text-sm leading-relaxed">{batch.focus}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
