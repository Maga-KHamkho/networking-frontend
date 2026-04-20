import {
  ConsultationAudienceSection,
  ConsultationCtaSection,
  ConsultationHeroSection,
  ConsultationProcessSection,
  ConsultationValueSection,
} from "../sections/consultation";

export function ConsultationPage() {
  return (
    <>
      <ConsultationHeroSection />
      <ConsultationValueSection />
      <ConsultationProcessSection />
      <ConsultationAudienceSection />
      <ConsultationCtaSection />
    </>
  );
}
