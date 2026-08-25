import { createFileRoute } from "@tanstack/react-router";

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
      { property: "og:image", content: copperBlonde.url },
      { name: "twitter:image", content: copperBlonde.url },
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
    title: "Boja i balayage",
    text: "Balayage, airtouch, pramenovi i korekcije boje — meki prijelazi rađeni po tvojoj kosi.",
  },
  {
    title: "Šišanje i styling",
    text: "Ženska i muška šišanja, fen frizure i valovi koji drže cijeli dan.",
  },
  {
    title: "Svečane frizure",
    text: "Punđe, pletenice i svadbene frizure s detaljima — za vjenčanja i posebne prigode.",
  },
  {
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="VIDA Hairdressing logo" className="h-9 w-auto mix-blend-multiply" />
          </a>
          <nav className="hidden gap-8 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground md:flex">
            <a href="#usluge" className="transition-colors hover:text-foreground">Usluge</a>
            <a href="#galerija" className="transition-colors hover:text-foreground">Galerija</a>
            <a href="#radno-vrijeme" className="transition-colors hover:text-foreground">Radno vrijeme</a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">Kontakt</a>
          </nav>
          <a
            href="tel:+38515621695"
            className="border border-foreground px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            01 562 1695
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-[0.65rem] uppercase tracking-brand text-muted-foreground">
              Zagreb · Domašinečka 4
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              Kosa koja izgleda
              <span className="block italic">kao ti, samo bolje.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              VIDA Hairdressing je frizerski salon posvećen boji, njezi i preciznom
              rezu. Balayage, svečane frizure i tretmani obnove — u mirnom,
              svijetlom prostoru u kojem se ne žuri.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="tel:+38515621695"
                className="bg-foreground px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-primary-foreground transition-opacity hover:opacity-85"
              >
                Naruči se
              </a>
              <a
                href="https://www.instagram.com/vida_hairdressing/"
                target="_blank"
                rel="noreferrer"
                className="border border-foreground px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:bg-secondary"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={copperBlonde.url}
              alt="Bakreno plavi balayage rađen u salonu VIDA Hairdressing"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <img
              src={roseBob.url}
              alt="Rose gold bob frizura"
              className="absolute -bottom-8 -left-8 hidden w-40 border-8 border-background object-cover md:block"
            />
          </div>
        </section>

        <section id="usluge" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-4xl md:text-5xl">Usluge</h2>
            <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div key={s.title} className="bg-card p-7">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="galerija" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl">Naši radovi</h2>
            <a
              href="https://www.facebook.com/VidaHairdressing"
              target="_blank"
              rel="noreferrer"
              className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Facebook →
            </a>
          </div>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>img]:mb-4">
            {gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full break-inside-avoid object-cover transition-opacity hover:opacity-90"
              />
            ))}
          </div>
        </section>

        <section id="radno-vrijeme" className="border-t border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">Radno vrijeme</h2>
              <ul className="mt-8">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between border-b border-border py-3 text-sm"
                  >
                    <span className="uppercase tracking-[0.18em] text-muted-foreground">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div id="kontakt">
              <h2 className="font-display text-4xl md:text-5xl">Kontakt</h2>
              <dl className="mt-8 space-y-6 text-sm">
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Adresa</dt>
                  <dd className="mt-1">
                    <a
                      className="underline-offset-4 hover:underline"
                      href="https://maps.google.com/?q=Doma%C5%A1ine%C4%8Dka+ul.+4,+10000+Zagreb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Domašinečka ul. 4, 10000 Zagreb
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Telefon</dt>
                  <dd className="mt-1">
                    <a className="underline-offset-4 hover:underline" href="tel:+38515621695">
                      01 562 1695
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">E-mail</dt>
                  <dd className="mt-1">
                    <a
                      className="underline-offset-4 hover:underline"
                      href="mailto:vidahairdressing@gmail.com"
                    >
                      vidahairdressing@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Društvene mreže</dt>
                  <dd className="mt-1 flex gap-5">
                    <a
                      className="underline-offset-4 hover:underline"
                      href="https://www.instagram.com/vida_hairdressing/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                    <a
                      className="underline-offset-4 hover:underline"
                      href="https://www.facebook.com/VidaHairdressing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 border border-border">
                <iframe
                  title="Karta — VIDA Hairdressing, Domašinečka ul. 4, Zagreb"
                  src="https://www.google.com/maps?q=Doma%C5%A1ine%C4%8Dka%20ul.%204,%2010000%20Zagreb&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center">
          <img src={logo.url} alt="VIDA Hairdressing" className="h-8 w-auto mix-blend-multiply" />
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} VIDA Hairdressing · Zagreb
          </p>
        </div>
      </footer>
    </div>
  );
}
