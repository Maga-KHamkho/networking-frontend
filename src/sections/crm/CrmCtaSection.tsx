import { CtaCardSection } from "../../components/common";
import { crmConsultationPoints } from "../../data/crm";

export function CrmCtaSection() {
  return (
    <CtaCardSection
      buttonLabel="Получить бесплатную консультацию"
      buttonTo="/consultation"
      description="За 1 час онлайн-встречи мы разберем ваш бизнес, покажем, где вы теряете клиентов, и дадим рекомендации по автоматизации."
      pills={crmConsultationPoints}
      title="Бесплатная консультация по внедрению CRM"
    />
  );
}
