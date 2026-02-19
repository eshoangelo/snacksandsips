"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/HoneyOnBoard.mov" type="video/mp4" />
        </video>

        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] text-white font-semibold">
              SNACKS
            </h1>
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="w-16 md:w-24 h-[1px] bg-gold" />
              <span className="text-gold text-2xl md:text-3xl font-serif">
                &amp;
              </span>
              <div className="w-16 md:w-24 h-[1px] bg-gold" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] text-white font-semibold">
              SIPS
            </h1>
          </div>

          <p
            className="animate-fade-in-up-delay-1 mt-8 text-lg md:text-xl tracking-[0.2em] uppercase font-light max-w-xl gold-shimmer"
            style={{ textShadow: "0 0 18px rgba(201,168,76,0.6), 0 0 40px rgba(201,168,76,0.3)" }}
          >
            Luxury Charcuterie &middot; Frozen Cocktails &amp; Mocktails
          </p>

          <Link
            href="/about"
            className="animate-fade-in-up-delay-2 mt-12 border border-gold text-gold px-10 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-500"
          >
            Discover More
          </Link>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-[1px] h-12 bg-gold/50" />
          </div>
        </div>
      </section>

      {/* ───── Teaser Sections ───── */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden">
              <Image
                src="/images/board-with-sign.jpg"
                alt="Snacks & Sips board"
                width={600}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                Where Nostalgia
                <br />
                <span className="text-gold italic">Meets Luxury</span>
              </h2>
              <div className="gold-separator mb-6" />
              <p className="text-cream/70 leading-relaxed text-lg mb-8">
                Born from a love of gathering and the rich flavors of Middle
                Eastern heritage, we bring a fresh take on the charcuterie
                experience.
              </p>
              <Link
                href="/about"
                className="inline-block border border-gold text-gold px-8 py-3 tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-500"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Boards Teaser ───── */}
      <section className="py-24 md:py-32 marble-bg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
            Curated With Care
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-6">
            The Boards
          </h2>
          <div className="gold-separator mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "/images/charcuterie-board-closeup.jpg",
                title: "The Classic",
              },
              {
                src: "/images/middleeasterboards.png",
                title: "The Middle Eastern",
              },
              {
                src: "/images/valentineboard.png",
                title: "The Seasonal",
              },
            ].map((b, i) => (
              <div key={i} className="group overflow-hidden">
                <div className="overflow-hidden h-72">
                  <Image
                    src={b.src}
                    alt={b.title}
                    width={400}
                    height={288}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-xl text-charcoal mt-4">
                  {b.title}
                </h3>
              </div>
            ))}
          </div>

          <Link
            href="/boards"
            className="inline-block mt-12 bg-charcoal text-gold px-10 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-500 border border-charcoal hover:border-gold"
          >
            View All Boards
          </Link>
        </div>
      </section>

      {/* ───── Sips Teaser ───── */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Handcrafted Refreshments
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            The Sips
          </h2>
          <div className="gold-separator mx-auto mb-12" />

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:justify-center scrollbar-hide">
            {[
              { src: "/images/pink-strawberry-slush.png", title: "Raspberry Fros\u00e9" },
              { src: "/images/blue-mango-cup.png", title: "Blue Lagoon" },
              { src: "/images/pistachio-caramel-cup.png", title: "Pistachio Latte" },
            ].map((d, i) => (
              <div key={i} className="min-w-[200px] snap-center">
                <div className="overflow-hidden h-64">
                  <Image
                    src={d.src}
                    alt={d.title}
                    width={200}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg text-gold mt-3">{d.title}</h3>
              </div>
            ))}
          </div>

          <Link
            href="/sips"
            className="inline-block mt-12 border border-gold text-gold px-10 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-500"
          >
            View All Sips
          </Link>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-24 md:py-32 marble-bg text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
            Let&apos;s Create Something Special
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-6">
            Transform Your Event
          </h2>
          <div className="gold-separator mx-auto mb-8" />
          <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
            From intimate gatherings to grand celebrations, we tailor every
            board and every sip to your occasion.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-charcoal text-gold px-12 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-500 border border-charcoal hover:border-gold"
          >
            Book Us
          </Link>
        </div>
      </section>
    </>
  );
}
