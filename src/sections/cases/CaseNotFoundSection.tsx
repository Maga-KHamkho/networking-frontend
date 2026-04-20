import { ButtonLink, Container, Heading, Section, Text } from "../../shared/ui";

export function CaseNotFoundSection() {
  return (
    <Section className="hero-section" spacing="lg">
      <Container size="narrow">
        <div className="page-hero">
          <Text as="p" className="eyebrow">
            Кейс не найден
          </Text>
          <Heading as="h1" size="hero">
            Такой кейс пока не опубликован
          </Heading>
          <Text muted size="lg">
            Возможно, ссылка устарела или страница еще готовится. Можно вернуться
            к списку кейсов и выбрать другой пример.
          </Text>
          <ButtonLink to="/cases" variant="primary">
            Вернуться к кейсам
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
