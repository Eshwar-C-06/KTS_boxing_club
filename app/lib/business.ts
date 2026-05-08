export const BUSINESS = {
  name: "KTS Boxing Academy",
  alternateName: "KTS Boxing Club",
  displayName: "KTS Boxing Club / KTS Boxing Academy",
  address: {
    lines: [
      "Plot 96, 24th St",
      "Balaji Nagar Extn-II",
      "Balaji Nagar",
      "Madipakkam",
      "Chennai, Tamil Nadu 600091",
    ],
    streetAddress: "Plot 96, 24th St, Balaji Nagar Extn-II, Balaji Nagar, Madipakkam",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600091",
    country: "IN",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Plot%2096%2C%2024th%20St%2C%20Balaji%20Nagar%20Extn-II%2C%20Balaji%20Nagar%2C%20Madipakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600091",
  },
  instagramUrl: "https://www.instagram.com/kts_boxing_club/",
  email: "info@ktsboxingacademy.com",
  whatsapp: {
    number: "WHATSAPP_NUMBER_HERE",
    defaultMessage:
      "Hi KTS Boxing Academy 👋\nI came across your academy online and I’m interested in learning more about the training programs and membership details.",
  },
} as const;

export function hasConfiguredWhatsAppNumber() {
  return BUSINESS.whatsapp.number !== "WHATSAPP_NUMBER_HERE";
}

export function getWhatsAppUrl(message: string = BUSINESS.whatsapp.defaultMessage) {
  if (!hasConfiguredWhatsAppNumber()) {
    return null;
  }

  return `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
