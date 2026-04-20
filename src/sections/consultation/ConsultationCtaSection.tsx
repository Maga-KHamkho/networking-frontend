import { LeadForm } from "../../components/forms/LeadForm";
import { Card, Container, Heading, Section, Text } from "../../shared/ui";

export function ConsultationCtaSection() {
  return (
    <Section spacing="md" tone="surface">
      <Container>
        <Card className="form-card">
          <div className="section-header section-header--compact">
            <Heading size="xl">Оставьте заявку на консультацию</Heading>
            <Text muted>
              Заполните короткую форму. Сейчас отправка работает как UI-симуляция,
              а структура уже готова к будущему подключению backend.
            </Text>
          </div>
          <LeadForm
            description="Укажите имя и удобный способ связи. Комментарий можно оставить пустым."
            source="consultation"
            title="Заявка на консультацию"
          />
        </Card>
      </Container>
    </Section>
  );
}
