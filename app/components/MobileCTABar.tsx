"use client";

import { useState, useEffect } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "../lib/business";

const WHATSAPP_MESSAGE = "Hi, I'd like to book a free trial at KTS Boxing Academy.";

export default function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGE);

  if (!isVisible) return null;

  return (
    <div className="mobile-cta-bar lg:hidden" role="complementary" aria-label="Quick actions">
      <a
        href={whatsappUrl ?? "#contact"}
        target={whatsappUrl ? "_blank" : undefined}
        rel={whatsappUrl ? "noopener noreferrer" : undefined}
        className="bg-[#25D366] text-white rounded-full"
        aria-label={whatsappUrl ? "Book free trial on WhatsApp" : "Book free trial through the contact form"}
      >
        <MessageCircle className="w-4 h-4" />
        Book Free Trial
      </a>
      <a
        href={BUSINESS.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-matte hover:bg-gold/90 rounded-full font-bold"
        aria-label="Visit KTS Boxing Club on Instagram"
      >
        <Instagram className="w-4 h-4" />
        Instagram
      </a>
    </div>
  );
}
