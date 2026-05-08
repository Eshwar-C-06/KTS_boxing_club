"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Check, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../lib/business";

const plans = [
  {
    name: "Fitness Boxing",
    price: "₹3,500",
    period: "per month",
    desc: "For those looking to get in shape, learn the basics, and burn calories.",
    features: [
      "Access to all group classes",
      "Basic technique training",
      "Conditioning & cardio focus",
      "Access to heavy bags & equipment",
    ],
    popular: false,
    color: "steel",
  },
  {
    name: "Boxing + Conditioning",
    price: "₹5,000",
    period: "per month",
    desc: "For students who want structured boxing technique with deeper strength and conditioning.",
    features: [
      "Technique correction & footwork",
      "Pad work and bag rounds",
      "Agility and conditioning drills",
      "Strength & core training",
      "Coach feedback on progress",
    ],
    popular: true,
    color: "gold",
  },
];

export default function Membership() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const membershipUrl = getWhatsAppUrl("Hi, I'm interested in the Membership Plans.");

  return (
    <section ref={sectionRef} id="membership" className="relative py-24 md:py-32 bg-carbon overflow-hidden" aria-labelledby="membership-heading">
      <div className="absolute top-0 left-0 right-0 h-24 scene-transition-top z-[1]" style={{ background: "linear-gradient(to bottom, #050505, transparent)" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">Join The Ranks</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 id="membership-heading" className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-fight leading-[0.9]">
            COMMIT TO THE<br /><span className="text-stroke-accent">GRIND</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative bg-matte p-8 lg:p-10 border rounded-xl card-lift ${
                plan.popular ? "border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] md:scale-105 z-10" : "border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-matte text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className={`font-display text-2xl md:text-3xl mb-2 ${plan.popular ? "text-gold" : "text-fight"}`}>
                {plan.name}
              </h3>
              <p className="text-steel text-sm h-10">{plan.desc}</p>
              
              <div className="my-8 flex items-baseline gap-2">
                <span className="font-display text-4xl md:text-5xl text-fight">{plan.price}</span>
                <span className="text-steel text-sm">{plan.period}</span>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-8" />

              <ul className="space-y-4 mb-10" aria-label={`Features of ${plan.name} plan`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? "text-gold" : "text-steel"}`} aria-hidden="true" />
                    <span className="text-fight/80 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={membershipUrl ?? "#contact"}
                target={membershipUrl ? "_blank" : undefined}
                rel={membershipUrl ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-center gap-3 w-full py-4 text-sm font-bold tracking-wider uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full ${
                  plan.popular
                    ? "bg-gold hover:bg-gold/90 text-matte hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
                    : "bg-white/5 hover:bg-white/10 text-fight border border-white/10 hover:border-white/30"
                }`}
                aria-label={`Enroll in ${plan.name} plan`}
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="mt-16 text-center">
          <p className="text-steel text-sm mb-4">Need a custom training package or personal coaching?</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-semibold transition-colors">
            <span>Talk to us about a custom plan</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
