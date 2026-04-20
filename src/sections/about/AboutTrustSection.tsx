import { ListGridSection } from "../../components/common";
import { aboutTrustFacts } from "../../data/about";

export function AboutTrustSection() {
  return (
    <ListGridSection
      items={aboutTrustFacts}
      title="Опыт и факты доверия"
      tone="muted"
    />
  );
}
