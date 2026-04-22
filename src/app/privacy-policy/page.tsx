"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
              INFORMATIVA SULLA PRIVACY
            </p>
            <h1
              className={`text-4xl md:text-5xl font-extralight transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Privacy Policy
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

              <h2>1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è lo <strong>Studio Chiocchetti Architettura</strong> di Maurizio Chiocchetti, con sede in Corso Roma 67, 13044 Crescentino (VC), Italia.
              </p>
              <ul>
                <li>Email: <a href="mailto:studio@architettochiocchetti.it">studio@architettochiocchetti.it</a></li>
                <li>Telefono: <a href="tel:+390161841850">+39 0161 841850</a></li>
                <li>P.IVA: 02644220226</li>
              </ul>

              <h2>2. Tipologie di Dati Raccolti</h2>
              <p>
                Il sito web raccoglie i seguenti dati personali, forniti volontariamente dall&apos;utente o raccolti automaticamente durante la navigazione:
              </p>
              <h3>Dati forniti volontariamente</h3>
              <p>
                Tramite il modulo di contatto presente sul sito, l&apos;utente può fornire:
              </p>
              <ul>
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Contenuto del messaggio</li>
              </ul>
              <h3>Dati raccolti automaticamente</h3>
              <p>
                Durante la navigazione, il sito può raccogliere automaticamente dati tecnici quali indirizzo IP, tipo di browser, sistema operativo, pagine visitate e durata della visita, attraverso cookie tecnici e di terze parti (si veda la <Link href="/cookie-policy" className="underline">Cookie Policy</Link>).
              </p>

              <h2>3. Finalità del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul>
                <li><strong>Riscontro alle richieste di contatto:</strong> i dati inseriti nel modulo di contatto vengono utilizzati esclusivamente per rispondere alle richieste dell&apos;utente via email.</li>
                <li><strong>Navigazione del sito:</strong> i dati tecnici sono raccolti per garantire il corretto funzionamento del sito web.</li>
                <li><strong>Visualizzazione mappe:</strong> il sito integra Google Maps per mostrare la posizione dello studio. Questo servizio può raccogliere dati secondo la propria informativa privacy.</li>
              </ul>

              <h2>4. Base Giuridica del Trattamento</h2>
              <p>Il trattamento dei dati personali si basa su:</p>
              <ul>
                <li><strong>Consenso dell&apos;utente</strong> (Art. 6, par. 1, lett. a del GDPR): per l&apos;invio di dati tramite il modulo di contatto.</li>
                <li><strong>Legittimo interesse</strong> (Art. 6, par. 1, lett. f del GDPR): per il corretto funzionamento tecnico del sito.</li>
              </ul>

              <h2>5. Modalità di Trattamento</h2>
              <p>
                I dati sono trattati con strumenti elettronici e/o manuali, con logiche strettamente correlate alle finalità sopra indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
              </p>
              <p>
                I dati inviati tramite il modulo di contatto vengono recapitati via email al Titolare e non vengono memorizzati in alcun database del sito.
              </p>

              <h2>6. Comunicazione e Diffusione dei Dati</h2>
              <p>
                I dati personali non saranno diffusi né comunicati a terzi, salvo quanto necessario per l&apos;erogazione dei servizi richiesti o per adempiere a obblighi di legge.
              </p>

              <h2>7. Servizi di Terze Parti</h2>
              <h3>Google Maps</h3>
              <p>
                Il sito utilizza Google Maps, un servizio di visualizzazione di mappe fornito da Google LLC. Questo servizio consente di integrare contenuti cartografici all&apos;interno delle pagine web e può raccogliere dati dell&apos;utente, inclusi cookie. Per maggiori informazioni, consultare la{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>.
              </p>

              <h2>8. Conservazione dei Dati</h2>
              <p>
                I dati personali forniti tramite il modulo di contatto vengono conservati per il tempo strettamente necessario a gestire la richiesta e, successivamente, per il tempo previsto dalla normativa vigente. I dati di navigazione vengono cancellati immediatamente dopo l&apos;elaborazione.
              </p>

              <h2>9. Diritti dell&apos;Interessato</h2>
              <p>
                Ai sensi degli articoli 15-22 del Regolamento UE 2016/679 (GDPR), l&apos;utente ha il diritto di:
              </p>
              <ul>
                <li>Accedere ai propri dati personali</li>
                <li>Richiedere la rettifica o la cancellazione dei dati</li>
                <li>Richiedere la limitazione del trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>
              <p>
                Per esercitare i propri diritti, l&apos;utente può inviare una richiesta a{" "}
                <a href="mailto:studio@architettochiocchetti.it">studio@architettochiocchetti.it</a>.
              </p>
              <p>
                L&apos;utente ha inoltre il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali ({" "}
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).
              </p>

              <h2>10. Modifiche alla Privacy Policy</h2>
              <p>
                Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Si consiglia di consultare periodicamente questa pagina.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
