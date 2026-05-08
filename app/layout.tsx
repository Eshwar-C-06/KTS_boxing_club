import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { BUSINESS } from "./lib/business";
import "./globals.css";

/* =============================================
   FONT LOADING — Performance-optimized
   ============================================= */

const facon = localFont({
  src: "../fonts/Facon.ttf",
  variable: "--font-facon",
  display: "swap",
  preload: true,
});

const brackley = localFont({
  src: [
    { path: "../fonts/BrackleyDemoRegular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/BrackleyDemoItalic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-brackley",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* =============================================
   METADATA & SEO
   ============================================= */

export const metadata: Metadata = {
  title: "KTS Boxing Academy | KTS Boxing Club Chennai",
  description:
    "Forged Through Discipline. Train at KTS Boxing Club in Madipakkam, Chennai: a premium boxing academy for fighters, athletes, and disciplined fitness training.",
  icons: {
    icon: [
      { url: "/images/kts_logo.png", type: "image/png" },
    ],
    shortcut: "/images/kts_logo.png",
    apple: "/images/kts_logo.png",
  },
  keywords:
    "boxing, Chennai, KTS Boxing Club, KTS Boxing Academy, Tamil Nadu, fight training, boxing gym, combat sports, boxing academy, fitness boxing, Madipakkam, Balaji Nagar",
  openGraph: {
    title: "KTS Boxing Academy",
    description: "Elite boxing training in Madipakkam, Chennai.",
    type: "website",
    siteName: BUSINESS.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "KTS Boxing Academy",
    description: "Elite boxing training in Madipakkam, Chennai.",
  },
  robots: "index, follow",
  other: {
    "theme-color": "#050505",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${facon.variable} ${brackley.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: BUSINESS.name,
              alternateName: BUSINESS.alternateName,
              description: "Elite boxing academy and combat training club in Madipakkam, Chennai.",
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.address.streetAddress,
                addressLocality: BUSINESS.address.locality,
                addressRegion: BUSINESS.address.region,
                postalCode: BUSINESS.address.postalCode,
                addressCountry: BUSINESS.address.country,
              },
              openingHours: "Mo-Sa 05:00-22:00",
              sport: "Boxing",
              url: "https://ktsboxingacademy.com",
              sameAs: [BUSINESS.instagramUrl],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                ratingCount: "50",
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-matte text-fight`}>
        {children}
      </body>
    </html>
  );
}
