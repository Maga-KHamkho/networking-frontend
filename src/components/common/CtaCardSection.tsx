import { ButtonLink, Card, Container, Heading, Section, Text } from "../../shared/ui";

type CtaCardSectionProps = {
  buttonLabel: string;
  buttonTo: string;
  description: string;
  pills?: string[];
  title: string;
  tone?: "default" | "surface" | "muted";
};

export function CtaCardSection({
  buttonLabel,
  buttonTo,
  description,
  pills,
  title,
  tone = "surface",
}: CtaCardSectionProps) {
  return (
    <Section spacing="md" tone={tone}>
      <Container>
        <Card className="cta-card">
          <div className="section-header section-header--compact">
            <Heading size="xl">{title}</Heading>
            <Text muted size="lg">
              {description}
            </Text>
          </div>
          {pills ? (
            <div className="pill-list">
              {pills.map((pill) => (
                <Text key={pill} as="span" className="pill">
                  {pill}
                </Text>
              ))}
            </div>
          ) : null}
          <ButtonLink to={buttonTo} variant="primary">
            {buttonLabel}
          </ButtonLink>
        </Card>
      </Container>
    </Section>
  );
}
