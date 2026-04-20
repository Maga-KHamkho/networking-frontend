import { ListGridSection } from "../../components/common";
import { consultationValuePoints } from "../../data/consultation";

export function ConsultationValueSection() {
  return (
    <ListGridSection
      items={consultationValuePoints}
      title="Что вы получите на консультации"
    />
  );
}
