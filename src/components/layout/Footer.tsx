import { Link } from "react-router-dom";

import { Container, Text } from "../../shared/ui";

const footerLinks = [
  { label: "CRM", href: "/crm" },
  { label: "Netvision", href: "/netvision" },
  { label: "Кейсы", href: "/cases" },
  { label: "Консультация", href: "/consultation" },
  { label: "Контакты", href: "/contacts" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__about">
          <Text as="p" className="site-footer__brand">
            Нэтворкинг
          </Text>
          <Text muted size="sm">
            CRM, телефония и IT-инфраструктура для малого и среднего бизнеса.
          </Text>
        </div>
        <nav className="site-footer__nav" aria-label="Навигация в подвале">
          {footerLinks.map((item) => (
            <Link key={item.label} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
