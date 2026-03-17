"use client";

import AnimatedSection from "./AnimatedSection";

export default function ContattiHome() {
  const indirizzo = "Corso Roma 67, Crescentino, Vercelli";
  const indirizzoEncoded = encodeURIComponent(indirizzo);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${indirizzoEncoded}`;

  return (
    <section className="relative py-32 bg-neutral-950 overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-px h-1/3 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
      <div className="absolute top-1/3 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedSection>
            <span className="text-neutral-500 text-sm tracking-[0.3em] uppercase">
              Parliamo del tuo progetto
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mt-4 tracking-tight">
              Contatti
            </h2>
          </AnimatedSection>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <AnimatedSection delay={200}>
              <a
                href="mailto:studio@architettochiocchetti.it"
                className="group block p-8 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:bg-neutral-900/50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-neutral-700 group-hover:border-white/30 transition-colors duration-500">
                    <svg
                      className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs tracking-[0.2em] uppercase block mb-2">
                      Email
                    </span>
                    <span className="text-white text-sm md:text-xl font-light group-hover:text-neutral-300 transition-colors duration-500">
                      studio@architettochiocchetti.it
                    </span>
                  </div>
                </div>
              </a>
            </AnimatedSection>

            {/* Phone */}
            <AnimatedSection delay={300}>
              <a
                href="tel:+390161841850"
                className="group block p-8 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:bg-neutral-900/50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-neutral-700 group-hover:border-white/30 transition-colors duration-500">
                    <svg
                      className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs tracking-[0.2em] uppercase block mb-2">
                      Telefono
                    </span>
                    <span className="text-white text-lg md:text-xl font-light group-hover:text-neutral-300 transition-colors duration-500">
                      0161 841850
                    </span>
                  </div>
                </div>
              </a>
            </AnimatedSection>

            {/* Address */}
            <AnimatedSection delay={400}>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:bg-neutral-900/50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-neutral-700 group-hover:border-white/30 transition-colors duration-500">
                    <svg
                      className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs tracking-[0.2em] uppercase block mb-2">
                      Indirizzo
                    </span>
                    <span className="text-white text-lg md:text-xl font-light group-hover:text-neutral-300 transition-colors duration-500">
                      Corso Roma 67, Crescentino (VC)
                    </span>
                    <span className="text-neutral-500 text-sm block mt-2 group-hover:text-neutral-400 transition-colors duration-500">
                      Clicca per le indicazioni
                    </span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          </div>

          {/* Right Column - Map */}
          <AnimatedSection delay={500}>
            <div className="h-full min-h-[400px] lg:min-h-full border border-neutral-800 overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.8!2d8.0496!3d45.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787a8a9b0c2f8e7%3A0x1234567890abcdef!2sCorso%20Roma%2067%2C%20Crescentino%20VC!5e0!3m2!1sit!2sit!4v1699999999999!5m2!1sit!2sit`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Chiocchetti Architettura - Mappa"
                className="min-h-[400px] lg:min-h-full"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection delay={600}>
          <div className="text-center mt-16">
            <p className="text-neutral-400 text-lg font-light">
              Hai un progetto in mente?{" "}
              <a
                href="mailto:studio@architettochiocchetti.it"
                className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors duration-300"
              >
                Scrivici
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
