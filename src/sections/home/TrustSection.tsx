import { ListGridSection } from "../../components/common";
import { trustPoints } from "../../data/home";

export function TrustSection() {
  return (
    <ListGridSection
      columns="three"
      items={trustPoints}
      title="Почему нам доверяют"
      tone="muted"
    />
  );
}
