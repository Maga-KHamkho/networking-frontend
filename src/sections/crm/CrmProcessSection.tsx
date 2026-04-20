import { crmProcessSteps } from "../../data/crm";
import { Card, Container, Heading, Section, Text } from "../../shared/ui";

export function CrmProcessSection() {
  return (
    <Section spacing="md" tone="surface">
      <Container>
        <div className="section-header">
          <Heading size="xl">Как мы внедряем CRM</Heading>
        </div>
        <div className="steps-list">
          {crmProcessSteps.map((step, index) => (
            <Card key={step} className="step-card" padding="sm">
              <Text as="span" className="step-card__number">
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Text>{step}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
