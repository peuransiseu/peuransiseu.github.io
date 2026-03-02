import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import IntroSection from "@/components/IntroSection";
import OrganizationsSection from "@/components/OrganizationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full lg:ml-64">
        <HeroSection />
        <AboutSection />
        <IntroSection />
        <OrganizationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
