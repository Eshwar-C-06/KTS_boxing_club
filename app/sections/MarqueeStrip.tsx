export default function MarqueeStrip() {
  const marqueeItems = [
    "PROFESSIONAL TRAINERS",
    "✦",
    "OPEN FOR MEN & WOMEN",
    "✦",
    "BEGINNER FRIENDLY",
    "✦",
    "AGES 5+",
    "✦",
    "MORNING & EVENING BATCHES",
    "✦",
    "BOXING TECHNIQUES",
    "✦",
    "STRENGTH & CONDITIONING",
    "✦",
    "AGILITY TRAINING",
    "✦",
    "KTS BOXING CLUB",
    "✦",
    "TRAIN • DISCIPLINE • COMPETE",
  ];

  return (
    <section aria-hidden="true" className="w-full marquee-section">
      <div className="marquee-viewport">
        <div className="marquee-track" aria-hidden="true">
          {marqueeItems.concat(marqueeItems).map((text, i) => (
            <div key={i} className="marquee-item">
              {text}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-section {
          width: 100%;
          background: #F5F5F5;
          display: block;
          position: relative;
          z-index: 5; /* sit above Hero bottom overlays (z-4) but below scroll indicator (z-6) */
        }

        .marquee-viewport {
          width: 100%;
          height: 70px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .marquee-track {
          display: flex;
          gap: 48px;
          align-items: center;
          will-change: transform;
          animation: marquee 26s linear infinite;
          padding-left: 4vw;
        }

        /* Pause marquee animation on hover (desktop) for user control */
        .marquee-viewport:hover .marquee-track,
        .marquee-viewport:focus-within .marquee-track {
          animation-play-state: paused;
          -webkit-animation-play-state: paused;
        }

        .marquee-item {
          color: #0A0A0A;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          white-space: nowrap;
          font-size: 14px;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (min-width: 768px) {
          .marquee-item { font-size: 16px; }
        }

        @media (min-width: 1280px) {
          .marquee-item { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}
