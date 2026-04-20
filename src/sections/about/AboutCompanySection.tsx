import { SplitListSection } from "../../components/common";
import { aboutDirections } from "../../data/about";

export function AboutCompanySection() {
  return (
    <SplitListSection
      description="Нэтворкинг — IT-интегратор для малого и среднего бизнеса. Мы помогаем соединять процессы, коммуникации и инфраструктуру в понятную систему."
      items={aboutDirections}
      title="Чем занимается Нэтворкинг"
    />
  );
}
