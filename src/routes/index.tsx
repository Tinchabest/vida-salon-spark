import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import logo from "@/assets/logo.jpg.asset.json";
import blondeBalayage from "@/assets/work-blonde-balayage.jpg.asset.json";
import braidedUpdo from "@/assets/work-braided-updo.jpg.asset.json";
import bridalPearls from "@/assets/work-bridal-pearls.jpg.asset.json";
import brondeWaves from "@/assets/work-bronde-waves.jpg.asset.json";
import copperBlonde from "@/assets/work-copper-blonde.jpg.asset.json";
import mauveWaves from "@/assets/work-mauve-waves.jpg.asset.json";
import roseBob from "@/assets/work-rose-bob.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIDA Hairdressing — Frizerski salon u Zagrebu" },
      {
        name: "description",
        content:
          "Frizerski salon VIDA Hairdressing, Domašinečka ul. 4, Zagreb. Balayage, bojanje, šišanje i svečane frizure. Naruči se na 01 562 1695.",
      },
      { property: "og:title", content: "VIDA Hairdressing — Frizerski salon u Zagrebu" },
      {
        property: "og:description",
        content:
          "Balayage, bojanje, šišanje i svečane frizure u srcu Zagreba. Domašinečka ul. 4.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "hr_HR" },
      { property: "og:image", content: copperBlonde.url },
      { name: "twitter:image", content: copperBlonde.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "VIDA Hairdressing",
          description:
            "Frizerski salon u Zagrebu — balayage, bojanje, šišanje, svečane i svadbene frizure te tretmani njege kose.",
          image: copperBlonde.url,
          telephone: "+38515621695",
          email: "vidahairdressing@gmail.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Domašinečka ul. 4",
            addressLocality: "Zagreb",
            postalCode: "10000",
            addressCountry: "HR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 45.8036,
            longitude: 16.0048,
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "13:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "15:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "13:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "13:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "16:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
          ],
          areaServed: { "@type": "City", name: "Zagreb" },
        }),
      },
    ],
  }),
  component: Index,
});

const hours = [
  { day: "Ponedjeljak", time: "13:00 – 21:00" },
  { day: "Utorak", time: "08:00 – 15:00" },
  { day: "Srijeda", time: "13:00 – 21:00" },
  { day: "Četvrtak", time: "13:00 – 21:00" },
  { day: "Petak", time: "08:00 – 16:00" },
  { day: "Subota", time: "08:00 – 13:00" },
  { day: "Nedjelja", time: "Zatvoreno" },
];

const services = [
  {
    n: "01",
    title: "Boja i balayage",
    text: "Balayage, airtouch, pramenovi i korekcije boje — meki prijelazi rađeni po tvojoj kosi.",
  },
  {
    n: "02",
    title: "Šišanje i styling",
    text: "Ženska i muška šišanja, fen frizure i valovi koji drže cijeli dan.",
  },
  {
    n: "03",
    title: "Svečane frizure",
    text: "Punđe, pletenice i svadbene frizure s detaljima — za vjenčanja i posebne prigode.",
  },
  {
    n: "04",
    title: "Njega kose",
    text: "Tretmani obnove, hidratacije i zaštite boje profesionalnom kozmetikom.",
  },
];

const gallery = [
  { src: copperBlonde.url, alt: "Bakreno plavi balayage na dugoj valovitoj kosi" },
  { src: roseBob.url, alt: "Rose gold bob s valovima" },
  { src: bridalPearls.url, alt: "Svadbena punđa s bisernim ukosnicama" },
  { src: blondeBalayage.url, alt: "Svijetlo plavi balayage na dugoj kosi" },
  { src: mauveWaves.url, alt: "Mauve ljubičasti tonovi na valovitoj kosi" },
  { src: brondeWaves.url, alt: "Bronde balayage s mekim valovima" },
  { src: braidedUpdo.url, alt: "Pletena svečana punđa na tamnoj kosi" },
];

const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#galerija", label: "Galerija" },
  { href: "#radno-vrijeme", label: "Radno vrijeme" },
  { href: "#kontakt", label: "Kontakt" },
];

function Index() {
  const todayIdx = (new Date().getDay() + 6) % 7;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="VIDA Hairdressing logo"
              className="h-9 w-auto mix-blend-multiply"
            />
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+38515621695"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">01 562 1695</span>
            <span className="sm:hidden">Nazovi</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-accent/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-[-12rem] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.05fr_1fr] md:py-24">
            <div className="rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                Zagreb · Domašinečka 4
              </span>
              <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl">
                Kosa koja izgleda
                <span className="block bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                  kao ti, samo bolje.
                </span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                VIDA Hairdressing je frizerski salon posvećen boji, njezi i preciznom
                rezu. Balayage, svečane frizure i tretmani obnove — u mirnom,
                svijetlom prostoru u kojem se ne žuri.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="tel:+38515621695"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Naruči se <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#galerija"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Pogledaj radove
                </a>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-7">
                {[
                  ["15+", "godina iskustva"],
                  ["4.9", "prosječna ocjena"],
                  ["100%", "posvećenost"],
                ].map(([v, k]) => (
                  <div key={k}>
                    <dt className="font-display text-2xl">{v}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{k}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative rise">
              <div className="overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src={copperBlonde.url}
                  alt="Bakreno plavi balayage rađen u salonu VIDA Hairdressing"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-background shadow-soft md:block">
                <img src={roseBob.url} alt="Rose gold bob frizura" className="aspect-square w-full object-cover" />
              </div>
              <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur lg:block">
                <p className="text-xs text-muted-foreground">Danas</p>
                <p className="text-sm font-medium">{hours[todayIdx]?.time}</p>
              </div>
            </div>
          </div>
        </section>

        {/* USLUGE */}
        <section id="usluge" className="border-y border-border surface-grad">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Usluge</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Sve za kosu, na jednom mjestu</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-xs font-medium tracking-widest text-primary">{s.n}</span>
                  <h3 className="mt-4 text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIJA */}
        <section id="galerija" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Galerija</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Naši radovi</h2>
          </div>
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>figure]:mb-5">
            {gallery.map((g) => (
              <figure
                key={g.src}
                className="break-inside-avoid overflow-hidden rounded-3xl"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </figure>
            ))}
          </div>
        </section>

        {/* RADNO VRIJEME + KONTAKT */}
        <section id="radno-vrijeme" className="border-t border-border surface-grad">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="h-4 w-4" />
                <p className="text-xs font-medium uppercase tracking-[0.2em]">Radno vrijeme</p>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl">Kad smo tu za tebe</h2>
              <ul className="mt-7">
                {hours.map((h, i) => (
                  <li
                    key={h.day}
                    className={`flex items-baseline justify-between rounded-xl px-3 py-3 text-sm ${
                      i === todayIdx ? "bg-secondary font-medium" : ""
                    }`}
                  >
                    <span className={i === todayIdx ? "" : "text-muted-foreground"}>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="kontakt" className="rounded-3xl border border-border bg-card p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Kontakt</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Javi nam se</h2>
              <div className="mt-7 space-y-3">
                <a
                  className="flex items-start gap-3 rounded-2xl border border-border p-4 text-sm transition-colors hover:bg-secondary"
                  href="https://maps.google.com/?q=Doma%C5%A1ine%C4%8Dka+ul.+4,+10000+Zagreb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Domašinečka ul. 4, 10000 Zagreb
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 text-sm transition-colors hover:bg-secondary"
                  href="tel:+38515621695"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" /> 01 562 1695
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 text-sm transition-colors hover:bg-secondary"
                  href="mailto:vidahairdressing@gmail.com"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" /> vidahairdressing@gmail.com
                </a>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Karta — VIDA Hairdressing, Domašinečka ul. 4, Zagreb"
                  src="https://www.google.com/maps?q=Doma%C5%A1ine%C4%8Dka%20ul.%204,%2010000%20Zagreb&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-8 py-16 text-center text-primary-foreground">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
            <h2 className="relative text-3xl sm:text-5xl">Rezerviraj svoj termin</h2>
            <p className="relative mx-auto mt-4 max-w-md text-sm opacity-80">
              Nazovi nas i dogovorimo termin koji tebi odgovara.
            </p>
            <a
              href="tel:+38515621695"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> 01 562 1695
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:px-8">
          <img src={logo.url} alt="VIDA Hairdressing" className="h-8 w-auto mix-blend-multiply" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VIDA Hairdressing · Zagreb
          </p>
        </div>
      </footer>
    </div>
  );
}
