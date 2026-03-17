import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import ImageDivider from "@/components/ImageDivider";
import DiCosaCiOccupiamo from "@/components/DiCosaCiOccupiamo";
import Servizi from "@/components/Servizi";
import Progetti from "@/components/Progetti";
import CiHannoScelto from "@/components/CiHannoScelto";
import ContattiHome from "@/components/ContattiHome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ChiSiamo />
      <ImageDivider />
      <DiCosaCiOccupiamo />
      <Servizi />
      <Progetti />
      <CiHannoScelto />
      <ContattiHome />
      <Footer />
    </>
  );
}
