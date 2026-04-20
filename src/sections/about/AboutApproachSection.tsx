import { aboutApproachPoints } from "../../data/about";
import { Card, Container, Heading, Section, Text } from "../../shared/ui";

export function AboutApproachSection() {
  return (
    <Section spacing="md" tone="surface">
      <Container>
        <div className="section-header">
          <Heading size="xl">Как мы работаем</Heading>
        </div>
        <div className="steps-list">
          {aboutApproachPoints.map((point, index) => (
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
