import { Container, Heading, Section, Text } from "../../shared/ui";

export function ContactsHeroSection() {
  return (
    <Section className="hero-section" spacing="lg">
      <Container>
        <div className="page-hero">
          <Text as="p" className="eyebrow">
            Связь
          </Text>
          <Heading as="h1" size="hero">
            Контакты
          </Heading>
          <Text muted size="lg">
            Свяжитесь с Нэтворкинг удобным способом или оставьте заявку на
            консультацию.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
