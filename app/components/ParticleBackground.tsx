"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

// Warm dust tones — mix of amber, rust, and faint red
const DUST_COLORS = [
  "rgba(180, 130, 70,",   // warm amber
  "rgba(160, 100, 60,",   // rust
  "rgba(200, 160, 90,",   // golden dust
  "rgba(217, 4, 41,",     // blood (sparse)
  "rgba(140, 110, 80,",   // earth
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Respect reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Detect mobile — fewer particles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 8 : 18;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles with warm dust tones
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      const colorBase = DUST_COLORS[Math.floor(Math.random() * DUST_COLORS.length)];
      // Vary size for depth illusion (larger = "closer")
      const size = Math.random() * 2.5 + 0.5;
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.1 - 0.08,
        size,
        opacity: Math.random() * 0.4 + 0.05,
        color: colorBase,
      });
    }

    // Frame-skip for performance on low-end devices
    let lastTime = 0;
    const targetInterval = 1000 / 30; // Cap at 30fps for particles

    const animate = (time: number) => {
      const delta = time - lastTime;
      if (delta >= targetInterval) {
        lastTime = time - (delta % targetInterval);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color} ${particle.opacity})`;
          ctx.fill();
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.4 }}
      aria-hidden="true"
    />
  );
}
