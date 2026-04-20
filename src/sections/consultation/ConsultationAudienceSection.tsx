import { ListGridSection } from "../../components/common";
import { consultationAudiencePoints } from "../../data/consultation";

export function ConsultationAudienceSection() {
  return (
    <ListGridSection
      items={consultationAudiencePoints}
      title="Кому подойдет консультация"
      tone="muted"
    />
  );
}
