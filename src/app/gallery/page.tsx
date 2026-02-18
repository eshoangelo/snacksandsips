"use client";

import Image from "next/image";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const images = [
  { src: "/images/logoandboard.png", alt: "Snacks & Sips board with logo" },
  { src: "/images/board-with-sign.jpg", alt: "Board with sign" },
  { src: "/images/three-boards-lineup.jpg", alt: "Three boards lineup" },
  { src: "/images/middleeasterboards.png", alt: "Middle Eastern boards" },
  { src: "/images/charcuterie-board-closeup.jpg", alt: "Charcuterie board closeup" },
  { src: "/images/valentineboard.png", alt: "Valentine board" },
  { src: "/images/3boards.png", alt: "Three boards overhead" },
  { src: "/images/boards.png", alt: "Multiple boards" },
  { src: "/images/pink-strawberry-slush.png", alt: "Strawberry slush" },
  { src: "/images/blue-mango-cup.png", alt: "Blue mango cup" },
  { src: "/images/pistachio-caramel-cup.png", alt: "Pistachio caramel cup" },
  { src: "/images/chocolate-pretzel-cup.png", alt: "Chocolate pretzel cup" },
  { src: "/images/yellow-mango-slush.png", alt: "Mango sunshine" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <PageHeader subtitle="A Glimpse" title="Gallery" />

      {/* ───── Photo Grid ───── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Video Reel ───── */}
      <section className="py-20 md:py-28 marble-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
              In Motion
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Behind the Cart
            </h2>
            <div className="gold-separator mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/videos/HoneyOnBoard.mov",
              "/videos/Cart.mov",
              "/videos/MiddleEasternBoards.mov",
              "/videos/PinkDrink.mov",
              "/videos/YellowDrink.MOV",
              "/videos/browndrink.MOV",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden h-52 md:h-72">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Lightbox ───── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 text-white/50 hover:text-gold text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + images.length) % images.length);
            }}
          >
            &#8249;
          </button>

          {/* Image */}
          <Image
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            width={1000}
            height={800}
            className="max-h-[85vh] w-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-white/50 hover:text-gold text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % images.length);
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
