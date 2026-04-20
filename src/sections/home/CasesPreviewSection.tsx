import { CasePreviewCard } from "../../components/common";
import { casePreviews } from "../../data/home";
import { ButtonLink, Container, Heading, Section, Text } from "../../shared/ui";

export function CasesPreviewSection() {
  return (
    <Section spacing="md">
      <Container>
        <div className="section-header">
          <Heading size="xl">Реальные кейсы наших клиентов</Heading>
          <Text muted>
            Показываем не красивые обещания, а понятные изменения в процессах,
            контроле и стабильности работы.
          </Text>
        </div>
        <div className="feature-grid feature-grid--three">
          {casePreviews.map((casePreview) => (
            <CasePreviewCard
              key={casePreview.industry}
              eyebrow={casePreview.industry}
              groups={[
                { label: "Проблема", text: casePreview.problem },
                { label: "Решение", text: casePreview.solution },
                { label: "Результат", text: casePreview.result, muted: false },
              ]}
            />
          ))}
        </div>
        <div className="section-actions">
          <ButtonLink to="/cases" variant="secondary">
            Смотреть все кейсы
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
