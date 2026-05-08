"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useCallback } from "react";

const allSips = [
  { src: "/images/Birthday Cake.PNG", title: "Birthday Cake" },
  { src: "/images/pink-strawberry-slush.png", title: "Raspberry Frosé" },
  { src: "/images/yellow-mango-slush.png", title: "Mimosa" },
  { src: "/images/blue-mango-cup.png", title: "Blue Lagoon" },
  { src: "/images/blue-raspberry.PNG", title: "Blue Raspberry" },
  { src: "/images/tropical-blue.jpeg", title: "Tropical Blue" },
  { src: "/images/frozenhotchoclate.PNG", title: "Frozen Hot Chocolate" },
  { src: "/images/pinacolada.PNG", title: "Piña Colada" },
  { src: "/images/dreamsicle.PNG", title: "Dreamsicle" },
  { src: "/images/pineapple-habanero.png", title: "Pineapple Habanero" },
  { src: "/images/strawberry-kiwi-fizz.png", title: "Strawberry Kiwi Fizz" },
  { src: "/images/bajablast.PNG", title: "Baja Blast" },
  { src: "/images/pinkstarburst.PNG", title: "Pink Starburst" },
  { src: "/images/kiwicoconut.PNG", title: "Kiwi Coconut" },
  { src: "/images/blueberrylemonade.PNG", title: "Blueberry Lemonade" },
  { src: "/images/lavenderlemonade.PNG", title: "Lavender Lemonade" },
  { src: "/images/spicywatermelonlimeade.PNG", title: "Spicy Watermelon Limeade" },
  { src: "/images/mojito.PNG", title: "Mojito" },
  { src: "/images/cucumbermint.PNG", title: "Cucumber Mint" },
  { src: "/images/paloma.PNG", title: "Paloma" },
  { src: "/images/aperolspritz.PNG", title: "Aperol Spritz" },
  { src: "/images/orangefanta.PNG", title: "Orange Fanta" },
  { src: "/images/Peach Bellini.jpeg", title: "Peach Bellini" },
  { src: "/images/Shirley Temple.PNG", title: "Shirley Temple" },
  { src: "/images/Peach Sweet Tea.PNG", title: "Peach Sweet Tea" },
  { src: "/images/pistachio-caramel-cup.png", title: "Pistachio Latte" },
  { src: "/images/chocolate-pretzel-cup.png", title: "Salted Caramel Mocha" },
  { src: "/images/classiccoffee.PNG", title: "Classic Coffee" },
  { src: "/images/expressomartini.PNG", title: "Espresso Martini" },
  { src: "/images/HazelnutLatte.PNG", title: "Hazelnut Latte" },
];

function SipCard({ sip }: { sip: { src: string; title: string } }) {
  return (
    <div className="sips-card flex-shrink-0">
      <div className="overflow-hidden h-48 md:h-64">
        <Image
          src={sip.src}
          alt={sip.title}
          width={200}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-serif text-sm md:text-lg text-gold mt-3 text-center">{sip.title}</h3>
    </div>
  );
}

function SipsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePause = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const style = getComputedStyle(el);
    const matrix = new DOMMatrix(style.transform);
    el.style.animation = "none";
    el.style.transform = `translateX(${matrix.m41}px)`;
  }, []);

  const handleResume = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const style = getComputedStyle(el);
    const matrix = new DOMMatrix(style.transform);
    const currentX = matrix.m41;
    const totalWidth = el.scrollWidth / 2;
    const remaining = (totalWidth + currentX) / totalWidth;
    const fullDuration = 90;
    const remainingDuration = remaining * fullDuration;

    el.style.transform = "";
    el.style.animation = "none";
    void el.offsetHeight;
    el.style.animation = `scroll-sips ${fullDuration}s linear infinite`;
    el.style.animationDelay = `-${(1 - remaining) * fullDuration}s`;
  }, []);

  return (
    <div
      className="sips-carousel-container overflow-hidden relative"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
    >
      <div className="sips-carousel" ref={carouselRef}>
        {/* First set */}
        {allSips.map((sip, i) => (
          <SipCard key={`a-${i}`} sip={sip} />
        ))}
        {/* Duplicate set for seamless loop */}
        {allSips.map((sip, i) => (
          <SipCard key={`b-${i}`} sip={sip} />
        ))}
      </div>
    </div>
  );
}

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
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] md:h-[500px] object-cover"
              >
                <source src="/videos/videodrink.mov" type="video/mp4" />
              </video>
            </div>
            <div>
              <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-gold-dark mb-6 leading-tight">
                Where Nostalgia
                <br />
                <span className="text-gold italic">Meets Luxury</span>
              </h2>
              <div className="gold-separator mb-6" />
              <p className="text-charcoal/70 leading-relaxed text-lg mb-8">
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
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
            Curated With Care
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-dark mb-6">
            The Boards
          </h2>
          <div className="gold-separator mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "/images/charcuterie-board-closeup.jpg",
                title: "The Classic",
                objectPos: "object-center",
              },
              {
                src: "/images/JC6A0489.JPEG",
                title: "A Taste Of Back Home",
                objectPos: "object-[center_70%]",
              },
              {
                src: "/images/valentineboard.png",
                title: "The Seasonal",
                objectPos: "object-center",
              },
            ].map((b, i) => (
              <div key={i} className="group overflow-hidden">
                <div className="overflow-hidden h-56 md:h-72">
                  <Image
                    src={b.src}
                    alt={b.title}
                    width={400}
                    height={288}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${b.objectPos}`}
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
            className="inline-block mt-12 bg-gold text-charcoal px-10 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold-dark transition-all duration-500 border border-gold"
          >
            View All Boards
          </Link>
        </div>
      </section>

      {/* ───── Sips Teaser ───── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
            Handcrafted Refreshments
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-dark mb-6">
            The Sips
          </h2>
          <div className="gold-separator mx-auto mb-12" />

          <div className="overflow-hidden rounded-sm mb-12 max-w-4xl mx-auto">
            <Image
              src="/images/JC6A0643.JPEG"
              alt="Snacks & Sips signature frozen drinks lineup"
              width={1200}
              height={500}
              className="w-full h-[200px] md:h-[350px] object-cover object-bottom"
            />
          </div>

          <SipsCarousel />

          <Link
            href="/sips"
            className="inline-block mt-12 border border-gold text-gold px-10 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-500"
          >
            View All Sips
          </Link>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
            Let&apos;s Create Something Special
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-dark mb-6">
            Transform Your Event
          </h2>
          <div className="gold-separator mx-auto mb-8" />
          <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
            From intimate gatherings to grand celebrations, we tailor every
            board and every sip to your occasion.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-charcoal px-12 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold-dark transition-all duration-500 border border-gold"
          >
            Book Us
          </Link>
        </div>
      </section>
    </>
  );
}
