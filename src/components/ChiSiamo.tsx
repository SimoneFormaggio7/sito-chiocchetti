"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function ChiSiamo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-50 py-32 px-6 overflow-hidden">

      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.03]">
          <Image
            src="/images/logo.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-neutral-300 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <span className="text-neutral-400 text-sm tracking-[0.3em] uppercase">
            Chi siamo
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-neutral-900 mt-6 mb-8">
            STUDIO CHIOCCHETTI
            <span className="block text-neutral-400">ARCHITETTURA</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="w-16 h-px bg-neutral-900 mx-auto mb-10" />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto font-light">
            Dal 1989 svolge servizi di progettazione architettonica ed urbanistica
            per clienti pubblici e privati.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <Link
            href="/studio"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 border border-neutral-900 text-neutral-900 text-sm tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all duration-500 group"
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
