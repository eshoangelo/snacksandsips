import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the Snacks & Sips gallery — stunning charcuterie boards, handcrafted drinks, and event setups that bring luxury to every gathering.",
  openGraph: {
    title: "Gallery | Snacks & Sips",
    description:
      "Stunning charcuterie boards, handcrafted drinks, and event setups.",
    url: "https://snacksnsips.com/gallery",
    images: [{ url: "/images/logoandboard.png", alt: "Snacks & Sips board with logo" }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
