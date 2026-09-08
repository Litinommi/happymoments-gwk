import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Celebrations from "@/components/Celebrations";
import Experience from "@/components/Experience";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import InstagramSection from "@/components/InstagramSection";
import Location from "@/components/Location";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Celebrations />
        <Experience />
        <Packages />
        <Gallery />
        <WhyUs />
        <InstagramSection />
        <Location />
        <WhatsAppCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
