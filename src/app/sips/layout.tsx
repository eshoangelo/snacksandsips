import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Sips",
  description:
    "Handcrafted frozen cocktails and mocktails with bold, nostalgic flavors. From classic coffee to tropical slushes — every sip is an experience.",
  openGraph: {
    title: "Our Sips | Snacks & Sips",
    description:
      "Handcrafted frozen cocktails and mocktails with bold, nostalgic flavors.",
    url: "https://snacksnsips.com/sips",
    images: [{ url: "/images/pink-strawberry-slush.png", alt: "Snacks & Sips frozen drink" }],
  },
};

export default function SipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
