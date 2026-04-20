import type { CaseStudy } from "../../data/cases";
import { Container, Heading, Section, Text } from "../../shared/ui";

type CaseDetailHeroSectionProps = {
  caseStudy: CaseStudy;
};

export function CaseDetailHeroSection({ caseStudy }: CaseDetailHeroSectionProps) {
  return (
    <Section className="hero-section" spacing="lg">
      <Container>
        <div className="page-hero">
          <Text as="p" className="eyebrow">
            {caseStudy.businessType}
          </Text>
          <Heading as="h1" size="hero">
            {caseStudy.title}
          </Heading>
          <Text muted size="lg">
            {caseStudy.subtitle}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
