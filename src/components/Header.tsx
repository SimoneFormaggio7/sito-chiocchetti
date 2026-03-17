"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "PROGETTI", href: "/progetti" },
  { name: "STUDIO", href: "/studio" },
  { name: "METODO", href: "/metodo" },
  { name: "CONTATTI", href: "/contatti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logo.png"
                alt="Studio Chiocchetti Architettura"
                width={100}
                height={36}
                className={`h-9 w-auto transition-all duration-500 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2 text-xs font-medium tracking-[0.15em] transition-all duration-300 group ${
                    scrolled ? "text-neutral-900" : "text-white"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-5 right-5 h-px transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    scrolled ? "bg-neutral-900" : "bg-white"
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden relative z-10 w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
                mobileMenuOpen ? "text-neutral-900" : scrolled ? "text-neutral-900" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block w-full h-[1.5px] bg-current transform transition-all duration-300 origin-center ${
                    mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                />
                <span
                  className={`block w-full h-[1.5px] bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block w-full h-[1.5px] bg-current transform transition-all duration-300 origin-center ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <nav className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0"
        }`}>
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-2xl font-extralight tracking-[0.2em] text-neutral-900 py-4 transition-all duration-500 hover:text-neutral-500 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 75}ms` : "0ms" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
