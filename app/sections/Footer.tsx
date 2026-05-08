"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { BUSINESS, getWhatsAppUrl } from "../lib/business";

const footerLinks = [
  { name: "Programs", href: "#programs" },
  { name: "Coaches", href: "#coaches" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: MessageCircle, href: getWhatsAppUrl(), fallbackHref: "#contact", label: "WhatsApp" },
  { icon: Instagram, href: BUSINESS.instagramUrl, label: "Instagram" },
];

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer ref={ref} className="relative bg-matte pt-20 pb-10 border-t border-white/5" role="contentinfo">
      <div className="absolute top-0 left-0 right-0 h-24 scene-transition-top z-[1]" style={{ background: "linear-gradient(to bottom, #050505, transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group inline-flex" aria-label="KTS Boxing Academy Home">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/kts_logo.png"
                  alt="KTS Boxing Academy Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-fight text-xl tracking-wider leading-none">KTS</span>
                <span className="font-accent text-gold text-[10px] tracking-[0.2em] leading-none">BOXING ACADEMY</span>
              </div>
            </a>
            <p className="text-steel text-sm leading-relaxed max-w-xs mb-6">
              Elite combat institution in Madipakkam. Professional training for fighters, athletes, and warriors.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href ?? social.fallbackHref}
                  target={social.href ? "_blank" : undefined}
                  rel={social.href ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-steel hover:bg-gold/10 hover:text-gold hover:border-gold/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  aria-label={`Visit our ${social.label} page`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="font-display text-lg text-fight tracking-wider mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer Navigation">
              {footerLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-steel hover:text-gold text-sm transition-colors duration-300 w-fit">
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
            <h3 className="font-display text-lg text-fight tracking-wider mb-6">Find Us</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-fight text-sm mb-1 font-medium">Headquarters</p>
                  <a href={BUSINESS.address.mapUrl} target="_blank" rel="noopener noreferrer" className="text-steel text-sm leading-relaxed hover:text-gold transition-colors">
                    {BUSINESS.address.lines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-fight text-sm mb-1 font-medium">Email</p>
                    <a href={`mailto:${BUSINESS.email}`} className="text-steel text-sm hover:text-gold transition-colors">{BUSINESS.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-fight text-sm mb-1 font-medium">Instagram</p>
                    <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-steel text-sm hover:text-gold transition-colors">@kts_boxing_club</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} KTS Boxing Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-steel/50 text-xs">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
