import { ButtonLink, Container, Heading, Section, Text } from "../../shared/ui";

export function ConsultationHeroSection() {
  return (
    <Section className="hero-section" spacing="lg">
      <Container>
        <div className="page-hero">
          <Text as="p" className="eyebrow">
            Бесплатная консультация
          </Text>
          <Heading as="h1" size="hero">
            Бесплатная консультация по автоматизации бизнеса
          </Heading>
          <Text muted size="lg">
            За 1 час онлайн-встречи мы проведем поверхностный аудит вашего
            бизнеса и дадим рекомендации, как навести порядок в процессах и
            перестать терять клиентов.
          </Text>
          <ButtonLink to="/consultation" variant="primary">
            Оставить заявку
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
