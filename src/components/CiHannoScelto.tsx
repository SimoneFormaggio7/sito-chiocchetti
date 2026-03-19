"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const loghi = [
  { name: "Provincia di Vercelli", file: "Provincia_di_Vercelli-Stemma.svg.png" },
  { name: "Enel Green Power", file: "enel-green-power-logo.png.resize.282.206.center.center.png" },
  { name: "Versalis", file: "logoVersalis.jpg" },
  { name: "Comune di Crescentino", file: "Crescentino-Stemma.webp" },
  { name: "Comune di Santhià", file: "santhia-stemma.png" },
  { name: "Comune di Brusasco", file: "brusasco-stemma.png" },
  { name: "Comune di Trino", file: "Trino-Stemma.webp" },
  { name: "Comune di Asigliano Vercellese", file: "Asigliano_Vercellese-Stemma.png" },
  { name: "Comune di Balocco", file: "Balocco-Stemma.png" },
  { name: "Comune di Carisio", file: "Carisio-Stemma.png" },
  { name: "Comune di Costanzana", file: "Costanzana-Stemma.png" },
  { name: "Comune di Crova", file: "Crova-Stemma.png" },
  { name: "Comune di Desana", file: "Desana-Stemma.png" },
  { name: "Comune di Fontanetto Po", file: "Fontanetto_Po-Stemma.png" },
  { name: "Comune di La Cassa", file: "La_Cassa-Stemma.png" },
  { name: "Comune di Lignana", file: "Lignana-Stemma.png" },
  { name: "Comune di Maggiora", file: "Maggiora-Stemma.png" },
  { name: "Comune di Palazzolo Vercellese", file: "Palazzolo_Vercellese-Stemma.png" },
  { name: "Comune di Pertengo", file: "Pertengo-Stemma.png" },
  { name: "Comune di Pezzana", file: "Pezzana-Stemma.png" },
  { name: "Comune di Ronsecco", file: "Ronsecco-Stemma.png" },
  { name: "Comune di Bassignana", file: "stemma-bassignana.png" },
  { name: "Comune di Casanova Elvo", file: "stemma-casanova-elvo.png" },
  { name: "Comune di Lamporo", file: "stemma-lamporo.png" },
  { name: "Comune di Moncestino", file: "stemma-moncestino.png" },
  { name: "Comune di Olcenengo", file: "stemma-olcenengo.png" },
  { name: "Comune di Quarona", file: "stemma-quarona.png" },
  { name: "Comune di Quattordio", file: "stemma-quattordio.jpg" },
  { name: "Comune di Rivarolo", file: "stemma-rivarolo.png" },
  { name: "Comune di San Germano", file: "stemma-san-germano.png" },
  { name: "Comune di San Giusto Canavese", file: "stemma-sangiusto-canavese.png" },
  { name: "Comune di Rive", file: "stemmacomunedirive.png" },
  { name: "Comune di Villamiroglio", file: "Villamiroglio-Stemma.png" },
  { name: "Comune di Viverone", file: "Viverone-Stemma.png" },
];

export default function CiHannoScelto() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-px h-1/3 bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />
      <div className="absolute top-1/3 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <AnimatedSection>
              <span className="text-neutral-400 text-sm tracking-[0.3em] uppercase">
                I nostri clienti
              </span>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mt-4 tracking-tight">
                Ci hanno scelto
              </h2>
            </AnimatedSection>
          </div>

          {/* Navigation Arrows */}
          <AnimatedSection delay={200}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                  canScrollLeft
                    ? "border-neutral-300 text-neutral-900 hover:bg-neutral-900 hover:border-neutral-900 hover:text-white"
                    : "border-neutral-200 text-neutral-300 cursor-not-allowed"
                }`}
                aria-label="Precedente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                  canScrollRight
                    ? "border-neutral-300 text-neutral-900 hover:bg-neutral-900 hover:border-neutral-900 hover:text-white"
                    : "border-neutral-200 text-neutral-300 cursor-not-allowed"
                }`}
                aria-label="Successivo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Logos Carousel */}
        <AnimatedSection delay={300}>
          <div className="relative">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-12 overflow-x-auto scrollbar-hide py-8 px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {loghi.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center justify-center group"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 relative flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={`/images/loghi-enti/${logo.file}`}
                      alt={logo.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-4 text-xs text-neutral-400 text-center max-w-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Counter */}
        <AnimatedSection delay={400}>
          <div className="text-center mt-12">
            <span className="text-neutral-400 text-sm tracking-wider">
              Questi sono solo alcuni degli enti e delle aziende che ci hanno affidato i loro progetti
            </span>
          </div>
        </AnimatedSection>
      </div>

    </section>
  );
}
