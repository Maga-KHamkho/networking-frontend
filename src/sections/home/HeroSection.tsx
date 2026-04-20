import { ButtonLink, Card, Container, Heading, Section, Text } from "../../shared/ui";

export function HeroSection() {
  return (
    <Section className="hero-section" spacing="lg">
      <Container>
        <Card className="hero-section__card">
          <Text as="p" className="eyebrow">
            CRM, телефония и IT-инфраструктура
          </Text>
          <Heading as="h1" size="hero">
            Вы теряете клиентов из-за хаоса в заявках и процессах
          </Heading>
          <Text className="hero-section__text" muted size="lg">
            Мы внедряем CRM и IT-системы под ключ, чтобы вы видели, что происходит
            в бизнесе, и перестали терять деньги.
          </Text>
          <div className="hero-section__actions">
            <ButtonLink to="/consultation" variant="primary">
              Записаться на бесплатную консультацию
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
