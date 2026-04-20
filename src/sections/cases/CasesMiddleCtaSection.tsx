import { ButtonLink, Container, Heading, Section } from "../../shared/ui";

export function CasesMiddleCtaSection() {
  return (
    <Section spacing="sm" tone="muted">
      <Container>
        <div className="inline-cta">
          <Heading size="lg">Хотите понять, какие решения подойдут именно вашему бизнесу?</Heading>
          <ButtonLink to="/consultation" variant="primary">
            Записаться на бесплатную консультацию
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
