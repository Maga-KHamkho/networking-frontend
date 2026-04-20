import { contactMethods } from "../../data/contacts";
import { Card, Container, Heading, Section, Text } from "../../shared/ui";

export function ContactsMethodsSection() {
  return (
    <Section spacing="md">
      <Container>
        <div className="section-header">
          <Heading size="xl">Способы связи</Heading>
          <Text muted>
            Контакты ниже временные и специально вынесены в data-файл, чтобы их
            было легко заменить на реальные.
          </Text>
        </div>
        <div className="feature-grid feature-grid--two">
          {contactMethods.map((method) => (
            <Card key={method.label} className="contact-card">
              <Text as="p" className="case-card__label">
                {method.label}
              </Text>
              <Text>{method.value}</Text>
              <Text muted size="sm">
                {method.note}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
