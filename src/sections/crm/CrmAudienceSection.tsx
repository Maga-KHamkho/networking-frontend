import { ListGridSection } from "../../components/common";
import { crmAudience } from "../../data/crm";

export function CrmAudienceSection() {
  return <ListGridSection items={crmAudience} title="Кому подходит внедрение CRM" />;
}
