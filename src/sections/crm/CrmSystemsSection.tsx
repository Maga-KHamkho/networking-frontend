import { InfoCardsSection } from "../../components/common";
import { crmSystems } from "../../data/crm";

export function CrmSystemsSection() {
  return (
    <InfoCardsSection
      description="Подбираем систему под процессы, команду и задачи бизнеса, а не ради самой CRM."
      items={crmSystems}
      title="С какими CRM мы работаем"
    />
  );
}
