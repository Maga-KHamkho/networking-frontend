import { ButtonLink, Container, Heading, Section, Text } from "../../shared/ui";

export function FinalCtaSection() {
  return (
    <Section className="final-cta-section" spacing="md">
      <Container size="narrow">
        <div className="final-cta">
          <Heading size="lg">
            Начните с бесплатной консультации и узнайте, где ваш бизнес теряет
            клиентов.
          </Heading>
          <Text muted>
            Один разговор поможет понять, какие процессы стоит привести в порядок
            в первую очередь.
          </Text>
          <ButtonLink to="/consultation" variant="primary">
            Записаться на консультацию
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
