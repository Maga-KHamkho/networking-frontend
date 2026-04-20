import { Link } from "react-router-dom";

import { ButtonLink, Container } from "../../shared/ui";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "CRM", href: "/crm" },
  { label: "Netvision", href: "/netvision" },
  { label: "Кейсы", href: "/cases" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link className="site-header__logo" to="/" aria-label="Нэтворкинг — на главную">
          Нэтворкинг
        </Link>
        <nav className="site-header__nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.label} className="site-header__link" to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink to="/consultation" size="sm" variant="primary">
          Записаться на консультацию
        </ButtonLink>
      </Container>
    </header>
  );
}
