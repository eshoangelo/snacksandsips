"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function SipsPage() {
  const drinks = [
    {
      src: "/images/pink-strawberry-slush.png",
      title: "Strawberry Rose",
      desc: "Fresh strawberry slush delicately infused with rose water, garnished with rock candy & edible flowers.",
    },
    {
      src: "/images/blue-mango-cup.png",
      title: "Blue Mango",
      desc: "Tropical mango blended with blue spirulina, topped with fresh mango chunks for a vibrant twist.",
    },
    {
      src: "/images/pistachio-caramel-cup.png",
      title: "Pistachio Caramel",
      desc: "Creamy pistachio blended smooth with a rich caramel drizzle and crushed pistachios on top.",
    },
    {
      src: "/images/chocolate-pretzel-cup.png",
      title: "Chocolate Pretzel",
      desc: "Rich chocolate blend layered with salted pretzel crumble — the perfect balance of sweet meets salty.",
    },
    {
      src: "/images/yellow-mango-slush.png",
      title: "Mango Sunshine",
      desc: "Pure mango slush with a sugar rim, fresh mint leaf & a dried floral garnish for the finishing touch.",
    },
  ];

  return (
    <>
      <PageHeader
        subtitle="Handcrafted Refreshments"
        title="The Sips"
      />

      {/* ───── Drinks Grid ───── */}
      <section className="py-20 md:py-28 bg-charcoal relative">
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Top Row - 3 drinks */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {drinks.slice(0, 3).map((drink, i) => (
              <div key={i} className="group card-hover">
                <div className="bg-charcoal-light border border-gold/10 overflow-hidden">
                  <div className="overflow-hidden h-80 md:h-96">
                    <Image
                      src={drink.src}
                      alt={drink.title}
                      width={400}
                      height={384}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="font-serif text-2xl text-gold mb-3">
                      {drink.title}
                    </h3>
                    <div className="w-8 h-[1px] bg-gold/40 mx-auto mb-4" />
                    <p className="text-cream/50 leading-relaxed text-sm">
                      {drink.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 drinks centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {drinks.slice(3).map((drink, i) => (
              <div key={i} className="group card-hover">
                <div className="bg-charcoal-light border border-gold/10 overflow-hidden">
                  <div className="overflow-hidden h-80 md:h-96">
                    <Image
                      src={drink.src}
                      alt={drink.title}
                      width={400}
                      height={384}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="font-serif text-2xl text-gold mb-3">
                      {drink.title}
                    </h3>
                    <div className="w-8 h-[1px] bg-gold/40 mx-auto mb-4" />
                    <p className="text-cream/50 leading-relaxed text-sm">
                      {drink.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Drinks Video Section ───── */}
      <section className="py-20 md:py-28 marble-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
              Watch Them Come to Life
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Crafted Fresh
            </h2>
            <div className="gold-separator mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/videos/PinkDrink.mov", label: "Pink Drink" },
              { src: "/videos/YellowDrink.MOV", label: "Mango Slush" },
              { src: "/videos/browndrink.MOV", label: "Chocolate Blend" },
            ].map((v, i) => (
              <div key={i} className="overflow-hidden h-64 md:h-96 relative group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={v.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent flex items-end justify-center pb-6">
                  <span className="font-serif text-lg text-white">{v.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
