import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import EventsSection from "@/components/EventsSection";

import UpcomingSchedule from "@/components/UpcomingSchedule";
import CreatorFlier from "@/components/CreatorFlier";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <EventsSection />

        <InsightsSection />
        <UpcomingSchedule />
        <PartnersSection />
        <CreatorFlier />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
