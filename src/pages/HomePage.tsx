import {
  CasesPreviewSection,
  ConsultationSection,
  FinalCtaSection,
  HeroSection,
  ProblemsSection,
  ServicesSection,
  SolutionSection,
  TrustSection,
} from "../sections/home";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ServicesSection />
      <TrustSection />
      <CasesPreviewSection />
      <ConsultationSection />
      <FinalCtaSection />
    </>
  );
}
