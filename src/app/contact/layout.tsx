import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to bring Snacks & Sips to your next event? Inquire about our luxury charcuterie boards and handcrafted drinks for weddings, corporate events, and more.",
  openGraph: {
    title: "Contact Us | Snacks & Sips",
    description:
      "Inquire about our luxury charcuterie boards and handcrafted drinks for your next event.",
    url: "https://snacksnsips.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
