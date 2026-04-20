import { ListGridSection } from "../../components/common";
import { netvisionProblems } from "../../data/netvision";

export function NetvisionProblemsSection() {
  return (
    <ListGridSection
      columns="three"
      description="Инфраструктурные сбои редко выглядят как большая проблема сразу, но каждый простой мешает продажам, сервису и контролю."
      items={netvisionProblems}
      title="С какими проблемами сталкивается бизнес"
      tone="muted"
    />
  );
}
