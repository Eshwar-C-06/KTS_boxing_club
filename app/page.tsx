"use client";

import { useSmoothScroll } from "./hooks/useSmoothScroll";
import ParticleBackground from "./components/ParticleBackground";
import FilmGrain from "./components/FilmGrain";
import WhatsAppCTA from "./components/WhatsAppCTA";
import MobileCTABar from "./components/MobileCTABar";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import MarqueeStrip from "./sections/MarqueeStrip";
import Programs from "./sections/Programs";
import ClassTimings from "./sections/ClassTimings";
import Coaches from "./sections/Coaches";
import Gallery from "./sections/Gallery";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import Membership from "./sections/Membership";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  useSmoothScroll();

  return (
    <main className="relative bg-matte min-h-screen" role="main">
      <ParticleBackground />
      <FilmGrain />
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <Programs />
      <ClassTimings />
      <Coaches />
      <Gallery />
      <Stats />
      <Testimonials />
      <Membership />
      <Contact />
      <Footer />
      <WhatsAppCTA />
      <MobileCTABar />
    </main>
  );
}
