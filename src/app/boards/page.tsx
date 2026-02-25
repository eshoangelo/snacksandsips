import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Boards",
  description:
    "Explore our luxury charcuterie boards — classic spreads, Middle Eastern-inspired arrangements, and custom creations for every occasion.",
  openGraph: {
    title: "Our Boards | Snacks & Sips",
    description:
      "Luxury charcuterie boards for every occasion — classic, Middle Eastern-inspired, and fully custom.",
    url: "https://snacksnsips.com/boards",
    images: [{ url: "/images/three-boards-lineup.jpg", alt: "Snacks & Sips charcuterie boards" }],
  },
};

export default function BoardsPage() {
  return (
    <>
      <PageHeader subtitle="Curated With Care" title="The Boards" />

      {/* ───── Classic Charcuterie ───── */}
      <section className="py-20 md:py-28 marble-bg">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Label */}
          <div className="text-center mb-16">
            <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-3">
              The Classics
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Classic Charcuterie Boards
            </h2>
            <div className="gold-separator mx-auto mb-6" />
            <p className="text-charcoal/60 leading-relaxed text-lg max-w-2xl mx-auto">
              Artfully arranged meats, cheeses, nuts, fresh fruit & veggies, and gourmet
              accompaniments, beautifully styled and paired with indulgent dipping options
              for a luxurious grazing experience — providing both high quantity and quality.
            </p>
            <p className="mt-4 inline-block border border-gold/40 text-gold-dark tracking-[0.15em] uppercase text-xs px-5 py-2">
              Halal Options Available
            </p>
          </div>

          {/* Board Image + Items */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <Image
                src="/images/charcuterie-board-closeup.jpg"
                alt="Classic Charcuterie Board"
                width={600}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">What&apos;s Included</h3>
              <div className="w-10 h-[1px] bg-gold mb-6" />
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Artisan Cheeses",
                  "Cured Meats",
                  "Fresh Fruit & Veggies",
                  "Gourmet Nuts",
                  "Honey & Preserves",
                  "Artisan Crackers",
                  "Indulgent Dipping Options",
                  "Beautiful Styling & Garnishes",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-charcoal/70">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Taste of Back Home ───── */}
      <section className="py-20 md:py-28 bg-charcoal relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Section Label */}
          <div className="text-center mb-16">
            <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-3">
              A Tribute to Tradition
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Taste of Back Home
            </h2>
            <div className="gold-separator mx-auto mb-6" />
            <p className="text-cream/50 leading-relaxed text-lg max-w-2xl mx-auto">
              A celebration of Middle Eastern heritage — every ingredient either
              authentically imported or fresh made from locally sourced produce.
            </p>
          </div>

          {/* Savory */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="overflow-hidden">
              <Image
                src="/images/middleeasterboards.png"
                alt="Taste of Back Home – Savory"
                width={600}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div>
              <p className="text-gold-dark tracking-[0.25em] uppercase text-xs mb-3">
                Taste of Back Home
              </p>
              <h3 className="font-serif text-3xl text-cream mb-4">
                Savory
              </h3>
              <div className="w-10 h-[1px] bg-gold mb-6" />
              <p className="text-cream/60 leading-relaxed text-lg mb-6">
                A rich spread of traditional Middle Eastern flavors — bold, savory
                bites and authentic dips layered with comfort and depth.
              </p>

              <p className="text-gold-dark tracking-[0.2em] uppercase text-xs mb-3">
                Choose Your Dips — Pick 2
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Hummus",
                  "Spicy Hummus",
                  "Baba Ghanoush",
                  "Lebneh",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-cream/60">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-cream/80 leading-relaxed text-sm italic font-bold">
                A curated nostalgic assortment of rotating seasonal favorites, including
                grape leaves, sesame crackers, pickled vegetables, seasonal veggies, olives,
                warm pita, nuts &amp; seeds — and more, based on what is in season and
                what we&apos;re able to source from overseas.
              </p>
            </div>
          </div>

          {/* Sweet */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden md:order-2">
              <Image
                src="/images/boards.png"
                alt="Taste of Back Home – Sweet"
                width={600}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="md:order-1">
              <p className="text-gold-dark tracking-[0.25em] uppercase text-xs mb-3">
                Taste of Back Home
              </p>
              <h3 className="font-serif text-3xl text-cream mb-4">
                Sweet
              </h3>
              <div className="w-10 h-[1px] bg-gold mb-6" />
              <p className="text-cream/60 leading-relaxed text-lg mb-6">
                A beautifully styled selection of nostalgic Middle Eastern sweets
                &amp; fruits, paired with creamy, indulgent dips that elevate every bite.
              </p>

              <p className="text-gold-dark tracking-[0.2em] uppercase text-xs mb-3">
                Choose Your Dips — Pick 2
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Ashta",
                  "Gamar",
                  "Tahini",
                  "Dibis (Date Syrup)",
                  "Jam (Wild Fig/Apricot/Orange/Strawberry/Rose)",
                  "Organic Honey",
                  "Nutella",
                  "Baklava",
                  "Kleicha",
                  "Assortment of Middle Eastern Sweet Treats",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-cream/60">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-cream/80 leading-relaxed text-sm italic font-bold">
                A curated nostalgic assortment of rotating seasonal favorites, including
                warm pita, baklava, Turkish delights, fresh fruit, dried apricots, dates,
                kamardeen — and more, based on what is in season and what we&apos;re
                able to source from overseas.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ───── Custom Boards CTA ───── */}
      <section className="py-20 md:py-28 marble-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                For Every Occasion
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Custom Boards
                <br />
                <span className="text-gold italic">Made for You</span>
              </h2>
              <div className="gold-separator mb-6" />
              <p className="text-charcoal/60 leading-relaxed text-lg mb-8">
                Every event is different, and so is every board. We work with
                you to craft the perfect spread — tailored to your theme, your
                tastes, and your guest count.
              </p>
              <Link
                href="/contact"
                className="inline-block border border-gold text-gold px-10 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-500"
              >
                Get a Quote
              </Link>
            </div>
            <div className="overflow-hidden">
              <Image
                src="/images/three-boards-lineup.jpg"
                alt="Three boards lineup"
                width={600}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
