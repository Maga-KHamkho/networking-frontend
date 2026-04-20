import { ButtonLink, Card, Container, Heading, Section, Text } from "../../shared/ui";

export type InfoCardItem = {
  title: string;
  description: string;
  href?: string;
};

type InfoCardsSectionProps = {
  description?: string;
  items: InfoCardItem[];
  linkLabel?: string;
  title: string;
  tone?: "default" | "surface" | "muted";
};

export function InfoCardsSection({
  description,
  items,
  linkLabel,
  title,
  tone = "default",
}: InfoCardsSectionProps) {
  return (
    <Section spacing="md" tone={tone}>
      <Container>
        <div className="section-header">
          <Heading size="xl">{title}</Heading>
          {description ? <Text muted>{description}</Text> : null}
        </div>
        <div className="feature-grid feature-grid--two">
          {items.map((item) => (
            <Card key={item.title} className="service-card">
              <Heading as="h3" size="md">
                {item.title}
              </Heading>
              <Text muted>{item.description}</Text>
              {item.href && linkLabel ? (
                <ButtonLink to={item.href} variant="secondary">
                  {linkLabel}
                </ButtonLink>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
