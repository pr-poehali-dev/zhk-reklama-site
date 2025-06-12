import HeroSection from "@/components/HeroSection";
import PropertyInfo from "@/components/PropertyInfo";
import ApartmentGrid from "@/components/ApartmentGrid";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <PropertyInfo />
      <ApartmentGrid />
      <ContactSection />
    </div>
  );
};

export default Index;
