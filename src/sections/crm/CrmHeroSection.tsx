import { ButtonLink, Card, Container, Heading, Section, Text } from "../../shared/ui";

export function CrmHeroSection() {
  return (
    <Section className="hero-section" spacing="lg">
      <Container>
        <Card className="hero-section__card">
          <Text as="p" className="eyebrow">
            CRM и автоматизация
          </Text>
          <Heading as="h1" size="hero">
            CRM и автоматизация бизнеса под ключ
          </Heading>
          <Text className="hero-section__text" muted size="lg">
            Внедряем CRM-системы, объединяем заявки, звонки и переписки в одну
            систему, чтобы вы не теряли клиентов и контролировали бизнес.
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
