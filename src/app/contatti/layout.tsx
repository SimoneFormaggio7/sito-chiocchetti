import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo Studio Chiocchetti Architettura a Crescentino (VC). Telefono, email e indirizzo per consulenze e appuntamenti.",
  openGraph: {
    title: "Contatti | Studio Chiocchetti Architettura",
    description:
      "Contatta lo Studio Chiocchetti Architettura a Crescentino (VC) per consulenze e appuntamenti.",
  },
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
