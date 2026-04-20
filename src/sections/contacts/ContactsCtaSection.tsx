import { LeadForm } from "../../components/forms/LeadForm";
import { Card, Container, Heading, Section, Text } from "../../shared/ui";

export function ContactsCtaSection() {
  return (
    <Section spacing="md" tone="surface">
      <Container>
        <Card className="form-card">
          <div className="section-header section-header--compact">
            <Heading size="xl">Оставьте заявку на консультацию</Heading>
            <Text muted>
              Форма пока не отправляет данные в backend, но уже проверяет поля и
              показывает понятный результат отправки.
            </Text>
          </div>
          <LeadForm
            description="Напишите, как с вами связаться, и кратко опишите вопрос."
            source="contacts"
            title="Заявка со страницы контактов"
          />
        </Card>
      </Container>
    </Section>
  );
}
