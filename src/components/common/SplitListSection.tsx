import { Card, Container, Heading, Section, Text } from "../../shared/ui";

type SplitListSectionProps = {
  description?: string;
  items: string[];
  title: string;
  tone?: "default" | "surface" | "muted";
};

export function SplitListSection({
  description,
  items,
  title,
  tone = "default",
}: SplitListSectionProps) {
  return (
    <Section spacing="md" tone={tone}>
      <Container>
        <div className="split-section">
          <div className="section-header section-header--compact">
            <Heading size="xl">{title}</Heading>
            {description ? <Text muted>{description}</Text> : null}
          </div>
          <Card className="list-panel">
            {items.map((item) => (
              <Text key={item} className="check-row">
                {item}
              </Text>
            ))}
          </Card>
        </div>
      </Container>
    </Section>
  );
}
