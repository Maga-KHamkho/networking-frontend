import { ListGridSection } from "../../components/common";
import { clientProblems } from "../../data/home";

export function ProblemsSection() {
  return (
    <ListGridSection
      description="Эти проблемы обычно появляются не из-за людей, а из-за отсутствия единой системы работы с клиентами."
      items={clientProblems}
      title="Знакомо?"
    />
  );
}
