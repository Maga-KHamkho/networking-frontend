import { Card, Container, Heading, Section, Text } from "../../shared/ui";

type CaseDetailContentSectionProps = {
  title: string;
  text?: string;
  items?: string[];
  tone?: "default" | "surface" | "muted";
};

export function CaseDetailContentSection({
  items,
  text,
  title,
  tone = "default",
}: CaseDetailContentSectionProps) {
  return (
    <Section spacing="md" tone={tone}>
      <Container>
        <div className="split-section">
          <div className="section-header section-header--compact">
            <Heading size="xl">{title}</Heading>
            {text ? <Text muted>{text}</Text> : null}
          </div>
          {items ? (
            <Card className="list-panel">
              {items.map((item) => (
                <Text key={item} className="check-row">
                  {item}
                </Text>
              ))}
            </Card>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
