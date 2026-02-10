import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-6";
import StatsSection from "@/components/stats-4";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <IntegrationsSection/>
      <StatsSection/>
      <FAQsThree/>
      <FooterSection/>
    </div>
  );
}
