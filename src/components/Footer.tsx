import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="font-serif text-gold tracking-[0.2em] text-lg text-center md:text-left">
            SNACKS <span className="text-sm">&amp;</span> SIPS
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Boards", href: "/boards" },
              { label: "Sips", href: "/sips" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/40 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright + Socials */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-cream/30 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} Snacks &amp; Sips
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
