import { Container, Heading, Section, Text } from "../../shared/ui";

export function CasesHeroSection() {
  return (
    <Section className="hero-section" spacing="lg">
      <Container>
        <div className="page-hero">
          <Text as="p" className="eyebrow">
            Кейсы
          </Text>
          <Heading as="h1" size="hero">
            Кейсы автоматизации и IT-решений для бизнеса
          </Heading>
          <Text muted size="lg">
            Реальные проекты Нэтворкинг: с какими проблемами к нам приходят
            клиенты и какие результаты получают.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
