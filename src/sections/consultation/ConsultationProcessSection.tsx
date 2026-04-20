import { consultationProcessPoints } from "../../data/consultation";
import { Card, Container, Heading, Section, Text } from "../../shared/ui";

export function ConsultationProcessSection() {
  return (
    <Section spacing="md" tone="surface">
      <Container>
        <div className="section-header">
          <Heading size="xl">Как проходит консультация</Heading>
        </div>
        <div className="steps-list">
          {consultationProcessPoints.map((point, index) => (
            <Card key={point} className="step-card" padding="sm">
              <Text as="span" className="step-card__number">
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Text>{point}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
