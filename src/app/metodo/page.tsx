"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const fasi = [
  {
    numero: "01",
    titolo: "Incontro",
    descrizione:
      "Il primo passo di un percorso condiviso: un meeting preliminare per conoscersi, ascoltare le esigenze e iniziare a costruire insieme il progetto.",
    icona: "/images/metodo/incontro.png",
  },
  {
    numero: "02",
    titolo: "Rilievo",
    descrizione:
      "Sopralluogo, misurazioni e documentazione fotografica diventano la base per una restituzione grafica accurata in 2D.",
    icona: "/images/metodo/rilievo.png",
  },
  {
    numero: "03",
    titolo: "Proposte Progettuali",
    descrizione:
      "Ipotesi progettuali illustrate graficamente e accompagnate da una stima dei costi, per orientare consapevolmente le scelte.",
    icona: "/images/metodo/proposte-progettuali.png",
  },
  {
    numero: "04",
    titolo: "Design",
    descrizione:
      "Cura di ogni dettaglio, equilibrio tra forma e funzione: progettazione degli spazi interni ed esterni pensata per essere vissuta.",
    icona: "/images/metodo/design.png",
  },
  {
    numero: "05",
    titolo: "Render",
    descrizione:
      "La modellazione 3D rende il progetto tangibile, facilitando la comprensione e la condivisione della proposta.",
    icona: "/images/metodo/render.png",
  },
  {
    numero: "06",
    titolo: "Progetto Esecutivo",
    descrizione:
      "Redazione di disegni tecnici dettagliati che guidano l'esecuzione delle opere in cantiere.",
    icona: "/images/metodo/progetto-esecutivo.png",
  },
  {
    numero: "07",
    titolo: "Pratica Edilizia",
    descrizione:
      "Gestiamo ogni adempimento necessario per ottenere i titoli abilitativi, accompagnando il cliente passo dopo passo.",
    icona: "/images/metodo/pratica-edilizia.png",
  },
  {
    numero: "08",
    titolo: "Direzione Lavori",
    descrizione:
      "Coordiniamo il cantiere in tutte le sue fasi, garantendo la corretta esecuzione e il rispetto della qualità progettuale.",
    icona: "/images/metodo/direzione-lavori.png",
  },
];

export default function MetodoPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center px-6 py-32 bg-neutral-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-64 h-64 border border-white rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left - Title */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white tracking-tight">
                Il Nostro Metodo
              </h1>
            </div>

            {/* Right - Description & Stats */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-neutral-400 text-lg font-light leading-relaxed border-l-2 border-neutral-700 pl-6">
                Un percorso strutturato in 8 fasi per trasformare le tue idee in realtà costruite.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mt-8 pt-8 border-t border-neutral-800 lg:ml-6">
                <div>
                  <span className="text-4xl font-extralight text-white">8</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">
                    FASI
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-extralight text-white">1</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">
                    OBIETTIVO
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-extralight text-white">100%</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">
                    ASSISTENZA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-6 text-neutral-600 leading-relaxed font-light">
              <p>
                Lo Studio affianca i propri committenti instaurando un rapporto di fiducia
                e dialogo, trasformando il progetto in un percorso condiviso. Dall&apos;ascolto
                delle prime esigenze fino alla realizzazione finale, ogni fase viene seguita
                con attenzione, cura e responsabilità. Il processo progettuale diventa così
                un&apos;esperienza consapevole, in cui idee, desideri e competenze si intrecciano
                per dare forma a spazi capaci di durare nel tempo e di essere vissuti appieno.
              </p>
              <p>
                Nel nostro approccio progettuale, sostenibilità e innovazione non sono semplici
                parole, ma principi fondamentali. Crediamo in un&apos;architettura capace di
                dialogare con l&apos;ambiente, riducendo l&apos;impatto ecologico attraverso
                l&apos;uso consapevole di materiali naturali, riciclati o a basso impatto.
                Allo stesso tempo, integriamo tecnologie avanzate e sistemi intelligenti che
                migliorano l&apos;efficienza energetica, il comfort e la durabilità degli spazi.
                Il risultato è un&apos;architettura che non solo rispetta il presente, ma
                anticipa le esigenze del futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-neutral-400 text-xs tracking-[0.3em] uppercase">
              Il Processo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mt-3">
              Otto fasi, un percorso condiviso
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-300 -translate-x-1/2" />

            {fasi.map((fase, index) => (
              <div
                key={fase.numero}
                className={`relative mb-10 last:mb-0 transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80 + 300}ms` }}
                onMouseEnter={() => setActivePhase(fase.numero)}
                onMouseLeave={() => setActivePhase(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                  {/* Content - alternates sides */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-2 lg:pl-12" : "lg:pr-12 lg:text-right"
                    }`}
                  >
                    {/* Number and Icon Row */}
                    <div
                      className={`flex items-center gap-3 mb-2 ${
                        index % 2 === 0 ? "lg:flex-row-reverse lg:justify-start" : "justify-start"
                      }`}
                    >
                      <span
                        className={`text-4xl md:text-5xl font-extralight transition-colors duration-300 ${
                          activePhase === fase.numero
                            ? "text-neutral-900"
                            : "text-neutral-300"
                        }`}
                      >
                        {fase.numero}
                      </span>
                      <div
                        className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                          activePhase === fase.numero
                            ? "opacity-100"
                            : "opacity-60"
                        }`}
                      >
                        <Image
                          src={fase.icona}
                          alt={fase.titolo}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-light text-neutral-900 mb-2">
                      {fase.titolo}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-500 font-light leading-relaxed text-sm">
                      {fase.descrizione}
                    </p>
                  </div>

                  {/* Timeline dot - center */}
                  <div className="hidden lg:flex absolute left-1/2 top-4 -translate-x-1/2">
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        activePhase === fase.numero
                          ? "bg-neutral-900 border-neutral-900 scale-150"
                          : "bg-white border-neutral-400"
                      }`}
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className={`hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-6">
            Pronto a iniziare il tuo percorso?
          </h2>
          <p className="text-neutral-400 font-light mb-8">
            Ogni grande progetto inizia con una conversazione. Raccontaci le tue idee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 text-sm tracking-widest uppercase hover:bg-neutral-100 transition-all duration-300"
            >
              <span>Contattaci</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/progetti"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-600 text-white text-sm tracking-widest uppercase hover:border-white transition-all duration-300"
            >
              <span>Vedi i Progetti</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
