import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Il Nostro Metodo",
  description:
    "Il metodo di lavoro dello Studio Chiocchetti: 8 fasi dalla consulenza iniziale alla direzione lavori per un progetto di qualità.",
  openGraph: {
    title: "Il Nostro Metodo | Studio Chiocchetti Architettura",
    description:
      "Il metodo di lavoro dello Studio Chiocchetti: 8 fasi per un progetto di qualità.",
  },
};

export default function MetodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
