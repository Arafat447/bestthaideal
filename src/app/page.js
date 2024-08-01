import Ecommerce from "@/components/pages/HomePage/Ecommerce";
import Faqs from "@/components/pages/HomePage/FAqs";
import HeroSection from "@/components/pages/HomePage/HeroSection";
import OurPartnersSection from "@/components/pages/HomePage/OurPartnersSection";
import OverviewSection from "@/components/pages/HomePage/OverviewSection";
import PropertyBuySell from "@/components/pages/HomePage/PropertyBuySell";
import ServePoint from "@/components/pages/HomePage/ServePoint";
import ServicePoint from "@/components/pages/HomePage/ServicePoint";
import TourSection from "@/components/pages/HomePage/TourSection";

export default function Home() {
  return (
    <main className="  bg-slate-100">
      <HeroSection />
      <ServicePoint />
      <OverviewSection />
      <ServePoint />
      <Ecommerce /> <TourSection />
      <PropertyBuySell />
      <OurPartnersSection />
      <Faqs />
    </main>
  );
}
