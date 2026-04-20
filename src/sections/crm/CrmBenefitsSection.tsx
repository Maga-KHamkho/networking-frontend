import { SplitListSection } from "../../components/common";
import { crmBenefits } from "../../data/crm";

export function CrmBenefitsSection() {
  return (
    <SplitListSection
      description="CRM помогает превратить разрозненные заявки, звонки и переписки в управляемую систему продаж."
      items={crmBenefits}
      title="Что меняется после внедрения CRM"
      tone="surface"
    />
  );
}
