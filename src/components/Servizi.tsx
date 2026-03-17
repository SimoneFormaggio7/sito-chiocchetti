"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const servizi = [
  {
    title: "Progettazione Architettonica",
    description: "Concept, design e dettagli costruttivi",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Progettazione Strutturale",
    description: "Calcoli, verifiche e sicurezza sismica",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: "Ristrutturazioni",
    description: "Civili, industriali e edifici storici",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Design d'Interni",
    description: "Arredi, finiture e illuminazione",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Direzione Lavori",
    description: "Supervisione e controllo qualità",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Sicurezza",
    description: "Coordinamento e piani operativi",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Collaudi",
    description: "Statici e tecnico-amministrativi",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Urbanistica",
    description: "Pianificazione e riqualificazione",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Analisi Energetiche",
    description: "Efficienza e sostenibilità",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Servizi() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-neutral-950 py-32 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 border border-neutral-800/30 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-neutral-800/30 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <AnimatedSection>
              <span className="text-neutral-500 text-xs tracking-[0.3em] uppercase">
                Cosa facciamo
              </span>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mt-4 tracking-tight">
                I Nostri Servizi
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={200}>
            <p className="text-neutral-400 text-sm font-light max-w-md lg:text-right leading-relaxed">
              Offriamo soluzioni complete per ogni fase del processo edilizio,
              dalla progettazione alla realizzazione.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <AnimatedSection delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800/50">
            {servizi.map((servizio, index) => (
              <div
                key={index}
                className="relative bg-neutral-950 p-8 group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-950 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number */}
                  <span className="text-neutral-800 text-5xl font-extralight absolute -top-2 right-4 group-hover:text-neutral-700 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 border flex items-center justify-center mb-6 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "border-white/30 text-white"
                        : "border-neutral-700 text-neutral-500"
                    }`}
                  >
                    {servizio.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-light mb-2 transition-colors duration-500 ${
                      hoveredIndex === index ? "text-white" : "text-neutral-300"
                    }`}
                  >
                    {servizio.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm font-light transition-colors duration-500 ${
                      hoveredIndex === index
                        ? "text-neutral-400"
                        : "text-neutral-600"
                    }`}
                  >
                    {servizio.description}
                  </p>

                  {/* Hover Line */}
                  <div
                    className={`h-px bg-gradient-to-r from-white/30 to-transparent mt-6 transition-all duration-500 ${
                      hoveredIndex === index ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

    </section>
  );
}
