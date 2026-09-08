export const BUSINESS = {
  name: "Happy Moments GWK",
  tagline: "Party Hall & Celebration Venue",
  instagramHandle: "@happymomentsgwk",
  instagramUrl: "https://instagram.com/happymomentsgwk",
  phones: ["7780638419", "8499921825"],
  whatsappNumber: "917780638419",
  address: {
    line1: "26-32-9, Chaitanya Nagar,",
    line2: "College Road, Old Gajuwaka,",
    line3: "Visakhapatnam - 530026",
    full: "26-32-9, Chaitanya Nagar, College Road, Old Gajuwaka, Visakhapatnam - 530026",
  },
  mapsQuery: "Chaitanya Nagar, College Road, Old Gajuwaka, Visakhapatnam - 530026",
};

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encoded}`;
}

export const DEFAULT_ENQUIRY_MESSAGE =
  "Hi Happy Moments GWK! I'd like to enquire about a celebration.";

export type Occasion = {
  title: string;
  emoji: string;
  description: string;
};

export const OCCASIONS: Occasion[] = [
  {
    title: "Birthdays",
    emoji: "🎂",
    description: "Milestone ages, kids parties and grown-up birthday nights.",
  },
  {
    title: "Anniversaries",
    emoji: "❤️",
    description: "Celebrate every year of love with a setup made for two.",
  },
  {
    title: "Get-Togethers",
    emoji: "🥳",
    description: "Bring your people together for a night to remember.",
  },
  {
    title: "Bride To Be",
    emoji: "💍",
    description: "A dreamy send-off before the big day.",
  },
  {
    title: "Special Celebrations",
    emoji: "🎉",
    description: "Promotions, farewells, reunions — any reason to celebrate.",
  },
  {
    title: "Customized Events",
    emoji: "✨",
    description: "Tell us your vision, we'll build the experience around it.",
  },
];

export type Feature = {
  title: string;
  emoji: string;
};

export const FEATURES: Feature[] = [
  { title: "Customized Balloon Decorations", emoji: "🎈" },
  { title: "Customized Cakes", emoji: "🎂" },
  { title: "Fog Entry", emoji: "🌫️" },
  { title: "Cold Fire Entry", emoji: "🔥" },
  { title: "Bubble Entry", emoji: "🫧" },
  { title: "Photography", emoji: "📸" },
  { title: "Videography", emoji: "🎥" },
  { title: "External Events", emoji: "🎪" },
];

export type PackagePlan = {
  id: string;
  name: string;
  price: number;
  capacity: string;
  includes: string[];
  ctaLabel: string;
  badge?: string;
  tier: "standard" | "popular" | "premium";
};

export const PACKAGES: PackagePlan[] = [
  {
    id: "exclusive",
    name: "Exclusive Plan",
    price: 599,
    capacity: "Up to 5 People",
    includes: [
      "Heart/Circle Balloon Decor",
      "Name Light Letters",
      "Age Light Numbers",
      "Cinematic Board",
      "Neon Light Board",
      "Red Carpet Entry",
    ],
    ctaLabel: "Choose Exclusive",
    tier: "standard",
  },
  {
    id: "group",
    name: "Group Plan",
    price: 799,
    capacity: "Up to 10 People",
    includes: [
      "Heart/Circle Balloon Decor",
      "Name Light Letters",
      "Age Light Numbers",
      "Cinematic Board",
      "Neon Light Board",
      "Red Carpet Entry",
    ],
    ctaLabel: "Choose Group",
    tier: "standard",
  },
  {
    id: "mega-group",
    name: "Mega Group Plan",
    price: 999,
    capacity: "Up to 10 People + ½ Kg Cake",
    includes: [
      "Heart/Circle Balloon Decor",
      "½ Kg Cake",
      "Name Light",
      "Age Light",
      "Cinematic Board",
      "Neon Light Board",
      "Red Carpet Entry",
    ],
    ctaLabel: "Choose Mega Group",
    badge: "POPULAR",
    tier: "popular",
  },
  {
    id: "special-entry",
    name: "Special Entry Plan",
    price: 1499,
    capacity: "Up to 10 People + ½ Kg Cake",
    includes: [
      "Fog Entry",
      "Bubble Entry",
      "Heart/Circle Balloon Decor",
      "Name Light",
      "Age Light",
      "Cinematic Board",
      "Neon Light Board",
      "Red Carpet Entry",
    ],
    ctaLabel: "Choose Special Entry",
    badge: "ULTIMATE EXPERIENCE",
    tier: "premium",
  },
];

export function packageWhatsAppMessage(pkg: PackagePlan) {
  return `Hi Happy Moments GWK! I'm interested in the ₹${pkg.price} ${pkg.name}. Please let me know the availability and booking details.`;
}

export const WHY_US = [
  { number: "01", title: "Beautifully Designed" },
  { number: "02", title: "Celebration Ready" },
  { number: "03", title: "Custom Decorations" },
  { number: "04", title: "Made For Memories" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Celebrations", href: "#celebrations" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
