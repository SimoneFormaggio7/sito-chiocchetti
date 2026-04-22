import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sulla privacy dello Studio Chiocchetti Architettura ai sensi del GDPR. Scopri come trattiamo i tuoi dati personali.",
  openGraph: {
    title: "Privacy Policy | Studio Chiocchetti Architettura",
    description:
      "Informativa sulla privacy dello Studio Chiocchetti Architettura ai sensi del GDPR.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
