import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

interface Progetto {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  year: string;
  client: string;
  description: string;
  services: string[];
  images: string[];
  nextProject?: string;
  prevProject?: string;
}

const progetti: Progetto[] = [
  {
    id: "scuola-media-romani",
    title: "Scuola Media F. Romani",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Vercelli",
    year: "2023",
    client: "Comune di Vercelli",
    description:
      "Progettazione architettonica e strutturale di un nuovo complesso scolastico con spazi innovativi per la didattica. L'intervento ha previsto la realizzazione di aule moderne, laboratori attrezzati e spazi comuni pensati per favorire l'interazione e l'apprendimento collaborativo. Particolare attenzione è stata dedicata all'efficienza energetica e al comfort ambientale.",
    services: [
      "Progettazione Architettonica",
      "Progettazione Strutturale",
      "Direzione Lavori",
      "Coordinamento Sicurezza",
    ],
    images: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200",
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200",
    ],
    nextProject: "villa-moderna-trino",
    prevProject: "appartamento-design",
  },
  {
    id: "villa-moderna-trino",
    title: "Villa Moderna",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Trino",
    year: "2023",
    client: "Committente Privato",
    description:
      "Progettazione di una villa contemporanea caratterizzata da linee pulite e volumi essenziali. L'abitazione si sviluppa su due livelli, con ampie vetrate che garantiscono un dialogo costante tra interno ed esterno. I materiali scelti – legno, vetro e pietra naturale – creano un'atmosfera calda e accogliente.",
    services: [
      "Progettazione Architettonica",
      "Interior Design",
      "Direzione Lavori",
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    ],
    nextProject: "palazzo-comunale",
    prevProject: "scuola-media-romani",
  },
  {
    id: "palazzo-comunale",
    title: "Palazzo Comunale",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Crescentino",
    year: "2022",
    client: "Comune di Crescentino",
    description:
      "Restauro conservativo e adeguamento funzionale del palazzo comunale storico. L'intervento ha coniugato il rispetto per l'architettura originaria con l'inserimento di tecnologie moderne per l'efficientamento energetico e l'accessibilità.",
    services: [
      "Restauro Conservativo",
      "Progettazione Impiantistica",
      "Direzione Lavori",
      "Collaudo",
    ],
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    ],
    nextProject: "residenza-privata-vercelli",
    prevProject: "villa-moderna-trino",
  },
  {
    id: "residenza-privata-vercelli",
    title: "Residenza Privata",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Vercelli",
    year: "2022",
    client: "Committente Privato",
    description:
      "Ristrutturazione completa di un appartamento in un palazzo d'epoca nel centro storico di Vercelli. Il progetto ha valorizzato gli elementi architettonici originali – soffitti decorati, pavimenti in legno – integrandoli con un design contemporaneo.",
    services: ["Progettazione Architettonica", "Interior Design", "Direzione Lavori"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
    ],
    nextProject: "asilo-nido-cervasca",
    prevProject: "palazzo-comunale",
  },
  {
    id: "asilo-nido-cervasca",
    title: "Asilo Nido Comunale",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Cervasca",
    year: "2022",
    client: "Comune di Cervasca",
    description:
      "Progettazione di un asilo nido con ambienti luminosi e accoglienti, pensati per il benessere dei bambini. La struttura è stata realizzata con materiali naturali e sostenibili, con particolare attenzione alla qualità dell'aria interna.",
    services: [
      "Progettazione Architettonica",
      "Progettazione Strutturale",
      "Analisi Energetica",
      "Direzione Lavori",
    ],
    images: [
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=1200",
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200",
    ],
    nextProject: "ristrutturazione-centro-storico",
    prevProject: "residenza-privata-vercelli",
  },
  {
    id: "ristrutturazione-centro-storico",
    title: "Ristrutturazione Centro Storico",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Rovereto",
    year: "2021",
    client: "Committente Privato",
    description:
      "Recupero di un edificio storico nel cuore del centro abitato. L'intervento ha previsto il consolidamento strutturale, il rifacimento della copertura e la riqualificazione degli spazi interni, oggi destinati a residenza e attività commerciali.",
    services: [
      "Restauro Conservativo",
      "Progettazione Strutturale",
      "Direzione Lavori",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
    ],
    nextProject: "polo-infanzia-beinette",
    prevProject: "asilo-nido-cervasca",
  },
  {
    id: "polo-infanzia-beinette",
    title: "Polo dell'Infanzia",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Beinette",
    year: "2021",
    client: "Comune di Beinette",
    description:
      "Realizzazione di un polo educativo per l'infanzia immerso nel verde, con ampi spazi esterni attrezzati per il gioco e l'apprendimento all'aperto. L'edificio è stato progettato secondo i principi della bioarchitettura.",
    services: [
      "Progettazione Architettonica",
      "Progettazione del Verde",
      "Direzione Lavori",
    ],
    images: [
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200",
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=1200",
    ],
    nextProject: "villa-campagna",
    prevProject: "ristrutturazione-centro-storico",
  },
  {
    id: "villa-campagna",
    title: "Villa in Campagna",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Livorno Ferraris",
    year: "2020",
    client: "Committente Privato",
    description:
      "Progettazione di una residenza unifamiliare immersa nella campagna vercellese. L'architettura dialoga con il paesaggio circostante attraverso ampie aperture e terrazze panoramiche. Particolare attenzione è stata dedicata all'autosufficienza energetica.",
    services: [
      "Progettazione Architettonica",
      "Analisi Energetica",
      "Interior Design",
      "Direzione Lavori",
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
    ],
    nextProject: "scuola-falcone-borsellino",
    prevProject: "polo-infanzia-beinette",
  },
  {
    id: "scuola-falcone-borsellino",
    title: "Scuola Falcone-Borsellino",
    category: "pubblica",
    categoryLabel: "Edilizia Pubblica",
    location: "Santhià",
    year: "2020",
    client: "Comune di Santhià",
    description:
      "Ristrutturazione e ampliamento dell'edificio scolastico esistente con particolare attenzione all'efficienza energetica. Il progetto ha previsto la realizzazione di una nuova palestra e di laboratori didattici.",
    services: [
      "Progettazione Architettonica",
      "Progettazione Strutturale",
      "Analisi Energetica",
      "Direzione Lavori",
      "Coordinamento Sicurezza",
    ],
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200",
    ],
    nextProject: "appartamento-design",
    prevProject: "villa-campagna",
  },
  {
    id: "appartamento-design",
    title: "Appartamento Design",
    category: "privata",
    categoryLabel: "Edilizia Privata",
    location: "Torino",
    year: "2019",
    client: "Committente Privato",
    description:
      "Progettazione integrale di un appartamento nel centro di Torino. L'intervento ha trasformato completamente gli spazi, creando ambienti fluidi e luminosi caratterizzati da arredi su misura e finiture di pregio.",
    services: ["Progettazione Architettonica", "Interior Design", "Direzione Lavori"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
    ],
    nextProject: "scuola-media-romani",
    prevProject: "scuola-falcone-borsellino",
  },
];

export async function generateStaticParams() {
  return progetti.map((progetto) => ({
    id: progetto.id,
  }));
}

export default async function ProgettoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const progetto = progetti.find((p) => p.id === id);
  const nextProject = progetti.find((p) => p.id === progetto?.nextProject);
  const prevProject = progetti.find((p) => p.id === progetto?.prevProject);

  if (!progetto) {
    notFound();
  }

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-screen">
        <Image
          src={progetto.images[0]}
          alt={progetto.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

        {/* Navigation */}
        <div className="absolute top-32 left-0 right-0 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link
              href="/progetti"
              className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
            >
              <span className="w-10 h-10 border border-white/30 group-hover:border-white/60 flex items-center justify-center transition-colors duration-300">
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
              <span className="text-sm tracking-wider hidden md:block">Tutti i progetti</span>
            </Link>

            <span className="text-white/50 text-sm tracking-widest">
              {progetto.year}
            </span>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-16">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs tracking-[0.2em] uppercase mb-6">
              {progetto.categoryLabel}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight">
              {progetto.title}
            </h1>
            <p className="text-white/60 text-lg mt-4">{progetto.location}</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <span className="text-neutral-400 text-xs tracking-[0.2em] uppercase">
                Il Progetto
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 mt-4 mb-8">
                Una visione che prende forma
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed font-light">
                {progetto.description}
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-32 space-y-10">
                <div className="border-l-2 border-neutral-200 pl-6">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    Luogo
                  </h4>
                  <p className="text-neutral-900 text-lg font-light">{progetto.location}</p>
                </div>
                <div className="border-l-2 border-neutral-200 pl-6">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    Anno
                  </h4>
                  <p className="text-neutral-900 text-lg font-light">{progetto.year}</p>
                </div>
                <div className="border-l-2 border-neutral-200 pl-6">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    Committente
                  </h4>
                  <p className="text-neutral-900 text-lg font-light">{progetto.client}</p>
                </div>
                <div className="border-l-2 border-neutral-200 pl-6">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
                    Servizi
                  </h4>
                  <ul className="space-y-2">
                    {progetto.services.map((service, index) => (
                      <li
                        key={index}
                        className="text-neutral-600 text-sm font-light flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mt-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {progetto.images.length > 1 && (
        <section className="py-16 px-6 bg-neutral-100">
          <div className="max-w-7xl mx-auto">
            <span className="text-neutral-400 text-xs tracking-[0.2em] uppercase">
              Galleria
            </span>
            <h3 className="text-2xl font-extralight text-neutral-900 mt-2 mb-12">
              Immagini del progetto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {progetto.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden group ${
                    index === 0 && progetto.images.length > 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="aspect-[16/10]">
                    <Image
                      src={image}
                      alt={`${progetto.title} - Immagine ${index + 2}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="bg-neutral-950">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Previous Project */}
          {prevProject && (
            <Link
              href={`/progetti/${prevProject.id}`}
              className="group relative h-64 md:h-80 overflow-hidden"
            >
              <Image
                src={prevProject.images[0]}
                alt={prevProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-start p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3 text-white/50 group-hover:text-white/80 transition-colors duration-300 mb-4">
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="text-xs tracking-widest uppercase">Progetto precedente</span>
                  </div>
                  <h4 className="text-white text-2xl font-light group-hover:translate-x-2 transition-transform duration-300">
                    {prevProject.title}
                  </h4>
                </div>
              </div>
            </Link>
          )}

          {/* Next Project */}
          {nextProject && (
            <Link
              href={`/progetti/${nextProject.id}`}
              className="group relative h-64 md:h-80 overflow-hidden"
            >
              <Image
                src={nextProject.images[0]}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-end p-8 md:p-12 text-right">
                <div>
                  <div className="flex items-center justify-end gap-3 text-white/50 group-hover:text-white/80 transition-colors duration-300 mb-4">
                    <span className="text-xs tracking-widest uppercase">Progetto successivo</span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white text-2xl font-light group-hover:-translate-x-2 transition-transform duration-300">
                    {nextProject.title}
                  </h4>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/progetti"
            className="inline-flex items-center gap-4 px-8 py-4 border border-neutral-200 text-neutral-900 text-sm tracking-widest uppercase hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Torna ai progetti</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
