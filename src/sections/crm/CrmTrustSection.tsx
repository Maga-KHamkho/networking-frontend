import { ListGridSection } from "../../components/common";
import { crmTrustPoints } from "../../data/crm";

export function CrmTrustSection() {
  return (
    <ListGridSection
      items={crmTrustPoints}
      title="Почему внедряют CRM с Нэтворкинг"
      tone="muted"
    />
  );
}
