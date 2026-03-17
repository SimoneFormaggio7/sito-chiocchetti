import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lo Studio",
  description:
    "Scopri lo Studio Chiocchetti Architettura: fondato nel 1989 a Crescentino, due generazioni di architetti al servizio di enti pubblici e privati.",
  openGraph: {
    title: "Lo Studio | Studio Chiocchetti Architettura",
    description:
      "Scopri lo Studio Chiocchetti Architettura: fondato nel 1989, due generazioni di architetti.",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
