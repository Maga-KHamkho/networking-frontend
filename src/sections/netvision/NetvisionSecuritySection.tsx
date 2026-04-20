import { SplitListSection } from "../../components/common";
import { netvisionSecurityPoints } from "../../data/netvision";

export function NetvisionSecuritySection() {
  return (
    <SplitListSection
      description="Мы предоставляем услуги аренды серверов и хостинга, а также настраиваем корпоративный VPN для безопасного доступа сотрудников ко всей сети компании."
      items={netvisionSecurityPoints}
      title="Серверные решения и безопасность"
      tone="surface"
    />
  );
}
