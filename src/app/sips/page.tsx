"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function SipsPage() {
  const signatureDrinks = [
    {
      src: "/images/Birthday Cake.PNG",
      title: "Birthday Cake",
      desc: "Sweet vanilla cake flavor blended into a creamy frozen treat, topped with marshmallow fluff and festive sprinkles for a nostalgic finish.",
    },
    {
      src: "/images/pink-strawberry-slush.png",
      title: "Raspberry Fros\u00e9",
      desc: "Smooth ros\u00e9 wine with a raspberry pur\u00e9e twist.",
    },
    {
      src: "/images/yellow-mango-slush.png",
      title: "Mimosa",
      desc: "Fresh 100% orange juice with sparkling prosecco.",
    },
    {
      src: "/images/blue-mango-cup.png",
      title: "Blue Lagoon",
      desc: "Bright lemonade blended with blue spirulina, frozen into a smooth, tangy sweet/sour slush with a refreshing tropical twist. Available dye free.",
    },
    {
      src: "/images/frozenhotchoclate.PNG",
      title: "Frozen Hot Chocolate",
      desc: "Dye free. Rich, creamy chocolate blended ice cold.",
    },
    {
      src: "/images/pinacolada.PNG",
      title: "Pi\u00f1a Colada",
      desc: "Creamy coconut and pineapple frozen into a tropical, smooth, vacation in a cup.",
    },
    {
      src: "/images/dreamsicle.PNG",
      title: "Dreamsicle",
      desc: "Bright orange and creamy vanilla blended into a smooth, nostalgic, orange creamsicle.",
    },
    {
      src: "/images/pineapple-habanero.png",
      title: "Pineapple Habanero",
      desc: "Dye free. Sweet pineapple with a subtle habanero kick, frozen into a bold, tropical slush with a smooth heat.",
    },
    {
      src: "/images/strawberry-kiwi-fizz.png",
      title: "Strawberry Kiwi Fizz",
      desc: "Juicy strawberry and bright kiwi blended into a smooth, refreshing slush with a crisp, fruity finish. Can be made dye free.",
    },
    {
      src: "/images/bajablast.PNG",
      title: "Baja Blast",
      desc: "Tropical lime citrus blended into an icy, electric-green summer classic.",
    },
    {
      src: "/images/pinkstarburst.PNG",
      title: "Pink Starburst",
      desc: "Strawberry citrus sweetness frozen into a bright, nostalgic treat.",
    },
    {
      src: "/images/kiwicoconut.PNG",
      title: "Kiwi Coconut",
      desc: "Dye free. Tangy kiwi and creamy coconut in a smooth tropical freeze.",
    },
    {
      src: "/images/blueberrylemonade.PNG",
      title: "Blueberry Lemonade",
      desc: "Sweet blueberry meets crisp, refreshing lemonade. Can be made dye free.",
    },
    {
      src: "/images/lavenderlemonade.PNG",
      title: "Lavender Lemonade",
      desc: "Light floral lavender layered into bright, icy lemonade. Can be made dye free.",
    },
    {
      src: "/images/spicywatermelonlimeade.PNG",
      title: "Spicy Watermelon Limeade",
      desc: "Dye free. Juicy watermelon, fresh lime, and a subtle chili kick.",
    },
    {
      src: "/images/mojito.PNG",
      title: "Mojito",
      desc: "Dye free. Cool mint and fresh lime in a crisp frozen blend. Can be flavored as well.",
    },
    {
      src: "/images/cucumbermint.PNG",
      title: "Cucumber Mint",
      desc: "Dye free. Clean cucumber and mint for a light, refreshing sip.",
    },
    {
      src: "/images/paloma.PNG",
      title: "Paloma",
      desc: "Dye free. Classic cocktail — bold grapefruit citrus with a smooth frozen finish.",
    },
    {
      src: "/images/aperolspritz.PNG",
      title: "Aperol Spritz",
      desc: "Classic cocktail — bright orange citrus with a chic bittersweet edge.",
    },
    {
      src: "/images/orangefanta.PNG",
      title: "Orange Fanta",
      desc: "Classic bold orange soda, frozen and fun.",
    },
    {
      src: "/images/Peach Bellini.jpeg",
      title: "Peach Bellini",
      desc: "Sweet white peach blended into a smooth, refreshing frozen cocktail with a delicate fruity finish.",
    },
    {
      src: "/images/Shirley Temple.PNG",
      title: "Shirley Temple",
      desc: "Crisp lemon lime and pomegranate sweetness blended into a vibrant, refreshing frozen classic.",
    },
    {
      src: "/images/Peach Sweet Tea.PNG",
      title: "Peach Sweet Tea",
      desc: "Dye free. Smooth sweet tea infused with ripe peach, blended into a refreshing, lightly fruity frozen beverage.",
    },
  ];

  const coffeeDrinks = [
    {
      src: "/images/pistachio-caramel-cup.png",
      title: "Pistachio Latte",
      desc: "Creamy cold brew coffee with milk and nutty pistachio. Dye free.",
    },
    {
      src: "/images/chocolate-pretzel-cup.png",
      title: "Salted Caramel Mocha",
      desc: "Rich coffee blended with chocolate and salted caramel. Smooth, indulgent, perfectly balanced. Dye free.",
    },
    {
      src: "/images/classiccoffee.PNG",
      title: "Classic Coffee",
      desc: "Bold cold brew blended and frozen into a smooth, lightly sweet coffee slush with rich, refreshing flavor. Dye free.",
    },
    {
      src: "/images/expressomartini.PNG",
      title: "Espresso Martini",
      desc: "Dye free. Bold espresso and smooth sweetness blended into a rich, velvety frozen indulgence with a deep coffee kick.",
    },
    {
      src: "/images/HazelnutLatte.PNG",
      title: "Hazelnut Latte",
      desc: "Dye free. Bold coffee blended with smooth hazelnut and cream, finished into a rich, nutty frozen coffee experience.",
    },
  ];

  const DrinkCard = ({ drink }: { drink: { src: string; title: string; desc: string } }) => (
    <div className="group card-hover">
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
          <h3 className="font-serif text-2xl text-gold mb-3">{drink.title}</h3>
          <div className="w-8 h-[1px] bg-gold/40 mx-auto mb-4" />
          <p className="text-cream/50 leading-relaxed text-sm">{drink.desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <PageHeader
        subtitle="Handcrafted Refreshments"
        title="The Sips"
      />

      {/* ───── Intro Section ───── */}
      <section className="py-16 md:py-20 marble-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
            Not Your Average Slush
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            Crafted for Flavor, Texture & Beauty
          </h2>
          <div className="gold-separator mx-auto mb-8" />
          <p className="text-charcoal/70 leading-relaxed text-lg mb-12">
            Our frozen drinks aren&apos;t your average slushies. Each one is carefully crafted
            for the perfect texture, balanced sweetness, and bold flavor. Made with premium
            ingredients, fresh elements, and finished with beautiful garnishes, they&apos;re
            designed to taste as good as they look.
          </p>

          {/* Info Callouts */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="border border-gold/20 p-6 bg-white/60">
              <p className="font-serif text-gold text-lg mb-2">Premium Ingredients</p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                All drinks are made with high quality ingredients — no high fructose corn
                syrup and no artificial sweeteners.
              </p>
            </div>
            <div className="border border-gold/20 p-6 bg-white/60">
              <p className="font-serif text-gold text-lg mb-2">Alcoholic or Not</p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Most drinks can be made nonalcoholic or alcoholic. Please note that due
                to laws, any alcohol must be purchased by the client and provided to us
                at the event.
              </p>
            </div>
            <div className="border border-gold/20 p-6 bg-white/60">
              <p className="font-serif text-gold text-lg mb-2">Dye Free Options</p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                We offer dye free options for many of our drinks. Look for the dye free
                note in each drink&apos;s description.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Signature Sips ───── */}
      <section className="py-12 md:py-16 bg-charcoal relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-3">
              Frozen &amp; Fresh
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
              Signature Sips
            </h2>
            <div className="gold-separator mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {signatureDrinks.map((drink, i) => (
              <DrinkCard key={i} drink={drink} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Coffee Sips ───── */}
      <section className="py-12 md:py-16 bg-charcoal relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-3">
              Bold &amp; Smooth
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
              Coffee Sips
            </h2>
            <div className="gold-separator mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {coffeeDrinks.map((drink, i) => (
              <DrinkCard key={i} drink={drink} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Drinks Video Section ───── */}
      <section className="py-20 md:py-28 marble-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
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
