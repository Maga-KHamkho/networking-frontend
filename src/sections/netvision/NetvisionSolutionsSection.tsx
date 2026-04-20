import { InfoCardsSection } from "../../components/common";
import { netvisionSolutions } from "../../data/netvision";

export function NetvisionSolutionsSection() {
  return (
    <InfoCardsSection
      description="Собираем инфраструктуру вокруг реальных задач бизнеса: рабочие места, контроль, стабильная сеть и безопасный доступ."
      items={netvisionSolutions}
      title="Что мы внедряем"
    />
  );
}
