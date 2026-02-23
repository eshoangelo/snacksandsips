import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://snacksnsips.com"),
  title: {
    default: "Snacks & Sips | Luxury Charcuterie & Handcrafted Drinks",
    template: "%s | Snacks & Sips",
  },
  description:
    "Luxury charcuterie boards and handcrafted drinks with a nostalgic Middle Eastern twist. We transform every gathering with artisanal snacks and refreshing sips.",
  keywords: [
    "charcuterie catering",
    "luxury charcuterie boards",
    "Middle Eastern catering",
    "halal catering",
    "handcrafted drinks",
    "frozen cocktails",
    "frozen mocktails",
    "event catering",
    "wedding catering",
    "corporate catering",
    "Snacks and Sips",
    "Snacks n Sips",
    "SnacksNSips",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snacksnsips.com",
    siteName: "Snacks & Sips",
    title: "Snacks & Sips | Luxury Charcuterie & Handcrafted Drinks",
    description:
      "Luxury charcuterie boards and handcrafted drinks with a nostalgic Middle Eastern twist.",
    images: [
      {
        url: "/images/logoandboard.png",
        width: 1200,
        height: 630,
        alt: "Snacks & Sips luxury charcuterie board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snacks & Sips | Luxury Charcuterie & Handcrafted Drinks",
    description:
      "Luxury charcuterie boards and handcrafted drinks with a nostalgic Middle Eastern twist.",
    images: ["/images/logoandboard.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Snacks & Sips",
  description:
    "Luxury charcuterie boards and handcrafted drinks with a nostalgic Middle Eastern twist.",
  url: "https://snacksnsips.com",
  logo: "https://snacksnsips.com/images/logo.svg",
  image: "https://snacksnsips.com/images/logoandboard.png",
  servesCuisine: ["Charcuterie", "Middle Eastern", "Halal"],
  hasMenu: "https://snacksnsips.com/boards",
  contactPoint: {
    "@type": "ContactPoint",
    email: "snacksnsips26@gmail.com",
    contactType: "customer service",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-charcoal text-cream font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
