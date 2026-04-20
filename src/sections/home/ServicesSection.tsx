import { InfoCardsSection } from "../../components/common";
import { services } from "../../data/home";

export function ServicesSection() {
  return (
    <InfoCardsSection
      description="Начинаем с самой болезненной точки и собираем систему, которая помогает бизнесу работать понятнее."
      items={services}
      linkLabel="Подробнее"
      title="Услуги, которые закрывают хаос в процессах"
    />
  );
}
