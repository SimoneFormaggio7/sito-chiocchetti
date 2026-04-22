import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sui cookie utilizzati dal sito dello Studio Chiocchetti Architettura. Scopri quali cookie usiamo e come gestirli.",
  openGraph: {
    title: "Cookie Policy | Studio Chiocchetti Architettura",
    description:
      "Informativa sui cookie del sito Studio Chiocchetti Architettura.",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
