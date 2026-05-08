"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Activity, Dumbbell, Flame, HeartPulse, Shield } from "lucide-react";

const programs = [
  {
    icon: Shield,
    title: "Boxing Techniques",
    desc: "Structured coaching for stance, guard, footwork, jab-cross combinations, defense, and bag work. Best for students who want real boxing basics before moving into faster rounds.",
    tag: "Beginner Friendly",
    focus: "Combat fundamentals",
    level: "Beginner - Intermediate",
  },
  {
    icon: Activity,
    title: "Agility Training",
    desc: "Coordination ladders, movement drills, reaction work, and endurance rounds to improve speed, balance, and body control for both fitness and boxing movement.",
    tag: "All Fitness Levels",
    focus: "Movement & endurance",
    level: "Beginner - Intermediate",
  },
  {
    icon: Flame,
    title: "CrossFit Workouts",
    desc: "Functional circuits using bodyweight work, strength blocks, conditioning rounds, and timed stations for members who want better stamina and full-body fitness.",
    tag: "Men & Women",
    focus: "Fitness conditioning",
    level: "All levels",
  },
  {
    icon: HeartPulse,
    title: "Weight Loss Programs",
    desc: "Boxing-based cardio, bag rounds, footwork, and conditioning designed for calorie burn, stamina improvement, consistency, and safe progress for returning beginners.",
    tag: "Fitness Focus",
    focus: "Fat loss & stamina",
    level: "Beginner Friendly",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    desc: "Core strength, mobility, power drills, endurance work, and recovery-aware conditioning that supports boxing performance and general athletic fitness.",
    tag: "Ages 5+ Welcome",
    focus: "Strength & power",
    level: "Intermediate-ready",
  },
];

export default function Programs() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="programs" className="relative py-24 md:py-32 bg-carbon overflow-hidden" aria-labelledby="programs-heading">
      {/* Scene transition — smoke fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 scene-transition-top z-[1]" style={{ background: "linear-gradient(to bottom, #050505, transparent)" }} />

      {/* Subtle cross-hatch texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">Training Programs</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 id="programs-heading" className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-fight leading-[0.9]">
            TRAIN LIKE THE<br /><span className="text-stroke-accent">ELITE</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-matte border border-white/5 hover:border-gold/30 p-6 md:p-8 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] card-lift"
              aria-label={`${program.title} — ${program.tag}`}
            >
              {/* Subtle warm glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/0 via-transparent to-gold/0 group-hover:from-gold/[0.03] group-hover:to-gold/[0.05] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />

              <div className="absolute top-4 right-4">
                <span className="text-[9px] md:text-[10px] tracking-widest uppercase text-gold border border-gold/30 rounded-full px-3 py-1">{program.tag}</span>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-carbon border border-white/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <program.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-fight mb-3 group-hover:text-gold transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{program.title}</h3>
                <p className="text-steel/90 text-sm leading-relaxed mb-5 md:mb-6">{program.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                  <span className="text-[10px] tracking-widest uppercase text-fight/70 border border-white/10 rounded-full px-3 py-1">{program.focus}</span>
                  <span className="text-[10px] tracking-widest uppercase text-fight/70 border border-white/10 rounded-full px-3 py-1">{program.level}</span>
                </div>
                <div className="flex items-center gap-2 text-gold text-xs md:text-sm tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <span>Ask About This Program</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="text-center mt-12 md:mt-16">
          <p className="six-caps-regular text-3xl md:text-4xl lg:text-5xl text-steel">&ldquo;No Excuses. Only Rounds.&rdquo;</p>
        </motion.div>
      </div>
    </section>
  );
}
