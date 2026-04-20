import { ListGridSection } from "../../components/common";
import { netvisionTrustPoints } from "../../data/netvision";

export function NetvisionTrustSection() {
  return (
    <ListGridSection
      items={netvisionTrustPoints}
      title="Почему Netvision"
      tone="muted"
    />
  );
}
