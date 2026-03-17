import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Portfolio progetti dello Studio Chiocchetti: edilizia pubblica e privata, scuole, residenze, ristrutturazioni a Vercelli e provincia.",
  openGraph: {
    title: "Progetti | Studio Chiocchetti Architettura",
    description:
      "Portfolio progetti dello Studio Chiocchetti: edilizia pubblica e privata, scuole, residenze, ristrutturazioni.",
  },
};

export default function ProgettiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
