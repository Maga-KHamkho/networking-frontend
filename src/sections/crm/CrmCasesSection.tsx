import { CasePreviewCard } from "../../components/common";
import { crmCases } from "../../data/crm";
import { Container, Heading, Section, Text } from "../../shared/ui";

export function CrmCasesSection() {
  return (
    <Section spacing="md">
      <Container>
        <div className="section-header">
          <Heading size="xl">Кейсы по CRM</Heading>
          <Text muted>
            Временные примеры в формате реальных задач: проблема, решение и
            понятный бизнес-результат.
          </Text>
        </div>
        <div className="feature-grid feature-grid--three">
          {crmCases.map((crmCase) => (
            <CasePreviewCard
              key={crmCase.industry}
              eyebrow={crmCase.industry}
              groups={[
                { label: "Проблема", text: crmCase.problem },
                { label: "Решение", text: crmCase.solution },
                { label: "Результат", text: crmCase.result, muted: false },
              ]}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
