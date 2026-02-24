import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Snacks & Sips — where nostalgic Middle Eastern flavors meet luxury charcuterie and handcrafted drinks.",
  openGraph: {
    title: "About Us | Snacks & Sips",
    description:
      "Learn the story behind Snacks & Sips — where nostalgic Middle Eastern flavors meet luxury charcuterie.",
    url: "https://snacksnsips.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader subtitle="Our Story" title="Where Nostalgia" titleAccent="Meets Luxury" />

      {/* ───── Story ───── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/20 -z-0" />
              <div className="overflow-hidden">
                <Image
                  src="/images/board-with-sign.jpg"
                  alt="Snacks & Sips charcuterie board with logo"
                  width={600}
                  height={800}
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-cream/70 leading-relaxed text-lg mb-6">
                Snacks &amp; Sips was created to bring a high end, beautifully
                styled food and drink experience to every event. We specialize in
                premium charcuterie style cuisine and handcrafted frozen beverages
                made with quality ingredients, intentional detail, and refined
                presentation.
              </p>
              <p className="text-cream/70 leading-relaxed text-lg mb-6">
                With subtle Middle Eastern influence woven into select offerings,
                our menu blends tradition and creativity for a unique yet
                approachable experience. Everything we serve reflects our
                commitment to excellence, hospitality, and being a God centered
                business rooted in integrity and gratitude.
              </p>
              <p className="text-cream/70 leading-relaxed text-lg mb-10">
                From intimate gatherings to large celebrations, we focus on
                delivering luxury you can taste and presentation you won&apos;t forget.
              </p>

              <div className="flex gap-12">
                <div>
                  <span className="font-serif text-3xl text-gold">100%</span>
                  <p className="text-cream/50 text-sm mt-1 tracking-wider uppercase">
                    Handcrafted
                  </p>
                </div>
                <div>
                  <span className="font-serif text-3xl text-gold">Fresh</span>
                  <p className="text-cream/50 text-sm mt-1 tracking-wider uppercase">
                    Ingredients
                  </p>
                </div>
                <div>
                  <span className="font-serif text-3xl text-gold">Faith</span>
                  <p className="text-cream/50 text-sm mt-1 tracking-wider uppercase">
                    Centered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── The Experience ───── */}
      <section className="py-20 md:py-28 marble-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">
                The Experience
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                More Than Just
                <br />
                <span className="text-gold-dark italic">a Snack or a Sip</span>
              </h2>
              <div className="gold-separator mb-8" />
              <p className="text-charcoal/60 leading-relaxed text-lg mb-6">
                We don&apos;t just serve food — we create an experience. Our luxury
                mobile cart brings the full Snacks &amp; Sips aesthetic right to
                your event, complete with marble finishes, gold accents, and
                beautifully curated spreads.
              </p>
              <p className="text-charcoal/60 leading-relaxed text-lg">
                Perfect for weddings, corporate events, birthdays, baby showers,
                or any gathering that deserves a luxurious touch.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="overflow-hidden h-64 md:h-80">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/Cart.mov" type="video/mp4" />
                </video>
              </div>
              <div className="overflow-hidden h-64 md:h-80 mt-8">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/PinkDrink.mov" type="video/mp4" />
                </video>
              </div>
              <div className="overflow-hidden h-64 md:h-80">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/MiddleEasternBoards.mov" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Values ───── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Our Values
            </h2>
            <div className="gold-separator mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Integrity",
                desc: "We are a God centered business built on honesty, gratitude, and a genuine commitment to serving our clients well.",
              },
              {
                title: "Elegance",
                desc: "From marble and gold finishes to meticulously arranged spreads, we refine every detail to the highest standards.",
              },
              {
                title: "Quality",
                desc: "Only the freshest, hand-selected ingredients make it onto our boards. No shortcuts, no compromises.",
              },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-[1px] bg-gold mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-gold mb-4">
                  {v.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
