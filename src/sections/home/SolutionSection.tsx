import { SplitListSection } from "../../components/common";
import { solutionPoints } from "../../data/home";

export function SolutionSection() {
  return (
    <SplitListSection
      description="Мы объединяем CRM, телефонию, мессенджеры и IT-инфраструктуру в единую систему. Вы видите все заявки, контролируете сотрудников и понимаете реальную картину бизнеса."
      items={solutionPoints}
      title="Наводим порядок в бизнесе с помощью систем"
      tone="surface"
    />
  );
}
