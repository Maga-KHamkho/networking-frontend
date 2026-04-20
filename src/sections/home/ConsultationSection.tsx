import { CtaCardSection } from "../../components/common";
import { consultationPoints } from "../../data/home";

export function ConsultationSection() {
  return (
    <CtaCardSection
      buttonLabel="Записаться на консультацию"
      buttonTo="/consultation"
      description="За 1 час онлайн-встречи мы проведем поверхностный аудит вашего бизнеса и дадим рекомендации, как навести порядок и перестать терять клиентов."
      pills={consultationPoints}
      title="Бесплатная консультация по автоматизации бизнеса"
    />
  );
}
