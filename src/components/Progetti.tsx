"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const progetti = [
  {
    id: 1,
    title: "Scuola Media F. Romani",
    description: "Progettazione architettonica e strutturale di un nuovo complesso scolastico con spazi innovativi per la didattica.",
    category: "Pubblico",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
  },
  {
    id: 2,
    title: "Scuola Falcone-Borsellino",
    description: "Ristrutturazione e ampliamento dell'edificio scolastico esistente con particolare attenzione all'efficienza energetica.",
    category: "Pubblico",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800",
  },
  {
    id: 3,
    title: "Polo dell'Infanzia Beinette",
    description: "Realizzazione di un polo educativo per l'infanzia immerso nel verde, con ampi spazi esterni.",
    category: "Pubblico",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800",
  },
  {
    id: 4,
    title: "Asilo Nido Comunale Cervasca",
    description: "Progettazione di un asilo nido con ambienti luminosi e accoglienti, pensati per il benessere dei bambini.",
    category: "Pubblico",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=800",
  },
  {
    id: 5,
    title: "Residenza Privata",
    description: "Villa contemporanea con design minimalista e integrazione armoniosa con il paesaggio circostante.",
    category: "Residenziale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
  },
];

export default function Progetti() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getCardWidth = () => {
    if (!sliderRef.current) return 300;
    const width = sliderRef.current.offsetWidth;
    if (width < 768) return width * 0.75;
    return width / 3.5;
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = getCardWidth();
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const cardWidth = getCardWidth();
      const newIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const nextSlide = () => {
    const newIndex = Math.min(currentIndex + 1, progetti.length - 3);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  return (
    <section className="relative py-32 bg-neutral-50 overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-px h-24 bg-gradient-to-b from-neutral-300 to-transparent" />
      <div className="absolute bottom-1/4 right-1/4 w-px h-24 bg-gradient-to-t from-neutral-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-end justify-between">
          <div>
            <AnimatedSection>
              <span className="text-neutral-400 text-sm tracking-[0.3em] uppercase">
                Portfolio
              </span>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mt-4 tracking-tight">
                Alcuni dei nostri progetti
              </h2>
            </AnimatedSection>
          </div>

          {/* Navigation Arrows */}
          <AnimatedSection delay={200}>
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:border-neutral-900 hover:text-white transition-all duration-300"
                aria-label="Precedente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:border-neutral-900 hover:text-white transition-all duration-300"
                aria-label="Successivo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Slider */}
      <AnimatedSection delay={300}>
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {progetti.map((progetto) => (
            <div
              key={progetto.id}
              className="group relative flex-shrink-0 w-[280px] md:w-[320px] lg:w-[380px] aspect-[3/4] snap-start cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <Image
                src={progetto.image}
                alt={progetto.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default State - Title at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl md:text-2xl font-light leading-tight">
                    {progetto.title}
                  </h3>
                </div>
              </div>

              {/* Hover State - Full overlay with description */}
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3">
                  {progetto.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-light mb-4">
                  {progetto.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {progetto.description}
                </p>
                <div className="flex items-center text-white text-sm font-light tracking-wider">
                  <span>Scopri</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Dots Navigation */}
      <div className="flex justify-center items-center gap-3 mt-12">
        {progetti.slice(0, progetti.length - 2).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-neutral-900 w-8"
                : "bg-neutral-300 w-2 hover:bg-neutral-400"
            }`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>

      {/* View All Link */}
      <AnimatedSection delay={400}>
        <div className="text-center mt-12">
          <Link
            href="/progetti"
            className="inline-flex items-center gap-3 text-neutral-900 text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300"
          >
            <span>tutti i progetti</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>

    </section>
  );
}
