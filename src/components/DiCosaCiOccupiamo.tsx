"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function DiCosaCiOccupiamo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white py-32 px-6 overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-extralight text-neutral-100 tracking-tighter whitespace-nowrap">
          METODO
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-neutral-400 text-sm tracking-[0.3em] uppercase">
            Il nostro approccio
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-neutral-900 mt-6 mb-8">
            DI COSA CI OCCUPIAMO
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="w-16 h-px bg-neutral-900 mx-auto mb-10" />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto font-light text-justify">
            Diamo forma alle idee, seguendo ogni progetto dal concept iniziale
            fino alla definizione dei dettagli costruttivi e dei materiali che lo
            rendono unico.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <Link
            href="/metodo"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-neutral-900 text-white text-sm tracking-widest uppercase hover:bg-neutral-800 transition-all duration-500 group"
          >
            <span>scopri di più</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>

    </section>
  );
}
