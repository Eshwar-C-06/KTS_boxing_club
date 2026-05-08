import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matte: "#050505",
        carbon: "#0A0A0A",
        blood: "#D90429",
        gold: "#D4AF37",
        fight: "#F5F5F5",
        steel: "#8A8A8A",
        warm: "#2A1A0E",
        "ring-light": "#1A1008",
      },
      fontFamily: {
        display: ["var(--font-facon)", "Bebas Neue", "Oswald", "sans-serif"],
        accent: ["var(--font-brackley)", "Georgia", "serif"],
        body: ["var(--font-poppins)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in": "slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-glow": "pulseGlow 2.5s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        "float": "float 6s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(212, 175, 55, 0.15)" },
          "50%": { boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
