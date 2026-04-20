import { ListGridSection } from "../../components/common";
import { crmProblems } from "../../data/crm";

export function CrmProblemsSection() {
  return (
    <ListGridSection
      columns="three"
      description="Когда обращения живут в разных каналах, руководитель видит только часть картины и не может управлять продажами системно."
      items={crmProblems}
      title="Основные проблемы без CRM"
      tone="muted"
    />
  );
}
