import { CasePreviewCard } from "../../components/common";
import { netvisionCases } from "../../data/netvision";
import { Container, Heading, Section, Text } from "../../shared/ui";

export function NetvisionCasesSection() {
  return (
    <Section spacing="md">
      <Container>
        <div className="section-header">
          <Heading size="xl">Примеры решений Netvision</Heading>
          <Text muted>
            Временные примеры показывают, как инфраструктурные задачи переводятся
            в понятный бизнес-результат.
          </Text>
        </div>
        <div className="feature-grid feature-grid--three">
          {netvisionCases.map((item) => (
            <CasePreviewCard
              key={item.object}
              eyebrow={item.object}
              groups={[
                { label: "Задача", text: item.task },
                { label: "Что реализовали", text: item.implementation },
                { label: "Результат", text: item.result, muted: false },
              ]}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
