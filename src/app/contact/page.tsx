import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Let's Create Something Special"
        title="Transform"
        titleAccent="Your Event"
      />

      {/* ───── Contact Info ───── */}
      <section className="py-20 md:py-28 marble-bg">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-charcoal/60 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            Ready to bring the Snacks &amp; Sips experience to your next
            gathering? Whether it&apos;s an intimate dinner or a grand celebration, we
            tailor every board and every sip to your occasion.
          </p>

          {/* ───── Inquiry Form ───── */}
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl p-10 md:p-14">
            <h3 className="font-serif text-3xl text-charcoal text-center mb-2">
              Send Us a Message
            </h3>
            <div className="gold-separator mx-auto mb-10" />

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal/60 text-sm tracking-wider uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-charcoal/60 text-sm tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal focus:border-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal/60 text-sm tracking-wider uppercase mb-2">
                  Event Type
                </label>
                <select className="w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal focus:border-gold focus:outline-none transition-colors">
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="ramadan">Ramadan Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-charcoal/60 text-sm tracking-wider uppercase mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-charcoal/60 text-sm tracking-wider uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-charcoal text-gold px-12 py-4 tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-500 border border-charcoal hover:border-gold"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* ───── Contact Info Box ───── */}
          <div className="max-w-2xl mx-auto mt-10 bg-white/60 backdrop-blur-sm shadow-lg p-10 md:p-12">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-gold-dark mb-3">
                  <svg className="w-7 h-7 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-1">Email</h3>
                <p className="text-charcoal/50 text-sm">hello@snacksandsips.com</p>
              </div>
              <div className="text-center">
                <div className="text-gold-dark mb-3">
                  <svg className="w-7 h-7 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-1">Phone</h3>
                <p className="text-charcoal/50 text-sm">(555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="text-gold-dark mb-3">
                  <svg className="w-7 h-7 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-1">Based In</h3>
                <p className="text-charcoal/50 text-sm">Available for events</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-16 text-center">
            <p className="text-charcoal/40 text-sm tracking-wider uppercase mb-4">
              Follow Us
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-charcoal/30 hover:text-gold-dark transition-colors duration-300"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-charcoal/30 hover:text-gold-dark transition-colors duration-300"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
