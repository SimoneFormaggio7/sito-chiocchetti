"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')",
        }}
      >
        {/* Overlay scuro per migliorare la leggibilità */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Quote - Centered */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <blockquote
          className={`text-white text-center max-w-2xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed">
            &ldquo;L&apos;Architettura comincia dove due pietre vengono
            sovrapposte accuratamente.&rdquo;
          </p>
          <footer className="mt-6 text-sm md:text-base tracking-wider">
            <span className="font-medium">Ludwig Mies van der Rohe</span>
            <span className="mx-2">|</span>
            <span className="text-white/80">ARCHITETTO</span>
          </footer>
        </blockquote>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-neutral-900 text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-neutral-900 to-transparent" />
      </div>

      {/* Bottom Gradient Fade - smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-50 via-neutral-50/60 to-transparent pointer-events-none" />
    </section>
  );
}
