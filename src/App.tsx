import { FormEvent, ReactNode, useEffect, useState } from "react"
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom"
import {
  ArrowRightIcon,
  Building2Icon,
  CableIcon,
  CameraIcon,
  CheckIcon,
  HeadphonesIcon,
  MenuIcon,
  MessageCircleIcon,
  NetworkIcon,
  MailIcon,
  PhoneCallIcon,
  RadioTowerIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WorkflowIcon,
} from "lucide-react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Toaster } from "@/components/ui/sonner"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "главная" },
  { to: "/crm", label: "CRM" },
  { to: "/netvision", label: "netvision" },
  { to: "/#pricing", label: "тарифы", isAnchor: true },
  { to: "/contacts", label: "контакты" },
]

const stats = [
  { value: "5+", label: "лет на рынке" },
  { value: "40+", label: "проектов внедрения" },
  { value: "35", label: "компаний на сопровождении" },
]

const crmSteps = [
  "аудит текущих продаж и коммуникаций",
  "настройка CRM, воронок, ролей и отчетности",
  "интеграция IP-телефонии, мессенджеров и сайтов",
  "обучение команды и поддержка после запуска",
]

const crmPlatforms = [
  "битрикс24",
  "amoCRM",
  "мойкласс CRM",
  "YCLIENTS",
  "retailCRM",
  "мегаплан",
  "envyCRM",
  "roistat",
  "albato",
  "sipuni",
  "whatsapp",
  "telegram",
  "MAX",
  "IP-телефония",
  "виртуальная АТС",
  "аренда серверов",
  "VPS",
  "выделенные серверы",
  "облачная инфраструктура",
]

const services = [
  {
    title: "CRM и автоматизация",
    text: "настраиваем понятный контур продаж, задач, клиентов и управленческой аналитики.",
    icon: WorkflowIcon,
  },
  {
    title: "IP-телефония",
    text: "подключаем звонки к CRM, записи разговоров, маршрутизацию и контроль качества.",
    icon: PhoneCallIcon,
  },
  {
    title: "мессенджеры",
    text: "собираем обращения из whatsapp, telegram и других каналов в единый рабочий процесс.",
    icon: MessageCircleIcon,
  },
  {
    title: "сопровождение",
    text: "поддерживаем компании после запуска, дорабатываем процессы и закрываем техвопросы.",
    icon: HeadphonesIcon,
  },
  {
    title: "аренда серверов",
    text: "предоставляем серверные ресурсы для CRM, телефонии, сайтов и внутренних сервисов компании.",
    icon: ServerIcon,
  },
]

const netvisionServices = [
  {
    title: "видеонаблюдение",
    text: "проектирование, монтаж камер, настройка хранения и удаленного доступа.",
    icon: CameraIcon,
  },
  {
    title: "локальные сети",
    text: "прокладка СКС, коммутация, стойки, кабельный порядок и маркировка.",
    icon: CableIcon,
  },
  {
    title: "бесшовный Wi-Fi",
    text: "покрытие офисов, складов и коммерческих помещений без провалов связи.",
    icon: RadioTowerIcon,
  },
  {
    title: "IT-инфраструктура",
    text: "серверы, рабочие места, безопасность, резервирование и поддержка.",
    icon: NetworkIcon,
  },
]

const pricePlans = [
  {
    title: "CRM старт",
    price: "от 45 000 ₽",
    text: "быстрый запуск CRM для небольшого отдела продаж или сервиса.",
    items: ["аудит процесса", "воронка и карточки", "базовые роли", "обучение команды"],
  },
  {
    title: "интеграция продаж",
    price: "от 95 000 ₽",
    text: "CRM с телефонией, мессенджерами и понятной управленческой отчетностью.",
    items: ["IP-телефония", "мессенджеры", "автоматизации", "отчеты и дашборды"],
  },
  {
    title: "netvision объект",
    price: "по смете",
    text: "камеры, локальная сеть, Wi‑Fi и инфраструктура после выезда на объект.",
    items: ["обследование", "проектирование", "монтаж", "сопровождение"],
  },
]

const companyContacts = {
  networkingPhone: "+7 938 010 34 33",
  netvisionPhone: "+7 999 033 22 22",
  email: "office@nwi.su",
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" })
      }, 80)
      return
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname, hash])

  return null
}

function ScrollProgress() {
  useEffect(() => {
    const root = document.documentElement
    let frameId = 0

    const update = () => {
      const maxScroll = root.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      root.style.setProperty("--scroll-progress", String(Math.min(Math.max(progress, 0), 1)))
      frameId = 0
    }

    const requestUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
    }
  }, [])

  return <div className="scroll-progress" aria-hidden="true" />
}

function CustomCursor() {
  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!supportsFinePointer || prefersReducedMotion) {
      return
    }

    const cursor = document.createElement("div")
    cursor.className = "cursor-ring"
    document.body.appendChild(cursor)

    const handlePointerMove = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      cursor.classList.add("is-visible")
    }

    const handlePointerDown = () => cursor.classList.add("is-pressed")
    const handlePointerUp = () => cursor.classList.remove("is-pressed")
    const handleMouseOut = () => cursor.classList.remove("is-visible")

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("pointerup", handlePointerUp)
    document.documentElement.addEventListener("mouseleave", handleMouseOut)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("pointerup", handlePointerUp)
      document.documentElement.removeEventListener("mouseleave", handleMouseOut)
      cursor.remove()
    }
  }, [])

  return null
}

function SectionNavigator() {
  const { pathname } = useLocation()
  const [sections, setSections] = useState<Array<{ id: string; label: string }>>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-spy-section]"),
    )

    const items = elements.map((element, index) => {
      if (!element.id) {
        element.id = `section-${pathname.replace(/\W+/g, "-")}-${index}`
      }

      return {
        id: element.id,
        label: element.dataset.spyLabel || `раздел ${index + 1}`,
      }
    })

    setSections(items)
    setActiveId(items[0]?.id || "")

    if (!("IntersectionObserver" in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveId(visible.target.id)
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.12, 0.28, 0.45],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [pathname])

  if (sections.length < 2) {
    return null
  }

  return (
    <nav className="section-nav" aria-label="навигация по разделам">
      <div className="section-nav-track" />
      {sections.map((section) => (
        <a
          key={section.id}
          className={cn("section-nav-item", activeId === section.id && "is-active")}
          href={`#${section.id}`}
          aria-current={activeId === section.id ? "true" : undefined}
        >
          <span className="section-nav-dot" />
          <span className="section-nav-label">{section.label}</span>
        </a>
      ))}
    </nav>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollToTop />
      <Toaster richColors position="top-right" />
      <div className="mesh-line pointer-events-none fixed inset-0 opacity-35" />
      <div className="noise-layer pointer-events-none fixed inset-0" />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <SectionNavigator />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crm" element={<CrmPage />} />
          <Route path="/netvision" element={<NetvisionPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/58 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center">
            <img
              src="/logos/nwi-mark.svg"
              alt=""
              className="size-full rounded-full drop-shadow-[0_16px_32px_rgba(88,165,34,0.25)]"
              aria-hidden="true"
            />
          </span>
          <span className="flex -translate-y-px flex-col justify-center gap-0 leading-none">
            <img
              src="/logos/nwi-wordmark-dark.svg"
              alt="networking"
              className="h-5 w-36 object-contain object-left sm:h-6 sm:w-44"
            />
            <span className="-mt-0.5 text-sm font-medium leading-none text-muted-foreground sm:text-[15px]">
              IT-интегратор
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.isAnchor ? (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                    isActive && "bg-accent text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <Link to="/contacts#consultation">
              бесплатная консультация
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" variant="outline" size="icon">
              <MenuIcon />
              <span className="sr-only">открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>networking</SheetTitle>
              <SheetDescription>CRM, телефония, мессенджеры и IT-инфраструктура</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  {item.isAnchor ? (
                    <Link
                      to={item.to}
                      className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                          isActive && "bg-accent text-foreground",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Button asChild>
                <Link to="/contacts#consultation">бесплатная консультация</Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <AnimatedPage>
      <section id="home-hero" data-spy-section data-spy-label="главная" className="hero-media relative min-h-[760px] pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(7,16,13,0.92))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-24">
          <div className="flex flex-col justify-center gap-8">
            <Badge variant="outline" className="border-primary/35 bg-primary/10 text-primary">
              более 5 лет в интеграции CRM и IT-систем
            </Badge>
            <div className="flex flex-col gap-6">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
                networking
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-muted-foreground">
                внедряем CRM, IP-телефонию, мессенджеры и IT-инфраструктуру так, чтобы бизнес видел заявки, звонки, задачи и результат в одной системе.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contacts#consultation">
                  получить консультацию
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/crm">посмотреть CRM-внедрение</Link>
              </Button>
            </div>
          </div>

          <Card className="self-end">
            <CardHeader>
              <CardTitle>интегратор, который остается рядом после запуска</CardTitle>
              <CardDescription>
                мы собираем рабочий контур из CRM, коммуникаций и инфраструктуры, а затем сопровождаем команды в реальной эксплуатации.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-background/35 p-5">
                  <div className="text-4xl font-semibold text-primary">{item.value}</div>
                  <div className="mt-2 text-sm leading-5 text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Section
        id="home-directions"
        spyLabel="решения"
        eyebrow="направления"
        title="системы, которые связывают продажи и коммуникации"
        text="минимум лишних сущностей, максимум контроля над клиентским путем."
      >
        <AnimatedGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </AnimatedGrid>
      </Section>

      <Section
        id="home-approach"
        spyLabel="как работаем"
        eyebrow="подход"
        title="сначала бизнес-процесс, потом инструменты"
        text="не навешиваем технологии ради технологий. проектируем понятную систему, которую команда действительно использует."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              className="aspect-[4/3] w-full object-cover"
              src="/images/approach-meeting.jpg"
              alt="команда обсуждает внедрение CRM"
            />
          </div>
          <AnimatedGrid className="grid gap-4 sm:grid-cols-2">
            {crmSteps.map((step, index) => (
              <div key={step} className="glass-card rounded-3xl border p-6">
                <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  {index + 1}
                </div>
                <p className="text-lg font-medium leading-7">{step}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </Section>

      <PriceSection />

      <ConsultationBand id="home-consultation" spyLabel="консультация" />
    </AnimatedPage>
  )
}

function CrmPage() {
  return (
    <AnimatedPage>
      <PageHero
        id="crm-hero"
        spyLabel="CRM"
        badge="CRM внедрение"
        title="CRM, телефония и мессенджеры в одной рабочей системе"
        text="networking помогает компаниям убрать хаос из заявок, звонков и задач. внедряем CRM под реальные отделы продаж, сервис и руководство."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1500&q=85"
      />

      <CrmPlatformMarquee id="crm-platforms" spyLabel="CRM-системы" />

      <Section
        id="crm-scope"
        spyLabel="что входит"
        eyebrow="что входит"
        title="от аудита до поддержки"
        text="внедрение строится вокруг прозрачной воронки, быстрых коммуникаций и понятной отчетности."
      >
        <AnimatedGrid className="grid gap-4 md:grid-cols-2">
          {[
            ["аналитика", "разбираем путь клиента, источники заявок, роли сотрудников и точки потерь."],
            ["настройка CRM", "воронки, карточки, задачи, права доступа, отчеты и регламенты работы."],
            ["коммуникации", "подключаем IP-телефонию, мессенджеры, формы сайта и уведомления."],
            ["сопровождение", "помогаем команде освоиться, дорабатываем сценарии и поддерживаем стабильность."],
          ].map(([title, text]) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </AnimatedGrid>
      </Section>

      <Section
        id="crm-result"
        spyLabel="эффект"
        eyebrow="результат"
        title="руководитель видит картину, команда работает быстрее"
        text="каждый контакт, звонок, сообщение и задача получают понятный статус. это снижает потери заявок и делает продажи управляемыми."
      >
        <AnimatedGrid className="grid gap-4 lg:grid-cols-3">
          {["единая база клиентов", "контроль звонков и переписок", "отчеты по продажам"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/35 p-5">
              <CheckIcon className="text-primary" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </AnimatedGrid>
      </Section>

      <ConsultationBand id="crm-consultation" spyLabel="консультация" />
    </AnimatedPage>
  )
}

function NetvisionPage() {
  return (
    <AnimatedPage>
      <section id="netvision-hero" data-spy-section data-spy-label="netvision" className="netvision-media relative pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(7,16,13,0.95))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-7">
            <Badge variant="outline" className="border-primary/35 bg-primary/10 text-primary">
              подразделение networking
            </Badge>
            <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl">netvision</h1>
            <p className="text-xl leading-8 text-muted-foreground">
              камеры, сети, Wi-Fi и инфраструктура для офисов, коммерческих помещений и объектов, где связь и безопасность должны работать спокойно каждый день.
            </p>
            <Button asChild size="lg" className="w-fit">
              <Link to="/contacts#consultation">
                обсудить объект
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section
        id="netvision-services"
        spyLabel="инженерия"
        eyebrow="netvision"
        title="инженерная часть бизнеса под ключ"
        text="проектируем, монтируем и сопровождаем инфраструктуру, на которую опираются CRM, телефония, безопасность и рабочие места."
      >
        <AnimatedGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {netvisionServices.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </AnimatedGrid>
      </Section>

      <Section
        id="netvision-objects"
        spyLabel="объекты"
        eyebrow="объекты"
        title="аккуратный монтаж и понятная эксплуатация"
        text="после работ остаются не только работающие устройства, но и порядок: маркировка, доступы, схема подключения и понятный план обслуживания."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>для кого подходит</CardTitle>
              <CardDescription>
                офисы, магазины, склады, учебные центры, сервисные компании и любые площадки, где важно контролировать сеть, безопасность и рабочую технику.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["офисы", "ритейл", "склады", "сервисы", "образование", "госучреждения"].map((item) => (
                <Badge key={item} variant="secondary">{item}</Badge>
              ))}
            </CardContent>
          </Card>
          <AnimatedGrid className="grid gap-4">
            {["выезд на объект", "проектирование", "монтаж", "сопровождение"].map((item) => (
              <div key={item} className="rounded-2xl border border-border/70 bg-background/35 p-5 text-lg font-medium">
                {item}
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </Section>

      <ConsultationBand id="netvision-consultation" spyLabel="консультация" />
    </AnimatedPage>
  )
}

function ContactsPage() {
  return (
    <AnimatedPage>
      <section id="contacts-hero" data-spy-section data-spy-label="контакты" className="relative scroll-mt-28 pb-12 pt-32">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="glass-card flex h-full flex-col gap-5 rounded-[2rem] border p-5 sm:p-6">
            <div>
              <Badge variant="outline" className="border-primary/35 bg-primary/10 text-primary">
                контакты
              </Badge>
              <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">контакты</h1>
            </div>
            <div className="grid flex-1 auto-rows-fr gap-3">
              <ContactLine icon={<Building2Icon />} label="локация" value="Ингушетия, ул. Сулейменова, 41" />
              <PhoneContactGroup />
              <ContactLine
                icon={<MailIcon />}
                label="email"
                value={companyContacts.email}
                href={`mailto:${companyContacts.email}`}
              />
              <ContactLine icon={<MessageCircleIcon />} label="мессенджеры" value="whatsapp / telegram / MAX" />
            </div>
          </div>
          <ContactHeroMap />
        </div>
      </section>

      <section id="consultation" data-spy-section data-spy-label="заявка" className="relative scroll-mt-28 py-16">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="flex h-full flex-col justify-center">
            <Badge variant="outline" className="border-primary/35 bg-primary/10 text-primary">
              бесплатная консультация
            </Badge>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">оставьте заявку</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              опишите задачу в двух словах. мы покажем, какой контур внедрения подойдет, с чего начать и какие риски учесть.
            </p>
          </div>
          <div className="h-full">
            <ConsultationForm className="h-full" />
          </div>
        </div>
      </section>
    </AnimatedPage>
  )
}

function PrivacyPage() {
  return (
    <AnimatedPage className="relative pt-32">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <Badge variant="outline" className="w-fit border-primary/35 bg-primary/10 text-primary">
              документы
            </Badge>
            <CardTitle className="text-4xl leading-tight">политика обработки персональных данных</CardTitle>
            <CardDescription>
              настоящая политика описывает, как networking обрабатывает данные, которые пользователь оставляет в форме заявки на сайте.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 text-sm leading-7 text-muted-foreground">
            <p>
              пользователь, отправляя форму на сайте, соглашается на обработку указанных персональных данных: имени, телефона, названия компании, описания задачи и комментария.
            </p>
            <p>
              данные используются только для связи с пользователем, подготовки консультации, уточнения задачи и предложения услуг по CRM, телефонии, мессенджерам, видеонаблюдению и IT-инфраструктуре.
            </p>
            <p>
              networking не публикует персональные данные и не передает их третьим лицам без необходимости исполнения запроса пользователя, за исключением случаев, предусмотренных законодательством.
            </p>
            <p>
              пользователь может запросить уточнение, блокировку или удаление своих данных, обратившись через контакты, указанные на сайте.
            </p>
            <Separator />
            <p>
              текст является базовой редакцией для сайта и может быть дополнен реквизитами компании, контактным email и юридическими формулировками после их предоставления.
            </p>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  )
}

function CrmPlatformMarquee({
  id,
  spyLabel,
}: {
  id?: string
  spyLabel?: string
}) {
  const repeated = [...crmPlatforms, ...crmPlatforms]

  return (
    <section id={id} data-spy-section data-spy-label={spyLabel} className="relative scroll-mt-28 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Badge variant="outline" className="w-fit border-primary/35 bg-primary/10 text-primary">
            CRM и сервисы
          </Badge>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            подбираем CRM, мессенджеры, телефонию и серверную инфраструктуру под процессы компании.
          </p>
        </div>
      </div>
      <div className="full-bleed-marquee glass-card border-y py-5">
        <div className="marquee">
          <div className="marquee-track flex items-center gap-3 px-6">
            {repeated.map((platform, index) => (
              <span
                key={`${platform}-${index}`}
                className="rounded-full border border-border/80 bg-background/40 px-5 py-3 text-sm font-medium text-foreground"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PriceSection() {
  return (
    <Section
      id="pricing"
      spyLabel="тарифы"
      eyebrow="прайс"
      title="понятные стартовые ориентиры по услугам"
      text="финальная стоимость зависит от объема интеграций, количества сотрудников и состояния текущей инфраструктуры. на консультации быстро определим реальный коридор бюджета."
    >
      <AnimatedGrid className="grid gap-4 lg:grid-cols-3">
        {pricePlans.map((plan, index) => (
          <AnimatedCard
            key={plan.title}
            className={cn(
              "relative min-h-[26rem] overflow-hidden",
              index === 1 && "border-primary/45 shadow-[0_24px_80px_rgba(88,165,34,0.16)]",
            )}
          >
            <CardHeader>
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  {index === 2 ? <ShieldCheckIcon /> : <SparklesIcon />}
                </span>
                {index === 1 && <Badge>популярно</Badge>}
              </div>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.text}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-6">
              <div className="text-4xl font-semibold tracking-tight text-foreground">{plan.price}</div>
              <div className="flex flex-col gap-3">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckIcon className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant={index === 1 ? "default" : "outline"} className="mt-auto">
                <Link to="/contacts#consultation">рассчитать проект</Link>
              </Button>
            </CardContent>
          </AnimatedCard>
        ))}
      </AnimatedGrid>
    </Section>
  )
}

function AnimatedPage({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}

function AnimatedGrid({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}

function Section({
  id,
  spyLabel,
  eyebrow,
  title,
  text,
  children,
}: {
  id?: string
  spyLabel?: string
  eyebrow: string
  title: string
  text: string
  children: ReactNode
}) {
  return (
    <AnimatedSection id={id} spyLabel={spyLabel || eyebrow} className="relative scroll-mt-28 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-5 border-primary/35 bg-primary/10 text-primary">
            {eyebrow}
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p>
        </div>
        {children}
      </div>
    </AnimatedSection>
  )
}

function AnimatedSection({
  id,
  spyLabel,
  className,
  children,
}: {
  id?: string
  spyLabel?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} data-spy-section data-spy-label={spyLabel} className={className}>
      {children}
    </section>
  )
}

function PageHero({
  id,
  spyLabel,
  badge,
  title,
  text,
  image,
  aside,
}: {
  id?: string
  spyLabel?: string
  badge: string
  title: string
  text: string
  image?: string
  aside?: ReactNode
}) {
  return (
    <section id={id} data-spy-section data-spy-label={spyLabel || badge} className="relative scroll-mt-28 pt-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="flex flex-col justify-center gap-7">
          <Badge variant="outline" className="w-fit border-primary/35 bg-primary/10 text-primary">
            {badge}
          </Badge>
          <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl">{title}</h1>
          <p className="text-xl leading-8 text-muted-foreground">{text}</p>
          <Button asChild size="lg" className="w-fit">
            <Link to="/contacts#consultation">
              бесплатная консультация
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>
        {aside || (
          <div className="overflow-hidden rounded-[2rem]">
            <img className="aspect-[5/4] w-full object-cover" src={image} alt="" />
          </div>
        )}
      </div>
    </section>
  )
}

function ContactHeroMap() {
  return (
    <div className="glass-card h-full overflow-hidden rounded-[2rem] border">
      <iframe
        className="h-full min-h-[26rem] w-full border-0 grayscale-[0.12]"
        src="https://yandex.ru/map-widget/v1/?ll=44.755929%2C43.217798&mode=poi&poi%5Bpoint%5D=44.755737%2C43.217791&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D53549264706&z=17"
        title="карта networking"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

function FeatureCard({
  title,
  text,
  icon: Icon,
}: {
  title: string
  text: string
  icon: typeof WorkflowIcon
}) {
  return (
    <AnimatedCard className="min-h-64">
      <CardHeader>
        <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Icon />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{text}</CardDescription>
      </CardHeader>
    </AnimatedCard>
  )
}

function AnimatedCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="motion-card">
      <Card className={className}>{children}</Card>
    </div>
  )
}

function ConsultationBand({
  id,
  spyLabel,
}: {
  id?: string
  spyLabel?: string
}) {
  return (
    <section id={id} data-spy-section data-spy-label={spyLabel} className="relative scroll-mt-28 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card grid gap-8 rounded-[2rem] border p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="flex flex-col justify-center gap-5">
            <Badge variant="outline" className="w-fit border-primary/35 bg-primary/10 text-primary">
              старт проекта
            </Badge>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">покажем, как собрать систему под вашу задачу</h2>
            <p className="text-base leading-7 text-muted-foreground">
              оставьте заявку, а мы разберем текущий процесс и предложим понятный первый шаг.
            </p>
          </div>
          <ConsultationForm compact />
        </div>
      </div>
    </section>
  )
}

function ConsultationForm({
  compact = false,
  className,
}: {
  compact?: boolean
  className?: string
}) {
  const [pending, setPending] = useState(false)

  function handlePhoneInput(event: FormEvent<HTMLInputElement>) {
    const input = event.currentTarget
    const rawDigits = input.value.replace(/\D/g, "")
    if (!rawDigits) {
      input.value = ""
      return
    }

    const digits = rawDigits.replace(/^8/, "7").replace(/^7?/, "7").slice(0, 11)
    const rest = digits.slice(1)
    const partOne = rest.slice(0, 3)
    const partTwo = rest.slice(3, 6)
    const partThree = rest.slice(6, 8)
    const partFour = rest.slice(8, 10)

    let value = "+7"
    if (partOne) value += ` (${partOne}`
    if (partOne.length === 3) value += ")"
    if (partTwo) value += ` ${partTwo}`
    if (partThree) value += `-${partThree}`
    if (partFour) value += `-${partFour}`

    input.value = value
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "").trim()
    const phone = String(formData.get("phone") || "").trim()
    const message = String(formData.get("message") || "").trim()

    if (!name || !phone || !message) {
      toast.error("заполните имя, телефон и комментарий")
      return
    }

    setPending(true)
    window.setTimeout(() => {
      setPending(false)
      form.reset()
      toast.success("заявка принята", {
        description: "networking свяжется с вами для бесплатной консультации.",
      })
    }, 450)
  }

  return (
    <Card className={cn("py-0", className)}>
      <CardContent className="h-full p-5 sm:p-6">
        <form onSubmit={handleSubmit} className="flex h-full flex-col">
          <FieldGroup className="flex h-full flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor={compact ? "compact-name" : "name"}>имя</FieldLabel>
                <Input id={compact ? "compact-name" : "name"} name="name" placeholder="ваше имя" />
              </Field>
              <Field>
                <FieldLabel htmlFor={compact ? "compact-phone" : "phone"}>телефон</FieldLabel>
                <Input
                  id={compact ? "compact-phone" : "phone"}
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+7 (999) 999-99-99"
                  onInput={handlePhoneInput}
                />
              </Field>
            </div>
            <Field className="flex flex-1 flex-col">
              <FieldLabel htmlFor={compact ? "compact-message" : "message"}>комментарий</FieldLabel>
              <Textarea
                id={compact ? "compact-message" : "message"}
                name="message"
                placeholder="коротко опишите текущую ситуацию"
                className="min-h-32 flex-1"
              />
            </Field>
            <Button type="submit" size="lg" disabled={pending} className="mt-auto h-14 text-base shadow-[0_22px_60px_rgba(88,165,34,0.28)]">
              {pending ? "отправляем" : "оставить заявку"}
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex h-full min-h-[5.25rem] items-center gap-4 rounded-2xl border border-border/70 bg-background/35 px-5 py-4">
      <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
        {icon}
      </span>
      <span className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="font-medium">{value}</span>
      </span>
    </div>
  )

  if (href) {
    return (
      <a className="block h-full transition-transform hover:-translate-y-0.5" href={href}>
        {content}
      </a>
    )
  }

  return content
}

function PhoneContactGroup() {
  return (
    <div className="h-full min-h-[5.25rem] rounded-2xl border border-border/70 bg-background/35 px-5 py-4">
      <div className="flex h-full items-center gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <PhoneCallIcon />
        </span>
        <div className="grid flex-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <a
            className="flex flex-col gap-1 transition-colors hover:text-primary"
            href={`tel:${companyContacts.networkingPhone.replace(/\s/g, "")}`}
          >
            <span className="text-xs text-muted-foreground">networking</span>
            <span className="font-medium">{companyContacts.networkingPhone}</span>
          </a>
          <a
            className="flex flex-col gap-1 transition-colors hover:text-primary"
            href={`tel:${companyContacts.netvisionPhone.replace(/\s/g, "")}`}
          >
            <span className="text-xs text-muted-foreground">netvision</span>
            <span className="font-medium">{companyContacts.netvisionPhone}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-border/70 bg-background/65 py-10 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center">
              <img
                src="/logos/nwi-mark.svg"
                alt=""
                className="size-full rounded-full"
                aria-hidden="true"
              />
            </span>
            <img
              src="/logos/nwi-wordmark-dark.svg"
              alt="networking"
              className="h-5 w-36 object-contain object-left"
            />
          </Link>
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Button key={item.to} asChild variant="ghost" size="sm">
                <Link to={item.to}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <span>CRM, телефония, мессенджеры и IT-инфраструктура</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a className="transition-colors hover:text-foreground" href={`tel:${companyContacts.networkingPhone.replace(/\s/g, "")}`}>
                networking: {companyContacts.networkingPhone}
              </a>
              <a className="transition-colors hover:text-foreground" href={`tel:${companyContacts.netvisionPhone.replace(/\s/g, "")}`}>
                netvision: {companyContacts.netvisionPhone}
              </a>
              <a className="transition-colors hover:text-foreground" href={`mailto:${companyContacts.email}`}>
                {companyContacts.email}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <Link className="transition-colors hover:text-foreground" to="/privacy">
              политика обработки персональных данных
            </Link>
            <span>networking · 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
