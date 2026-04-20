import {
  NetvisionAudienceSection,
  NetvisionCasesSection,
  NetvisionCtaSection,
  NetvisionHeroSection,
  NetvisionProblemsSection,
  NetvisionProcessSection,
  NetvisionSecuritySection,
  NetvisionSolutionsSection,
  NetvisionTrustSection,
} from "../sections/netvision";

export function NetvisionPage() {
  return (
    <>
      <NetvisionHeroSection />
      <NetvisionAudienceSection />
      <NetvisionProblemsSection />
      <NetvisionSolutionsSection />
      <NetvisionSecuritySection />
      <NetvisionProcessSection />
      <NetvisionTrustSection />
      <NetvisionCasesSection />
      <NetvisionCtaSection />
    </>
  );
}
