"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

type Categoria = "tutti" | "privata" | "pubblica";

interface Progetto {
  id: string;
  title: string;
  category: Categoria;
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  size: "normal" | "large" | "tall";
}

const progetti: Progetto[] = [
  {
    id: "scuola-media-romani",
    title: "Scuola Media F. Romani",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Vercelli",
    year: "2023",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    size: "large",
  },
  {
    id: "villa-moderna-trino",
    title: "Villa Moderna",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Trino",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
    size: "normal",
  },
  {
    id: "palazzo-comunale",
    title: "Palazzo Comunale",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Crescentino",
    year: "2022",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800",
    size: "tall",
  },
  {
    id: "residenza-privata-vercelli",
    title: "Residenza Privata",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Vercelli",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    size: "normal",
  },
  {
    id: "asilo-nido-cervasca",
    title: "Asilo Nido Comunale",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Cervasca",
    year: "2022",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=800",
    size: "normal",
  },
  {
    id: "ristrutturazione-centro-storico",
    title: "Ristrutturazione Centro Storico",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Rovereto",
    year: "2021",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    size: "large",
  },
  {
    id: "polo-infanzia-beinette",
    title: "Polo dell'Infanzia",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Beinette",
    year: "2021",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800",
    size: "normal",
  },
  {
    id: "villa-campagna",
    title: "Villa in Campagna",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Livorno Ferraris",
    year: "2020",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800",
    size: "tall",
  },
  {
    id: "scuola-falcone-borsellino",
    title: "Scuola Falcone-Borsellino",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Santhià",
    year: "2020",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800",
    size: "normal",
  },
  {
    id: "appartamento-design",
    title: "Appartamento Design",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Torino",
    year: "2019",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
    size: "normal",
  },
];

const filters: { label: string; value: Categoria }[] = [
  { label: "Tutti", value: "tutti" },
  { label: "Edilizia Privata", value: "privata" },
  { label: "Edilizia Pubblica", value: "pubblica" },
];

export default function ProgettiPage() {
  const [activeFilter, setActiveFilter] = useState<Categoria>("tutti");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredProjects =
    activeFilter === "tutti"
      ? progetti
      : progetti.filter((p) => p.category === activeFilter);

  const countByCategory = {
    tutti: progetti.length,
    privata: progetti.filter((p) => p.category === "privata").length,
    pubblica: progetti.filter((p) => p.category === "pubblica").length,
  };

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
                I Nostri Progetti
              </h1>
            </div>

            {/* Right - Description & Stats */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-neutral-400 text-lg font-light leading-relaxed border-l-2 border-neutral-700 pl-6">
                Oltre 30 anni di esperienza tradotti in architetture che durano nel tempo.
                Scopri una selezione dei nostri lavori più significativi.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mt-8 pt-8 border-t border-neutral-800 lg:ml-6">
                <div>
                  <span className="text-4xl font-extralight text-white">{progetti.length}</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">PROGETTI</span>
                </div>
                <div>
                  <span className="text-4xl font-extralight text-white">35+</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">ANNI</span>
                </div>
                <div>
                  <span className="text-4xl font-extralight text-white">2</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">CATEGORIE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-1">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`relative px-5 py-2.5 text-xs tracking-[0.1em] transition-all duration-300 ${
                    activeFilter === filter.value
                      ? "text-neutral-900"
                      : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {filter.label}
                  <span className="ml-2 text-[10px] text-neutral-300">
                    ({countByCategory[filter.value]})
                  </span>
                  {activeFilter === filter.value && (
                    <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-neutral-900" />
                  )}
                </button>
              ))}
            </div>

            <span className="text-neutral-400 text-xs tracking-wider hidden md:block">
              {filteredProjects.length} progetti
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 bg-neutral-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px] md:auto-rows-[320px]">
            {filteredProjects.map((progetto, index) => (
              <Link
                key={progetto.id}
                href={`/progetti/${progetto.id}`}
                className={`group relative overflow-hidden bg-neutral-200 cursor-pointer ${
                  progetto.size === "large"
                    ? "md:col-span-2"
                    : progetto.size === "tall"
                    ? "md:row-span-2"
                    : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredProject(progetto.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <Image
                  src={progetto.image}
                  alt={progetto.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredProject === progetto.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Gradient Overlay (always visible) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Category Tag */}
                  <span
                    className={`inline-block self-start px-3 py-1 text-[10px] tracking-[0.15em] uppercase mb-3 transition-all duration-500 ${
                      hoveredProject === progetto.id
                        ? "bg-white text-neutral-900"
                        : "bg-white/20 text-white backdrop-blur-sm"
                    }`}
                  >
                    {progetto.categoryLabel}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-white text-xl md:text-2xl font-light transition-all duration-500 ${
                      hoveredProject === progetto.id ? "translate-x-2" : ""
                    }`}
                  >
                    {progetto.title}
                  </h3>

                  {/* Meta */}
                  <div
                    className={`flex items-center gap-3 mt-2 transition-all duration-500 ${
                      hoveredProject === progetto.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className="text-white/70 text-sm">{progetto.location}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                    <span className="text-white/70 text-sm">{progetto.year}</span>
                  </div>

                  {/* View Project Link */}
                  <div
                    className={`flex items-center gap-2 mt-4 transition-all duration-500 ${
                      hoveredProject === progetto.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className="text-white text-xs tracking-widest uppercase">
                      Scopri il progetto
                    </span>
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                </div>

                {/* Corner Decoration */}
                <div
                  className={`absolute top-4 right-4 w-8 h-8 border-t border-r transition-all duration-500 ${
                    hoveredProject === progetto.id
                      ? "border-white w-12 h-12"
                      : "border-white/30"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 border border-neutral-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-neutral-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p className="text-neutral-400 text-lg">
                Nessun progetto trovato per questa categoria.
              </p>
              <button
                onClick={() => setActiveFilter("tutti")}
                className="mt-4 text-neutral-900 text-sm underline underline-offset-4"
              >
                Mostra tutti i progetti
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
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
