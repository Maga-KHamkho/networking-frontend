import {
  CrmAudienceSection,
  CrmBenefitsSection,
  CrmCasesSection,
  CrmCtaSection,
  CrmHeroSection,
  CrmProblemsSection,
  CrmProcessSection,
  CrmSystemsSection,
  CrmTrustSection,
} from "../sections/crm";

export function CRMPage() {
  return (
    <>
      <CrmHeroSection />
      <CrmAudienceSection />
      <CrmProblemsSection />
      <CrmBenefitsSection />
      <CrmSystemsSection />
      <CrmProcessSection />
      <CrmTrustSection />
      <CrmCasesSection />
      <CrmCtaSection />
    </>
  );
}
