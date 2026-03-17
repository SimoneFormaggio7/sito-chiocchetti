"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-neutral-500 text-xs tracking-[0.3em] uppercase">
            Errore 404
          </span>
          <h1 className="text-8xl md:text-9xl font-extralight text-white mt-4 tracking-tight">
            404
          </h1>
          <p className="text-neutral-400 text-lg font-light mt-6 max-w-md mx-auto">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>

        <div
          className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 text-sm tracking-widest uppercase hover:bg-neutral-100 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 rotate-180"
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
            <span>Torna alla Home</span>
          </Link>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-600 text-white text-sm tracking-widest uppercase hover:border-white transition-all duration-300"
          >
            <span>Contattaci</span>
          </Link>
        </div>

        {/* Decorative Element */}
        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-px h-16 bg-gradient-to-b from-neutral-500 to-transparent mx-auto" />
        </div>
      </div>
    </main>
  );
}
