import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import LoadingScreen from "./components/ui/LoadingScreen";
import FloatingBook from "./components/ui/FloatingBook";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import EventsSection from "./components/sections/EventsSection";
import GlobalSection from "./components/sections/GlobalSection";
import ShowreelSection from "./components/sections/ShowreelSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ClientsSection from "./components/sections/ClientsSection";
import AwardsSection from "./components/sections/AwardsSection";
import GallerySection from "./components/sections/GallerySection";
import BookingSection from "./components/sections/BookingSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <EventsSection />
        <GlobalSection />
        <ShowreelSection />
        <TestimonialsSection />
        <ClientsSection />
        <AwardsSection />
        <GallerySection />
        <BookingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingBook />
    </>
  );
}
