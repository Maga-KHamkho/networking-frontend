import { ButtonLink, Card, Container, Heading, Section, Text } from "../../shared/ui";

export function NetvisionHeroSection() {
  return (
    <Section className="hero-section" spacing="lg">
      <Container>
        <Card className="hero-section__card">
          <Text as="p" className="eyebrow">
            Netvision
          </Text>
          <Heading as="h1" size="hero">
            IT-инфраструктура для бизнеса под ключ
          </Heading>
          <Text className="hero-section__text" muted size="lg">
            Проектируем и внедряем надежную IT-инфраструктуру: сети,
            видеонаблюдение, серверы и Wi-Fi — чтобы бизнес работал стабильно и
            без сбоев.
          </Text>
          <div className="hero-section__actions">
            <ButtonLink to="/consultation" variant="primary">
              Получить бесплатную консультацию
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
