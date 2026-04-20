import { ButtonLink, Container, Heading, Section, Text } from "../../shared/ui";

export function CaseDetailCtaSection() {
  return (
    <Section className="final-cta-section" spacing="md">
      <Container size="narrow">
        <div className="final-cta">
          <Heading size="lg">Хотите такой же результат в своем бизнесе?</Heading>
          <Text muted>
            Начните с консультации: разберем вашу ситуацию и покажем, какие
            решения дадут быстрый и понятный эффект.
          </Text>
          <ButtonLink to="/consultation" variant="primary">
            Записаться на консультацию
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
