import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Progetti", href: "/progetti" },
  { name: "Studio", href: "/studio" },
  { name: "Metodo", href: "/metodo" },
  { name: "Contatti", href: "/contatti" },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 overflow-hidden">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Upper Section */}
        <div className="py-20 border-b border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 text-center md:text-left">
            {/* Logo & Description */}
            <div className="lg:col-span-5">
              <Image
                src="/images/logo.png"
                alt="Studio Chiocchetti Architettura"
                width={160}
                height={60}
                className="h-12 w-auto brightness-0 invert opacity-90 mx-auto md:mx-0"
              />
              <p className="mt-8 text-neutral-400 text-sm leading-relaxed max-w-sm font-light mx-auto md:mx-0">
                Dal 1989, trasformiamo visioni in spazi costruiti.
                Progettiamo architetture che durano nel tempo,
                unendo funzionalità, estetica e sostenibilità.
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-white text-sm font-medium tracking-[0.1em] mb-6">
                ESPLORA
              </h4>
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-light"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-white text-sm font-medium tracking-[0.1em] mb-6">
                CONTATTI
              </h4>
              <address className="not-italic space-y-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Corso+Roma+67+Crescentino+Vercelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-light"
                >
                  Corso Roma 67
                  <br />
                  13044 Crescentino (VC)
                </a>
                <a
                  href="tel:+390161841850"
                  className="block text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-light"
                >
                  +39 0161 841850
                </a>
                <a
                  href="mailto:studio@architettochiocchetti.it"
                  className="block text-neutral-400 hover:text-white transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  studio@architettochiocchetti.it
                </a>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-neutral-600 text-xs tracking-wider font-light">
            © {new Date().getFullYear()} Studio Chiocchetti Architettura
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-neutral-600 hover:text-neutral-400 text-xs tracking-wider font-light transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-700 text-xs">|</span>
            <Link
              href="/cookie-policy"
              className="text-neutral-600 hover:text-neutral-400 text-xs tracking-wider font-light transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
          <p className="text-neutral-700 text-xs tracking-wider font-light">
            P.IVA 02644220226
          </p>
        </div>
      </div>

    </footer>
  );
}
