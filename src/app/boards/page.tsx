import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function BoardsPage() {
  const boards = [
    {
      src: "/images/charcuterie-board-closeup.jpg",
      title: "The Classic",
      desc: "Artisan cheeses, cured meats, fresh fruits, honey, nuts & handmade crackers — all beautifully arranged on a rustic wooden board.",
      items: ["Brie & Gouda", "Salami & Prosciutto", "Fresh Berries", "Honey Jar", "Mixed Nuts", "Artisan Crackers"],
    },
    {
      src: "/images/middleeasterboards.png",
      title: "The Middle Eastern",
      desc: "A nostalgic spread inspired by Arab hospitality — grape leaves, hummus, labneh with za'atar, olives, pita bread & pickled turnips.",
      items: ["Grape Leaves", "Hummus & Labneh", "Za'atar", "Olives & Pickles", "Warm Pita", "Breadsticks"],
    },
    {
      src: "/images/valentineboard.png",
      title: "The Seasonal",
      desc: "Themed boards crafted for every occasion — Valentine's Day, Ramadan, holidays & celebrations, each with unique seasonal touches.",
      items: ["Seasonal Fruits", "Themed Sweets", "Chocolate Truffles", "Decorated Cookies", "Specialty Nuts", "Candy Hearts"],
    },
  ];

  return (
    <>
      <PageHeader subtitle="Curated With Care" title="The Boards" />

      {/* ───── Board Cards ───── */}
      <section className="py-20 md:py-28 marble-bg">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {boards.map((board, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={board.src}
                  alt={board.title}
                  width={600}
                  height={500}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="font-serif text-4xl text-charcoal mb-4">
                  {board.title}
                </h2>
                <div className="w-12 h-[1px] bg-gold mb-6" />
                <p className="text-charcoal/60 leading-relaxed text-lg mb-8">
                  {board.desc}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {board.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 text-charcoal/70"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Three Boards Lineup ───── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                For Every Occasion
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                Custom Boards
                <br />
                <span className="text-gold italic">Made for You</span>
              </h2>
              <div className="gold-separator mb-6" />
              <p className="text-cream/70 leading-relaxed text-lg mb-8">
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
