import { useParams } from "react-router-dom";

import { getCaseBySlug } from "../data/cases";
import {
  CaseDetailContentSection,
  CaseDetailCtaSection,
  CaseDetailHeroSection,
  CaseNotFoundSection,
} from "../sections/cases";

export function CaseDetailPage() {
  const { slug } = useParams();
  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    return <CaseNotFoundSection />;
  }

  return (
    <>
      <CaseDetailHeroSection caseStudy={caseStudy} />
      <CaseDetailContentSection title="О клиенте" text={caseStudy.client} tone="surface" />
      <CaseDetailContentSection
        title="С какими проблемами пришел клиент"
        items={caseStudy.problems}
      />
      <CaseDetailContentSection
        title="Что нужно было решить"
        items={caseStudy.tasks}
        tone="muted"
      />
      <CaseDetailContentSection title="Что мы сделали" items={caseStudy.solutions} />
      <CaseDetailContentSection
        title="Результат для бизнеса"
        items={caseStudy.results}
        tone="surface"
      />
      <CaseDetailContentSection
        title="Какие решения использовали"
        items={caseStudy.technologies}
      />
      <CaseDetailCtaSection />
    </>
  );
}
