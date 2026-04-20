import { Container, Heading, Section, Text } from "../../shared/ui";

export function AboutHeroSection() {
  return (
    <Section className="hero-section" spacing="lg">
      <Container>
        <div className="page-hero">
          <Text as="p" className="eyebrow">
            О компании
          </Text>
          <Heading as="h1" size="hero">
            О компании Нэтворкинг
          </Heading>
          <Text muted size="lg">
            Помогаем бизнесу навести порядок в процессах, коммуникациях и
            IT-инфраструктуре.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
