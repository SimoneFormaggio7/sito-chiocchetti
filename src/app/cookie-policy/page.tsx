"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-neutral-950 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p
              className={`text-sm tracking-[0.2em] text-neutral-400 mb-4 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              INFORMATIVA SUI COOKIE
            </p>
            <h1
              className={`text-4xl md:text-5xl font-extralight transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Cookie Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div
            className={`max-w-4xl mx-auto px-6 lg:px-8 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="prose prose-neutral max-w-none prose-headings:font-light prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:font-light prose-p:leading-relaxed prose-li:text-neutral-600 prose-li:font-light prose-a:text-neutral-900 prose-a:underline">
              <p className="text-sm text-neutral-400 mb-12">
                Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
              </p>

              <h2>1. Cosa Sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell&apos;utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per diverse finalità, come consentire la navigazione efficiente tra le pagine, ricordare le preferenze dell&apos;utente e, in generale, migliorare l&apos;esperienza di navigazione.
              </p>

              <h2>2. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento è lo <strong>Studio Chiocchetti Architettura</strong> di Maurizio Chiocchetti, con sede in Corso Roma 67, 13044 Crescentino (VC).
              </p>
              <ul>
                <li>Email: <a href="mailto:studio@architettochiocchetti.it">studio@architettochiocchetti.it</a></li>
              </ul>

              <h2>3. Tipologie di Cookie Utilizzati</h2>

              <h3>Cookie Tecnici (necessari)</h3>
              <p>
                Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disattivati. Vengono impostati in risposta ad azioni dell&apos;utente come la navigazione tra le pagine. Non raccolgono informazioni personali identificabili.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 pr-4 font-medium text-neutral-900">Cookie</th>
                      <th className="text-left py-3 pr-4 font-medium text-neutral-900">Fornitore</th>
                      <th className="text-left py-3 pr-4 font-medium text-neutral-900">Finalità</th>
                      <th className="text-left py-3 font-medium text-neutral-900">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 pr-4 text-neutral-600">__next*</td>
                      <td className="py-3 pr-4 text-neutral-600">Next.js</td>
                      <td className="py-3 pr-4 text-neutral-600">Funzionamento del framework</td>
                      <td className="py-3 text-neutral-600">Sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Cookie di Terze Parti</h3>
              <p>
                Il sito integra servizi di terze parti che possono installare cookie propri sul dispositivo dell&apos;utente.
              </p>

              <h4>Google Maps</h4>
              <p>
                Il sito utilizza Google Maps per visualizzare la posizione dello studio nella pagina Contatti e nella sezione contatti della homepage. Google Maps può installare i seguenti cookie:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 pr-4 font-medium text-neutral-900">Cookie</th>
                      <th className="text-left py-3 pr-4 font-medium text-neutral-900">Fornitore</th>
                      <th className="text-left py-3 pr-4 font-medium text-neutral-900">Finalità</th>
                      <th className="text-left py-3 font-medium text-neutral-900">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 pr-4 text-neutral-600">NID</td>
                      <td className="py-3 pr-4 text-neutral-600">Google</td>
                      <td className="py-3 pr-4 text-neutral-600">Preferenze e personalizzazione mappe</td>
                      <td className="py-3 text-neutral-600">6 mesi</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 pr-4 text-neutral-600">CONSENT</td>
                      <td className="py-3 pr-4 text-neutral-600">Google</td>
                      <td className="py-3 pr-4 text-neutral-600">Stato del consenso dell&apos;utente</td>
                      <td className="py-3 text-neutral-600">2 anni</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 pr-4 text-neutral-600">1P_JAR</td>
                      <td className="py-3 pr-4 text-neutral-600">Google</td>
                      <td className="py-3 pr-4 text-neutral-600">Statistiche e funzionalità</td>
                      <td className="py-3 text-neutral-600">1 mese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Per maggiori informazioni sui cookie di Google:{" "}
                <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
                  policies.google.com/technologies/cookies
                </a>
              </p>

              <h2>4. Come Gestire i Cookie</h2>
              <p>
                L&apos;utente può gestire le preferenze sui cookie direttamente dal proprio browser. Di seguito i link alle istruzioni per i principali browser:
              </p>
              <ul>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
                </li>
                <li>
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
                </li>
              </ul>
              <p>
                La disattivazione dei cookie di terze parti non pregiudica la navigazione sul sito, ma potrebbe impedire la corretta visualizzazione delle mappe di Google Maps.
              </p>

              <h2>5. Riferimenti Normativi</h2>
              <p>La presente Cookie Policy è redatta in conformità a:</p>
              <ul>
                <li>Regolamento UE 2016/679 (GDPR)</li>
                <li>Direttiva 2002/58/CE (ePrivacy)</li>
                <li>Provvedimento del Garante Privacy dell&apos;8 maggio 2014</li>
                <li>Linee Guida del Garante Privacy del 10 giugno 2021 sui cookie e altri strumenti di tracciamento</li>
              </ul>

              <h2>6. Aggiornamenti</h2>
              <p>
                La presente Cookie Policy può essere aggiornata periodicamente. Si consiglia di visitare regolarmente questa pagina per prendere visione di eventuali modifiche. Per qualsiasi domanda, contattare{" "}
                <a href="mailto:studio@architettochiocchetti.it">studio@architettochiocchetti.it</a>.
              </p>

              <div className="mt-16 pt-8 border-t border-neutral-200">
                <p className="text-sm">
                  Per maggiori informazioni sul trattamento dei dati personali, consultare la nostra{" "}
                  <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
