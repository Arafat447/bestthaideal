import ClintReview from "@/components/pages/HomePage/ClintReview";
import Ecommerce from "@/components/pages/HomePage/Ecommerce";

import HeroSection from "@/components/pages/HomePage/HeroSection";
import OurPartnersSection from "@/components/pages/HomePage/OurPartnersSection";
import OverviewSection from "@/components/pages/HomePage/OverviewSection";
import PropertyBuySell from "@/components/pages/HomePage/PropertyBuySell";
import ServePoint from "@/components/pages/HomePage/ServePoint";

import TopService from "@/components/pages/HomePage/TopService";
import TourSection from "@/components/pages/HomePage/TourSection";
import WhyChoose from "@/components/pages/HomePage/WhyChoose";

export default function Home() {
  return (
    <main className="  bg-slate-100">
      <HeroSection />
      <TopService />
      <WhyChoose />
      <ClintReview />
      <Ecommerce />
      <TourSection />

      {/* <OurPartnersSection /> */}
    </main>
  );
}
