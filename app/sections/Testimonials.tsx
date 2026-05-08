"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Aravind",
    context: "Beginner member, Madipakkam",
    quote:
      "I joined with no boxing background. The coaches corrected my basics patiently, and the sessions helped me become more consistent with fitness.",
  },
  {
    name: "Priya",
    context: "Fitness boxing student",
    quote:
      "The training feels disciplined but not intimidating. The mix of boxing drills and conditioning helped me lose weight and feel stronger.",
  },
  {
    name: "Rahul",
    context: "Evening batch member",
    quote:
      "Good place for people who want serious workouts after office hours. The atmosphere pushes you, but the coaches still keep it practical.",
  },
];

export default function Testimonials() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-24 md:py-28 bg-matte overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-matte via-carbon/40 to-matte" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">Student Feedback</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 id="testimonials-heading" className="font-display text-4xl sm:text-5xl md:text-7xl text-fight leading-[0.9]">
            BUILT BY<br /><span className="text-stroke-accent">CONSISTENCY</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-matte/85 border border-white/5 hover:border-gold/25 rounded-xl p-7 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <MessageSquare className="w-5 h-5 text-gold mb-6" aria-hidden="true" />
              <p className="text-steel text-sm md:text-base leading-relaxed mb-8">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="pt-5 border-t border-white/10">
                <p className="text-fight text-sm font-semibold tracking-wider uppercase">{testimonial.name}</p>
                <p className="text-steel/70 text-xs mt-1">{testimonial.context}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
