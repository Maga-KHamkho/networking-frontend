import { Card, Container, Heading, Section, Text } from "../../shared/ui";

type ListGridSectionProps = {
  description?: string;
  items: string[];
  title: string;
  tone?: "default" | "surface" | "muted";
  columns?: "two" | "three";
};

export function ListGridSection({
  columns = "two",
  description,
  items,
  title,
  tone = "default",
}: ListGridSectionProps) {
  return (
    <Section spacing="md" tone={tone}>
      <Container>
        <div className="section-header">
          <Heading size="xl">{title}</Heading>
          {description ? <Text muted>{description}</Text> : null}
        </div>
        <div className={`feature-grid feature-grid--${columns}`}>
          {items.map((item) => (
            <Card key={item} className="list-card" padding="sm">
              <Text>{item}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
