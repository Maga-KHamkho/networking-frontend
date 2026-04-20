import { ButtonLink, Container, Heading, Section, Text } from "../../shared/ui";

export function AboutCtaSection() {
  return (
    <Section className="final-cta-section" spacing="md">
      <Container size="narrow">
        <div className="final-cta">
          <Heading size="lg">
            Начните с бесплатной консультации и поймите, какие решения подойдут
            вашему бизнесу.
          </Heading>
          <Text muted>
            Разберем текущую ситуацию и покажем, где автоматизация или
            инфраструктура дадут быстрый эффект.
          </Text>
          <ButtonLink to="/consultation" variant="primary">
            Записаться на консультацию
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
