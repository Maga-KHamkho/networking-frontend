import { CasePreviewCard } from "../../components/common";
import { caseStudies } from "../../data/cases";
import { Container, Section } from "../../shared/ui";

export function CasesListSection() {
  return (
    <Section spacing="md">
      <Container>
        <div className="feature-grid feature-grid--three">
          {caseStudies.map((caseStudy) => (
            <CasePreviewCard
              key={caseStudy.slug}
              eyebrow={caseStudy.businessType}
              groups={[
                { label: "Проблема", text: caseStudy.previewProblem },
                { label: "Решение", text: caseStudy.previewSolution },
              ]}
              linkLabel="Смотреть кейс"
              linkTo={`/cases/${caseStudy.slug}`}
              title={caseStudy.title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
