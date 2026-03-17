"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const team = [
  {
    id: "maurizio",
    nome: "Maurizio",
    cognome: "Chiocchetti",
    ruolo: "Fondatore",
    foto: "/images/maurizio-chiocchetti.jpg",
    cv: "/documents/cv-maurizio-chiocchetti.pdf",
    credenziali: [
      "Laurea in Architettura",
      "Politecnico di Torino",
      "",
      "Iscritto dal 1989",
      "Ordine degli Architetti PPC",
      "Provincia di Vercelli, n. 288",
    ],
  },
  {
    id: "federico",
    nome: "Federico",
    cognome: "Chiocchetti",
    ruolo: "Architetto",
    foto: "/images/federico-chiocchetti.jpg", // Placeholder - sostituire con la foto reale
    cv: "/documents/cv-federico-chiocchetti.pdf",
    credenziali: [
      "Laurea in Architettura",
      "Politecnico di Torino",
      "",
      "Iscritto dal 2023",
      "Ordine degli Architetti PPC",
      "Provincia di Vercelli, n. 681",
    ],
  },
];

export default function StudioPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

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
                Lo Studio Chiocchetti
              </h1>
            </div>

            {/* Right - Description & Stats */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-neutral-400 text-lg font-light leading-relaxed border-l-2 border-neutral-700 pl-6">
                Dal 1989 trasformiamo visioni in spazi costruiti, con passione,
                competenza e dedizione al dettaglio.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mt-8 pt-8 border-t border-neutral-800 lg:ml-6">
                <div>
                  <span className="text-4xl font-extralight text-white">1989</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">
                    FONDAZIONE
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-extralight text-white">35+</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">
                    ANNI
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-extralight text-white">2</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">
                    GENERAZIONI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storia Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-neutral-400 text-xs tracking-[0.3em] uppercase">
              La Nostra Storia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mt-3 mb-12">
              Un percorso lungo oltre trent&apos;anni
            </h2>

            <div className="space-y-8 text-neutral-600 leading-relaxed font-light text-lg">
              <p>
                Lo <strong className="font-medium text-neutral-900">Studio Chiocchetti</strong>,
                fondato nel 1989 dall&apos;Architetto Maurizio Chiocchetti, opera in ambiti che
                spaziano dall&apos;edilizia residenziale, commerciale ed industriale alla
                progettazione di spazi pubblici, strutture scolastiche, impianti sportivi
                e luoghi dedicati alla collettività.
              </p>
              <p>
                Lo studio si occupa, inoltre, di pianificazione urbanistica e rigenerazione
                urbana, affrontando il progetto come strumento di trasformazione e
                valorizzazione del territorio.
              </p>
              <p>
                Accanto alla progettazione ex-novo, lo Studio sviluppa abitualmente
                interventi sull&apos;esistente, occupandosi di ristrutturazioni, restauri
                e progetti di architettura d&apos;interni, con un&apos;attenzione costante
                al dialogo tra memoria, funzione e contemporaneità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuità Section */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-neutral-400 text-xs tracking-[0.3em] uppercase">
              Continuità
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mt-3 mb-12">
              Due generazioni, una visione
            </h2>

            <div className="space-y-8 text-neutral-600 leading-relaxed font-light text-lg">
              <p>
                Dal 2016 Federico Chiocchetti si avvicina al mondo dell&apos;architettura
                attraverso il percorso formativo presso il Politecnico di Torino, un cammino
                che affonda le proprie radici nelle prime e curiose esplorazioni dei cantieri
                del padre fin dalla giovane età.
              </p>
              <p>
                Dal 2023, con il conseguimento dell&apos;abilitazione professionale,
                l&apos;Architetto Federico Chiocchetti avvia una collaborazione con lo Studio,
                fondata sulla condivisione di passioni, visioni e progetti tra padre e figlio:
                un dialogo professionale orientato alla crescita continua, alla ricerca della
                qualità e al piacere di progettare insieme.
              </p>
              <p>
                Da anni lo studio collabora con professionisti del settore, dando vita a
                team di lavoro multidisciplinari in grado di fornire un supporto tecnico
                completo in ogni fase del progetto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-neutral-500 text-xs tracking-[0.3em] uppercase">
              Il Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mt-3">
              I Professionisti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {team.map((member, index) => (
              <div
                key={member.id}
                className={`transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="relative">
                  {/* Card Container */}
                  <div
                    className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
                    onMouseEnter={() => setHoveredMember(member.id)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    {/* Photo */}
                    {member.id === "maurizio" ? (
                      <Image
                        src={member.foto}
                        alt={`Arch. ${member.nome} ${member.cognome}`}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      // Placeholder per Federico - sostituire quando disponibile la foto
                      <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                        <svg
                          className="w-32 h-32 text-neutral-700"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}

                    {/* Vertical Name */}
                    <div className="absolute left-0 top-0 bottom-0 flex items-center">
                      <span
                        className="text-white text-sm tracking-[0.3em] uppercase font-light"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          paddingLeft: "1rem",
                        }}
                      >
                        {member.nome} {member.cognome}
                      </span>
                    </div>

                    {/* Hover Overlay with Credentials */}
                    <div
                      className={`absolute inset-0 bg-neutral-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 transition-all duration-500 ${
                        hoveredMember === member.id
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="text-center">
                        {member.credenziali.map((line, i) => (
                          <p
                            key={i}
                            className={`text-white font-light ${
                              line === "" ? "h-4" : "text-sm leading-relaxed"
                            } ${
                              i === 0 || i === 3
                                ? "font-medium"
                                : "text-neutral-300"
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
                  </div>

                  {/* Info Below */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-light text-white">
                      Arch. {member.nome} {member.cognome}
                    </h3>
                    <span className="text-neutral-500 text-xs tracking-[0.2em] uppercase mt-1 block">
                      {member.ruolo}
                    </span>

                    {/* CV Download */}
                    <a
                      href={member.cv}
                      download
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2 border border-neutral-700 text-neutral-400 text-xs tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300"
                    >
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
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>CV</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 text-neutral-200 mx-auto mb-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-extralight text-neutral-900 leading-relaxed mb-8">
            Un dialogo professionale orientato alla crescita continua,
            alla ricerca della qualità e al piacere di progettare insieme.
          </blockquote>
          <p className="text-neutral-400 text-sm tracking-widest uppercase">
            La Nostra Filosofia
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="text-neutral-500 font-light mb-8">
            Raccontaci la tua idea. Insieme possiamo trasformarla in realtà.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-sm tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300"
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
        </div>
      </section>

      <Footer />
    </>
  );
}
