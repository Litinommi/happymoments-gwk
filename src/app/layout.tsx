import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://litinommi.github.io/happymoments-gwk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Happy Moments GWK | Party Hall & Celebration Venue",
  description:
    "Celebrate birthdays, anniversaries, get-togethers and special occasions at Happy Moments GWK. Explore celebration packages, decorations and enquire on WhatsApp.",
  keywords: [
    "Happy Moments GWK",
    "party hall Visakhapatnam",
    "birthday decoration Gajuwaka",
    "celebration venue Vizag",
    "balloon decoration Visakhapatnam",
  ],
  openGraph: {
    title: "Happy Moments GWK | Party Hall & Celebration Venue",
    description:
      "Celebrate birthdays, anniversaries, get-togethers and special occasions at Happy Moments GWK. Explore celebration packages, decorations and enquire on WhatsApp.",
    url: siteUrl,
    siteName: "Happy Moments GWK",
    images: ["/logo.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Moments GWK | Party Hall & Celebration Venue",
    description:
      "Celebrate birthdays, anniversaries, get-togethers and special occasions at Happy Moments GWK.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  image: `${siteUrl}/logo.jpg`,
  telephone: BUSINESS.phones.map((p) => `+91${p}`),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS.address.line1} ${BUSINESS.address.line2}`,
    addressLocality: "Visakhapatnam",
    postalCode: "530026",
    addressCountry: "IN",
  },
  sameAs: [BUSINESS.instagramUrl],
  url: siteUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
