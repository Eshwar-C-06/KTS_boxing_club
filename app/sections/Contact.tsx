"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Instagram, Mail, MapPin, Clock, Send } from "lucide-react";
import { BUSINESS } from "../lib/business";

const contactInfo = [
  { icon: MapPin, title: "Location", detail: BUSINESS.address.lines.join("\n"), href: BUSINESS.address.mapUrl },
  { icon: Instagram, title: "Instagram", detail: "@kts_boxing_club", href: BUSINESS.instagramUrl },
  { icon: Mail, title: "Email", detail: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: Clock, title: "Hours", detail: "Mon-Sat: 5:00 AM - 10:00 PM\nSun: Closed", href: null },
];

export default function Contact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 bg-matte overflow-hidden border-t border-white/5" aria-labelledby="contact-heading">
      <div className="absolute top-0 right-0 w-1/3 h-full warm-light-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">Get In Touch</span>
            </div>

            <h2 id="contact-heading" className="font-display text-4xl sm:text-5xl md:text-7xl text-fight leading-[0.9] mb-8">
              STEP INTO THE<br /><span className="text-stroke-accent">RING</span>
            </h2>

            <p className="text-steel text-base md:text-lg max-w-md mb-12">
              Ready to start? Drop in at Madipakkam or reach out to book your trial. Excuses don't build champions.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-carbon border border-white/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-fight font-semibold tracking-wider uppercase text-sm mb-1">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.icon === MapPin || item.icon === Instagram ? "_blank" : undefined}
                        rel={item.icon === MapPin || item.icon === Instagram ? "noopener noreferrer" : undefined}
                        className="text-steel hover:text-gold transition-colors text-sm md:text-base whitespace-pre-line"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-steel text-sm md:text-base whitespace-pre-line">{item.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="relative">
            <div className="bg-carbon/80 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-xl relative z-10">
              <h3 className="font-display text-2xl text-fight mb-6">Send a Message</h3>

              {formStatus === "success" ? (
                <div className="bg-green-900/20 border border-green-500/30 text-green-400 p-6 rounded-xl flex items-center gap-4" role="alert">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Message Received.</p>
                    <p className="text-sm opacity-80">Our team will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label htmlFor="name" className="text-xs text-steel uppercase tracking-widest font-semibold">Name</label>
                      <input type="text" id="name" required className="w-full bg-matte border border-white/10 rounded-full px-5 py-3 text-fight text-sm focus:outline-none focus:border-gold/50 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label htmlFor="phone" className="text-xs text-steel uppercase tracking-widest font-semibold">Phone</label>
                      <input type="tel" id="phone" required className="w-full bg-matte border border-white/10 rounded-full px-5 py-3 text-fight text-sm focus:outline-none focus:border-gold/50 transition-colors" placeholder="Your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs text-steel uppercase tracking-widest font-semibold">Email</label>
                    <input type="email" id="email" required className="w-full bg-matte border border-white/10 rounded-full px-5 py-3 text-fight text-sm focus:outline-none focus:border-gold/50 transition-colors" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs text-steel uppercase tracking-widest font-semibold">Message</label>
                    <textarea id="message" required rows={4} className="w-full bg-matte border border-white/10 rounded-2xl px-5 py-4 text-fight text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none" placeholder="I'm interested in boxing classes and membership details..." />
                  </div>

                  <button type="submit" disabled={formStatus === "submitting"} className="premium-cta w-full py-4 text-[12px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    {formStatus === "submitting" ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 blur-[60px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
