import { CtaCardSection } from "../../components/common";
import { netvisionConsultationPoints } from "../../data/netvision";

export function NetvisionCtaSection() {
  return (
    <CtaCardSection
      buttonLabel="Получить бесплатную консультацию"
      buttonTo="/consultation"
      description="За 1 час онлайн-встречи мы разберем вашу текущую IT-инфраструктуру и дадим рекомендации по ее улучшению и масштабированию."
      pills={netvisionConsultationPoints}
      title="Бесплатная консультация по IT-инфраструктуре"
    />
  );
}
