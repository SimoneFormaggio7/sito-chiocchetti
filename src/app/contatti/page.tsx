"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function ContattiPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Messaggio inviato! Ti contatteremo presto.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
                Contattaci
              </h1>
            </div>

            {/* Right - Description & Stats */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-neutral-400 text-lg font-light leading-relaxed border-l-2 border-neutral-700 pl-6">
                Siamo a disposizione per qualsiasi informazione o per fissare un
                appuntamento. Raccontaci il tuo progetto.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mt-8 pt-8 border-t border-neutral-800 lg:ml-6">
                <div>
                  <span className="text-4xl font-extralight text-white">24h</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">
                    RISPOSTA
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-extralight text-white">Lun-Ven</span>
                  <span className="block text-neutral-500 text-xs tracking-wider mt-1">
                    ORARI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email Card */}
            <a
              href="mailto:studio@architettochiocchetti.it"
              className={`group relative p-8 bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-neutral-400 text-xs tracking-[0.2em] uppercase">
                Email
              </span>
              <p className="text-neutral-900 font-light mt-2 group-hover:translate-x-2 transition-transform duration-300">
                studio@architettochiocchetti.it
              </p>
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neutral-200 group-hover:border-neutral-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
            </a>

            {/* Phone Card */}
            <a
              href="tel:+390161841850"
              className={`group relative p-8 bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="text-neutral-400 text-xs tracking-[0.2em] uppercase">
                Telefono
              </span>
              <p className="text-neutral-900 font-light mt-2 group-hover:translate-x-2 transition-transform duration-300">
                +39 0161 841850
              </p>
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neutral-200 group-hover:border-neutral-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
            </a>

            {/* Address Card */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Corso+Roma+67+Crescentino+Vercelli"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-neutral-400 text-xs tracking-[0.2em] uppercase">
                Indirizzo
              </span>
              <p className="text-neutral-900 font-light mt-2 group-hover:translate-x-2 transition-transform duration-300">
                Corso Roma 67
                <br />
                13044 Crescentino (VC)
              </p>
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neutral-200 group-hover:border-neutral-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
            </a>

            {/* Hours Card */}
            <div
              className={`group relative p-8 bg-neutral-50 border border-neutral-100 transition-all duration-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center mb-6 text-neutral-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-neutral-400 text-xs tracking-[0.2em] uppercase">
                Orari
              </span>
              <p className="text-neutral-900 font-light mt-2">
                Lun - Ven: 9:00 - 18:00
              </p>
              <p className="text-neutral-500 text-sm font-light mt-1">
                Sabato e Domenica: Chiuso
              </p>
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neutral-200 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className="text-neutral-400 text-xs tracking-[0.3em] uppercase">
                Scrivici
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mt-3 mb-8">
                Raccontaci il tuo progetto
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="nome"
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === "nome" || formData.nome
                        ? "-top-6 text-xs text-neutral-400"
                        : "top-3 text-neutral-500"
                    }`}
                  >
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("nome")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full py-3 bg-transparent border-b border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors text-neutral-900"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === "email" || formData.email
                          ? "-top-6 text-xs text-neutral-400"
                          : "top-3 text-neutral-500"
                      }`}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full py-3 bg-transparent border-b border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors text-neutral-900"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="telefono"
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === "telefono" || formData.telefono
                          ? "-top-6 text-xs text-neutral-400"
                          : "top-3 text-neutral-500"
                      }`}
                    >
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("telefono")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full py-3 bg-transparent border-b border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors text-neutral-900"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="messaggio"
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === "messaggio" || formData.messaggio
                        ? "-top-6 text-xs text-neutral-400"
                        : "top-3 text-neutral-500"
                    }`}
                  >
                    Messaggio *
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    required
                    rows={4}
                    value={formData.messaggio}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("messaggio")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full py-3 bg-transparent border-b border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none text-neutral-900"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-sm tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300"
                >
                  <span>Invia Messaggio</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                </button>
              </form>
            </div>

            {/* Map */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <span className="text-neutral-400 text-xs tracking-[0.3em] uppercase">
                Dove Siamo
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mt-3 mb-8">
                Vieni a trovarci
              </h2>
              <div className="relative aspect-[16/9] lg:aspect-[2/1] bg-neutral-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.8234567890123!2d8.0847!3d45.1831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDEwJzU5LjIiTiA4wrAwNScwNC45IkU!5e0!3m2!1sit!2sit!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
