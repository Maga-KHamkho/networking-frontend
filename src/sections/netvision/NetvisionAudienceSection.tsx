import { ListGridSection } from "../../components/common";
import { netvisionAudience } from "../../data/netvision";

export function NetvisionAudienceSection() {
  return <ListGridSection items={netvisionAudience} title="Кому подойдут решения Netvision" />;
}
