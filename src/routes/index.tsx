import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import {
  ADDRESS_CEP,
  ADDRESS_CITY,
  ADDRESS_LINE,
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  SERVICES,
  WHATSAPP_DISPLAY,
  serviceMessage,
  whatsappLink,
} from "@/lib/zaka";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbearia Zaka — Cortes e barba em Bertioga, SP" },
      {
        name: "description",
        content:
          "Barbearia Zaka no Centro de Bertioga: corte masculino, barba, sobrancelha e combo. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Barbearia Zaka — Bertioga, SP" },
      {
        property: "og:description",
        content: "Seu estilo do seu jeito. Cortes, barba e sobrancelha no Centro de Bertioga.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Barbearia Zaka",
          telephone: "+5513991489622",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Nove, 97",
            addressLocality: "Bertioga",
            addressRegion: "SP",
            postalCode: "11250-000",
            addressCountry: "BR",
          },
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

/* Placeholder until the original logo file is provided. */
function Logo({ size = 56 }: { size?: number }) {
  return (
    <span
      aria-label="Barbearia Zaka"
      className="grid shrink-0 place-items-center rounded-full border-2 border-foreground text-foreground"
      style={{ width: size, height: size }}
    >
      <span className="display text-[0.95em] italic" style={{ fontSize: size * 0.3 }}>
        Zaka
      </span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const bookLink = whatsappLink("Olá, Barbearia Zaka! Gostaria de agendar um horário.");
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3 md:px-10">
          <a href="#inicio" aria-label="Barbearia Zaka — início">
            <Logo size={52} />
          </a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={bookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-foreground/70 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary md:inline-flex"
          >
            <MessageCircle className="size-4 text-primary" /> Agendar horário
          </a>
          <button
            className="grid size-11 place-items-center md:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-movel"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>
      {/* Overlay lives outside the header: backdrop-blur makes the header a containing block for fixed children. */}
      <div
        id="menu-movel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex h-dvh flex-col bg-background transition-opacity duration-300 md:hidden ${
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-18 shrink-0 items-center justify-between border-b border-border px-5 py-3">
          <a href="#inicio" onClick={() => setOpen(false)} aria-label="Barbearia Zaka — início">
            <Logo size={52} />
          </a>
          <button
            className="grid size-11 place-items-center"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X className="size-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-8 pt-2" aria-label="Menu móvel">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="display flex min-h-16 shrink-0 items-center justify-between border-b border-border py-4 text-2xl"
            >
              <span>
                <span className="mr-4 text-sm text-primary">0{i + 1}</span>
                {n.label}
              </span>
              <ChevronRight className="size-5 text-muted-foreground" />
            </a>
          ))}
          <a
            href={bookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary py-4 font-semibold text-primary-foreground"
          >
            <MessageCircle className="size-5" /> Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border bg-surface-deep">
      <div
        aria-hidden
        className="display pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 -rotate-12 select-none text-[18rem] italic text-foreground/[0.04] md:block"
      >
        Zaka
      </div>
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-12 md:px-10 md:pb-28 md:pt-24">
        <p className="eyebrow animate-rise">Barbearia Zaka · Bertioga SP</p>
        <h1 className="display animate-rise mt-5 text-[3.1rem] sm:text-6xl md:text-[5.5rem]" style={{ animationDelay: "80ms" }}>
          Seu estilo
          <br />
          do <span className="text-primary">seu jeito.</span>
        </h1>
        <p className="animate-rise mt-5 max-w-sm text-base text-muted-foreground md:text-lg" style={{ animationDelay: "160ms" }}>
          Cortes, barba e cuidados que valorizam sua identidade.
        </p>
        <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
          <a
            href={whatsappLink("Olá, Barbearia Zaka! Gostaria de agendar um horário.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-5" /> Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/60 px-7 font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Ver serviços <ArrowRight className="size-4" />
          </a>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" /> Centro · Bertioga – SP
        </p>
        <div className="absolute bottom-10 right-10 hidden flex-col items-center gap-3 md:flex">
          <span className="eyebrow [writing-mode:vertical-rl]">Zaka</span>
          <span className="h-10 w-px bg-primary" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="servicos" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.6fr] md:gap-16 md:px-10 md:py-24">
        <div>
          <p className="eyebrow">Serviços</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">
            Nossos
            <br />
            <span className="text-primary">serviços</span>
          </h2>
          <p className="mt-5 max-w-xs text-muted-foreground">
            Cortes modernos, barba e cuidados personalizados. Toque em um serviço para consultar valores e agendar.
          </p>
        </div>
        <ul className="border-t border-border">
          {SERVICES.map((s, i) => {
            const isOpen = active === s.id;
            return (
              <li key={s.id} className="border-b border-border">
                <button
                  onClick={() => setActive(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 py-5 text-left md:grid-cols-[3.5rem_minmax(0,1fr)_auto]"
                >
                  <span className="display text-lg text-primary md:text-2xl">0{i + 1}</span>
                  <span className="min-w-0">
                    <span className="block font-semibold md:text-lg">{s.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{s.description}</span>
                  </span>
                  <ChevronRight
                    className={`size-5 text-muted-foreground transition-transform duration-300 group-hover:text-primary ${
                      isOpen ? "rotate-90 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-4 pb-6 pl-[3.25rem] sm:flex-row sm:items-center sm:justify-between md:pl-[4.25rem]">
                      <p className="text-sm text-muted-foreground">Valor e duração sob consulta.</p>
                      <a
                        href={whatsappLink(serviceMessage(s.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isOpen ? 0 : -1}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                      >
                        <MessageCircle className="size-4" /> Consultar pelo WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function About() {
  const items = [
    { icon: Scissors, text: "Ambiente organizado e confortável" },
    { icon: ShieldCheck, text: "Atendimento personalizado" },
    { icon: Star, text: "Experiência e profissionalismo" },
  ];
  return (
    <section id="sobre" className="border-b border-border bg-surface-deep">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_auto] md:items-center md:px-10 md:py-24">
        <div className="border-l border-primary pl-6">
          <p className="eyebrow">Sobre a Zaka</p>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            Mais que uma
            <br />
            barbearia, <span className="text-primary italic">é a Zaka.</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            A Barbearia Zaka nasceu com o propósito de oferecer mais do que um corte. Aqui, o foco é no detalhe, no
            atendimento e na sua satisfação. Seja bem-vindo.
          </p>
        </div>
        <ul className="space-y-6">
          {items.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-4">
              <Icon className="size-6 shrink-0 text-primary" strokeWidth={1.5} />
              <span className="max-w-[12rem] text-sm">{text}</span>
            </li>
          ))}
        </ul>
        <p className="eyebrow hidden border-l border-border pl-10 text-base text-foreground md:block">
          Estilo
          <br />é atitude.
          <span className="mt-3 block h-px w-20 bg-primary" />
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const rows = [
    { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP_DISPLAY, href: whatsappLink() },
    { icon: Clock, label: "Horário informado", value: HOURS, href: undefined },
    {
      icon: MapPin,
      label: "Endereço",
      value: `${ADDRESS_LINE}\n${ADDRESS_CITY}\n${ADDRESS_CEP}`,
      href: MAPS_URL,
    },
  ];
  return (
    <section id="contato" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.6fr_1fr] md:items-center md:px-10 md:py-20">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            Venha nos <span className="text-primary">visitar</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
            {rows.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <Icon className="size-6 shrink-0 text-primary" strokeWidth={1.5} />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold">{label}</span>
                    <span className="mt-1 block whitespace-pre-line text-sm text-muted-foreground">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 transition-colors hover:text-primary sm:px-5 sm:first:pl-0"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="flex gap-3 sm:px-5">
                  {inner}
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Confirme os dias de funcionamento pelo WhatsApp.</p>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-44 overflow-hidden rounded-md border border-border bg-card"
          aria-label="Ver localização no Google Maps"
        >
          <svg aria-hidden className="absolute inset-0 size-full text-foreground/10" preserveAspectRatio="none" viewBox="0 0 300 180">
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <path d="M0 40 L300 70 M0 120 L300 95 M60 0 L90 180 M180 0 L150 180 M240 0 L270 180 M0 160 L300 150" />
              <path d="M0 10 Q150 60 300 20" strokeWidth="3" />
            </g>
          </svg>
          <MapPin className="absolute left-[55%] top-[30%] size-7 fill-primary/20 text-primary" />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-foreground/60 bg-background px-4 py-2 text-sm transition-colors group-hover:border-primary group-hover:text-primary">
            Ver no mapa <ArrowRight className="size-4" />
          </span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <Logo size={56} />
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          @{INSTAGRAM_HANDLE} <Instagram className="size-5" />
        </a>
        <p className="text-xs text-muted-foreground md:text-right">
          <span className="block text-foreground">Bertioga – SP</span>
          Todos os direitos reservados. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
