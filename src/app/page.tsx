import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading, ButtonLink, Eyebrow } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { DemosSection } from "@/components/demos-section";
import { CertificationsBand } from "@/components/certifications-band";
import { IndustryStrip } from "@/components/industry-strip";
import { ReviewSlider } from "@/components/review-slider";
import { ServiceIndex, ServiceNavFootnote } from "@/components/service-nav";
import { AiServicesDeck } from "@/components/ai-services-deck";
import { HeroReel } from "@/components/hero-reel";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema } from "@/components/jsonld";
import {
  ArrowRight,
  IndustryIcon,
  WhatsAppIcon,
  SearchIcon,
  LayersIcon,
  MailIcon,
} from "@/components/icons";
import { getServices, services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { industryTileMedia } from "@/lib/industry-tile-media";
import { markets } from "@/lib/markets";
import { cities } from "@/lib/cities";
import { media } from "@/lib/media";
import { marqueeTech } from "@/lib/technologies";
import { getHeroSlides } from "@/lib/hero-reel";
import { siteConfig, whatsappLink } from "@/lib/site";
import { processSteps } from "@/lib/process";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = {
  title: {
    absolute: "Software Development Company in Pakistan | WordbitX",
  },
  description: siteConfig.seoDescription,
  alternates: { canonical: "/" },
  keywords: [
    "software development company",
    "software development company Pakistan",
    "website development company",
    "Shopify development Pakistan",
    "mobile app development Pakistan",
    "SEO services Pakistan",
    "digital marketing company Pakistan",
    "POS software Pakistan",
    "AI solutions",
  ],
  openGraph: {
    url: "/",
    title: "Software Development Company in Pakistan | WordbitX",
    description: siteConfig.seoDescription,
  },
};

const homeFaqs: Faq[] = [
  {
    question: "What services does WordbitX provide?",
    answer:
      "Custom software, websites, Shopify and WooCommerce, mobile apps, POS, CRM/ERP, SEO and digital marketing. Practical AI is available when a product needs it. Every service has its own page on /services.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We are based in Pakistan and work remotely with clients across the UK, US, UAE, Australia and Canada. Projects run with scheduled overlap hours, shared boards and weekly demo calls so time zones never become a bottleneck.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "With a short discovery conversation. We clarify goals, constraints and budget, then send a written scope with milestones, deliverables and a timeline. Development only begins once that document is agreed.",
  },
  {
    question: "Do we own the code and accounts?",
    answer:
      "Yes. Source code, repositories, hosting, domains and analytics accounts are yours. We deliver into your own accounts wherever possible so there is never a dependency on us to keep operating.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Every project includes a post-launch stabilisation window. After that, monthly support and maintenance plans cover updates, monitoring, security patching, and an agreed allowance for enhancements.",
  },
  {
    question: "Can you improve an existing website or app?",
    answer:
      "Often yes. We start with an audit of the current codebase, performance and analytics, then recommend targeted improvements or a phased rebuild — whichever gives better value for your situation.",
  },
  {
    question: "Do you publish client testimonials?",
    answer:
      "Named reviews and confidential screens go public only with written permission. Until then, inspect live demo websites, the project profiles on the portfolio, and ask for a private reference from the contact page. We do not invent testimonials, client logos or results.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on pages, modules and integrations. A small first phase can be modest; a POS or marketplace is not. Exact price is a written plan after discovery — not a public sticker. How we quote is on the WordbitX software development cost page.",
  },
  {
    question: "Is WordbitX hiring?",
    answer:
      "Yes. Software jobs in Pakistan are listed on the WordbitX careers page and opened the week of 15 September 2026. Apply with work you have shipped.",
  },
];

/**
 * Three differentiators, each with a link so this block still carries
 * internal links. The previous six argued overlapping points; the three
 * below are the ones a first-time visitor actually weighs.
 */
const whyCards = [
  {
    title: "Custom-built solutions",
    text: "Every build starts from your workflow and goals, not a purchased template adjusted to fit. You own the source code, repositories and accounts. Practical AI is added only when it removes real work.",
    href: "/services/custom-software-development",
    Icon: LayersIcon,
  },
  {
    title: "SEO & digital marketing",
    text: "Technical SEO, content, ads and conversion work so the websites and stores we ship can actually rank and sell — run by the same team that built them.",
    href: "/services/seo-services",
    Icon: SearchIcon,
  },
  {
    title: "Clear communication",
    text: "Weekly demos, one place where decisions are recorded, and a named point of contact for the whole engagement.",
    href: "/process",
    Icon: MailIcon,
  },
];

const homeServiceSlugs = [
  "web-development",
  "ecommerce-shopify",
  "ecommerce-development",
  "mobile-app-development",
  "pos-software",
  "seo-services",
  "digital-marketing",
  "ai-solutions",
];


export default function HomePage() {
  const homeServices = getServices(homeServiceSlugs);
  const heroSlides = getHeroSlides();


  return (
    <>

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pt-24 text-white sm:pt-32 lg:pt-36">
        <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
        <div className="absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full bg-brand-500/18 blur-[140px]" aria-hidden="true" />
        <div className="absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-sky-500/12 blur-[130px]" aria-hidden="true" />

        <div className="container-page relative">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <div className="animate-rise">
              <Eyebrow tone="dark">Pakistan-based · Software, SEO & marketing · Worldwide</Eyebrow>
              <h1 className="mt-5 text-[1.85rem] font-semibold leading-[1.1] sm:mt-6 sm:text-5xl lg:text-[3.5rem]">
                Software Development Company for{" "}
                <span className="text-gradient-brand">Businesses Worldwide</span>
              </h1>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
                WordbitX builds websites, apps, Shopify stores, POS and CRM/ERP — then grows them with SEO and digital
                marketing. Practical AI is available where it helps the workflow. Pakistan-based team, clients across
                the USA, UK, UAE, Canada, Australia and worldwide. You own the code.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <ButtonLink href="/contact">Start Your Project</ButtonLink>
                <ButtonLink href="/services" variant="ghost">
                  Explore Our Services
                </ButtonLink>
              </div>

              <nav aria-label="Core WordbitX software" className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[0.8rem] text-slate-400 sm:gap-x-4 sm:text-sm">
                <Link href="/services/custom-software-development" className="hover:text-brand-300">
                  Custom software
                </Link>
                <Link href="/services/web-development" className="hover:text-brand-300">
                  Web development
                </Link>
                <Link href="/services/ecommerce-shopify" className="hover:text-brand-300">
                  Shopify stores
                </Link>
                <Link href="/services/ecommerce-development" className="hover:text-brand-300">
                  E-commerce websites
                </Link>
                <Link href="/services/mobile-app-development" className="hover:text-brand-300">
                  Mobile apps
                </Link>
                <Link href="/services/seo-services" className="hover:text-brand-300">
                  SEO services
                </Link>
                <Link href="/services/digital-marketing" className="hover:text-brand-300">
                  Digital marketing
                </Link>
                <Link href="/services/ai-solutions" className="hover:text-brand-300">
                  AI solutions
                </Link>
                <Link href="/services/saas-application-development" className="hover:text-brand-300">
                  Business software
                </Link>
                <Link href="/industries" className="hover:text-brand-300">
                  Industries
                </Link>
                <Link href="/global" className="hover:text-brand-300">
                  Global markets
                </Link>
                <Link href="/portfolio" className="hover:text-brand-300">
                  Portfolio
                </Link>
                <Link href="/topics" className="hover:text-brand-300">
                  Topics
                </Link>
                <Link href="/pricing" className="hover:text-brand-300">
                  Pricing
                </Link>
                <Link href="/process" className="hover:text-brand-300">
                  Process
                </Link>
              </nav>

            </div>

            <div className="relative">
              <div className="animate-reveal relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-[0_50px_120px_-50px_rgba(0,0,0,0.9)] sm:rounded-3xl sm:p-2">
                <HeroReel slides={heroSlides} />
              </div>
              {/* "Built with" logo strip removed (owner, 11 Oct) — replaced by
                  a trust card with the engagement facts that actually
                  differentiate WordbitX (all from /process copy). */}
              <div className="animate-float absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-navy-900/90 p-4 backdrop-blur-xl sm:block">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Every engagement</p>
                <p className="mt-2 text-sm font-semibold text-white">You own the code, repo &amp; hosting</p>
                <p className="mt-1 text-xs text-slate-400">Written scope · weekly demos · staging URLs</p>
              </div>
            </div>

          </div>
        </div>

        {/* Hero stats — kept at the owner's request (10 Oct): these four
            counted figures read more trust-worthy right under the hero than
            further down. The duplicate ServiceRingFacts copy in the team
            section was removed instead. Same honest data: every value counted
            from the site's own records (services, industries, markets). */}
        <div className="container-page mt-10 sm:mt-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-8 sm:pt-8">
            {[
              { value: "2021", label: "Established · Lahore" },
              { value: String(services.length), label: "Services & solutions" },
              { value: String(industries.length), label: "Industries modelled" },
              { value: String(markets.length), label: "Countries served" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-slate-500">
            Numbers we can show — every service, industry and market links to its own page on this site.
          </p>
        </div>

        {/* Tech marquee sits flush at the hero's base (no bottom padding on
            the section) so its bottom hairline is the only divider before the
            "Built for" rail — the two strips read as one unit: what we build
            with, then who we build for. */}
        <div className="relative mt-10 border-y border-white/10 py-4 sm:mt-14 sm:py-5">
          <div className="marquee-mask overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-10">
              {[...marqueeTech, ...marqueeTech].map((tech, index) => (
                <span key={`${tech.name}-${index}`} className="flex items-center gap-2.5 opacity-70">
                  <TechGlyph item={tech} onDark sprite className="h-5 w-5" />
                  <span className="text-sm font-medium text-slate-300">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR RAIL — thirteen industry links flush against the hero's base.
          "Is this for my business?" is the first question a visitor has, and
          the block that answers it properly still sits ten screens down. This
          puts the answer, and thirteen high-intent internal links, at the top
          of the page for the cost of one line of text. */}
      <IndustryStrip />

      {/* CERTIFICATIONS — dark band under the hero, the way Lahore peers
          (Rextech) surface their SECP/FBR registration marks. */}
      <CertificationsBand />

      {/* ================= WHY US =================
          Sits above the services grid at the owner's request. Left: the real
          seven-stage delivery process (same data as /process); right: the six
          capability cards. No stock team illustrations — fake faces under
          this headline would undercut the point. */}
      <section className="defer-paint relative overflow-hidden bg-navy-950 py-12 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
        <div className="absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full bg-brand-500/18 blur-[140px]" aria-hidden="true" />
        <div className="absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-sky-500/12 blur-[130px]" aria-hidden="true" />
        <div className="container-page relative z-10">
          <SectionHeading
            tone="dark"
            eyebrow="Inside WordbitX"
            title="The team that will actually build your product"
            description="Not a sales desk that hands your project to someone else. The engineers who scope your product are the ones who build it and stay on it — an embedded product team that questions requirements, proposes the simplest thing that works, and leaves you a system you can run and extend without us."
          />
          <div className="mt-10">
            {/* Studio collage (owner's company visuals, 11 Oct): four branded
                office shots — the pink-dupatta workspace shot removed and the
                reception moved first, at the owner's direction. The seven-stage
                process panel that used to share this row now lives only in the
                compact #process strip below and on /process. */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="image-sheen relative row-span-2 overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.75)]">
                <Image
                  src={media.whoWeAreStudio}
                  alt="WordbitX studio, Lahore — reception with the WordbitX brand wall"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-[center_30%] transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="image-sheen relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.75)]">
                <Image
                  src={media.teamOffice}
                  alt="WordbitX studio, Lahore — lounge with the Ideas, Code, Impact wall"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="image-sheen relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.75)]">
                <Image
                  src={media.studioMeeting}
                  alt="WordbitX studio, Lahore — sprint review in the conference room"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="image-sheen relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.75)]">
                <Image
                  src={media.wordbitxStudio}
                  alt="WordbitX studio, Lahore — team collaborating by the brand wall"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {whyCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="pillar-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900 p-5 hover:border-brand-400/40 hover:shadow-[0_24px_55px_-28px_rgba(28,168,48,0.45)]"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/25 transition-transform duration-1000 group-hover:scale-105">
                      <card.Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-4 text-base font-semibold text-white transition-colors group-hover:text-brand-200">
                      {card.title}
                    </h3>
                    <p className="relative mt-1.5 flex-1 text-sm leading-relaxed text-slate-400">{card.text}</p>
                    <span className="relative mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-sm font-semibold text-brand-300 transition-colors group-hover:text-brand-200">
                        Explore {card.title}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-brand-300 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
                        <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/about" variant="ghost">
                  About WordbitX
                </ButtonLink>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-400/50 hover:bg-white/[0.08]"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Quick WhatsApp chat
                </a>
              </div>
        </div>
      </section>

      {/* ================= WHAT WE DO =================
          Services grid, then the 16-service ring as its navigator. The ring
          used to sit four sections lower behind its own trust heading. */}
      <AiServicesDeck>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-400/10 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              What We Do
            </span>
            <h2 className="mt-4 text-[1.65rem] font-semibold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              Software, stores, SEO and marketing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Custom software, websites, Shopify, e-commerce, web and mobile — then SEO and ads so those products can
              grow. Practical AI is there when a workflow needs it. The full catalogue lives on the services index.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex w-fit shrink-0 items-center gap-2 self-start rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-400/40 hover:bg-white/[0.08] lg:self-auto"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {homeServices.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              premium
            />
          ))}
        </div>

        {/* This slot has been a rotating ring, then a honeycomb. Both were
            pictures of a catalogue. It is now the catalogue: twenty-four
            service pages linked by their real names, which is what a reader
            scans and what a crawler reads as anchor text. */}
        <div className="mt-16 border-t border-white/10 pt-16 sm:mt-20 sm:pt-20">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">The full service index</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            Twenty-four of our {services.length} service lines, grouped the way a business thinks about them. Every
            line opens its own page.
          </p>
          <div className="mt-10">
            <ServiceIndex />
          </div>
          <ServiceNavFootnote className="mt-10" />
        </div>
      </AiServicesDeck>

      {/* ================= PROOF =================
          Order (owner-approved arrangement, 2026-10-08): live demos, then
          industries (fit) inserted between the two card blocks so the four
          back-to-back card sections get one topic change in the middle,
          then project profiles, then the mid-page CTA and reviews. */}
      <DemosSection />

      {/* ================= WHO IT'S FOR =================
          Solutions and Industries overlapped on four entries (real estate,
          healthcare, education, e-commerce) while sitting six sections
          apart. One section, two sub-blocks.

          Sub-block order is sector tiles first, platform cards second, and
          that order is load-bearing:
           - The section heading promises industries ("the industries we
             already understand") and its description is pure sector language
             — plot files, batch and expiry, jewellery pricing, fee vouchers.
             Opening with six platform cards answered a question the heading
             had not asked, and pushed the tiles 2,042px below their own H2.
           - Funnel order is broad then narrow: thirteen sectors ("is my
             business here?") before the platform we would actually hand you.
           - The tiles are dark photography, so leading with them gives this
             light section a visual opening even though #portfolio below it
             is also light. That is why neither section needed a tone change.

          Position: moved ahead of #portfolio so the flow reads
          capability → fit → proof; it still sits above #reviews, which
          matters because sector fit is a higher-intent question than
          social proof. */}
      <Section id="industries" className="pt-10 sm:pt-12 lg:pt-14">
        {/* One heading, not two. This section used to open with a centred H2
            and then immediately a second eyebrow + H3 + description before
            anything was shown — 299px of stacked headings that said the same
            thing twice ("the industries we already understand" / "workflows
            we have already modelled"). Merged into one left-aligned block so
            the tiles start 400px earlier. */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Industries & Solutions"
            title="Software for the industries we already understand"
            description="Plot files and instalment plans, batch and expiry control, weight-based jewellery pricing, fee vouchers, offline billing — workflows we have already modelled, so discovery starts shorter and launch comes sooner."
          />
          {/* Left-aligning the heading freed the right half of the row. The
              same heading-plus-button row that #demos and #portfolio already
              use fills it, instead of leaving a column of white. */}
          <ButtonLink href="/industries" variant="secondary" className="shrink-0">
            All {industries.length} industries
          </ButtonLink>
        </div>

        <div>
        {/* Photo tiles rather than icon rows. Every industry already carries
            an `image` for its own page, so this costs no new asset — it just
            stops the richest thing we own from being invisible on the home
            page. The thirteenth tile leaves a ragged row at every breakpoint,
            so the "all industries" link is the fourteenth tile and spans
            whatever is left: 1 column at sm, 2 at lg, 3 at xl. */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group animate-reveal relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200 bg-navy-900 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_30px_60px_-34px_rgba(5,13,33,0.65)]"
            >
              <Image
                src={industryTileMedia[industry.slug].src}
                alt={industryTileMedia[industry.slug].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/5 transition-opacity duration-500 group-hover:from-navy-950 group-hover:via-navy-950/70"
              />
              <span className="relative p-5">
                <span className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-200 ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-400">
                    <IndustryIcon name={industry.slug} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-white">{industry.name}</h3>
                </span>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-300">{industry.tagline}</p>
              </span>
            </Link>
          ))}

          <Link
            href="/industries"
            className="group relative flex min-h-[9rem] flex-col justify-end overflow-hidden rounded-2xl border border-dashed border-brand-300/60 bg-brand-50/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-50 lg:col-span-2 xl:col-span-3"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">Every sector</span>
            <span className="mt-2 flex items-center gap-2 text-lg font-semibold text-ink-900">
              All {industries.length} industry briefs
              <ArrowRight className="h-4 w-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="mt-1 text-sm leading-relaxed text-ink-500">
              Each one lists the workflows, modules and integrations we have already modelled for that sector.
            </span>
          </Link>
        </div>
        </div>
      </Section>

      {/* Mid-page CTA — the page is long enough that a visitor convinced by
          the proof above should not have to scroll through four more
          sections to reach the ask. */}
      <Section id="reviews" tone="muted">
        <ReviewSlider />
      </Section>

      {/* Mid-page CTA now sits AFTER the reviews (owner-approved audit fix,
          11 Oct): proof → social proof → ask. */}
      <section className="bg-navy-950 py-10 sm:py-12">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Have a project in mind?
            </h2>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-400">
              Tell us what you need — a real engineer replies within one business day.
            </p>
          </div>
          <ButtonLink href="/contact" className="shrink-0">
            Discuss Your Project
          </ButtonLink>
        </div>
      </section>

      {/* ================= MARKETS =================
          The sphere was its own dark section titled "WordbitX is trusted to
          deliver excellence worldwide", three sections from the ring's
          "WordbitX is trusted to deliver work you can inspect". It is a globe
          with six market chips, so it belongs here as the Markets artwork. */}
      <Section id="markets" tone="dark">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="Global Markets"
            title="Software teams for Pakistan, USA, UK, UAE, Canada and Australia"
            description="Pakistan is the operating base, and we build for clients across the United States, United Kingdom, United Arab Emirates, Canada and Australia. Each market page covers timezone overlap, collaboration and the software work that usually comes from that region."
          />
          <ButtonLink href="/global" variant="ghost" className="shrink-0">
            All markets
          </ButtonLink>
        </div>

        {/* Pakistan is the base market and the one with real city-level
            search demand. Each city page is written from that city's own
            industrial base — see src/lib/cities.ts for why we did not
            generate them from a template. */}
        <div className="mt-12 border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">And eleven cities inside Pakistan</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            A Sialkot exporter and a Quetta trader need completely different software. Each city page covers that
            market&apos;s real industries, its commercial districts and what businesses there actually ask us to build.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/software-house/${city.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-brand-400/40 hover:bg-white/[0.08] hover:text-white"
              >
                {city.h1}
                <ArrowRight className="h-3.5 w-3.5 text-brand-300 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= HOW WE WORK ================= */}
      <Section id="process" tone="muted">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="How We Work"
            title="Software delivery process from discovery to launch"
            description="Seven stages — discovery, strategy, design, development, testing, launch and support — each with a defined output you review before the next begins."
          />
          <ButtonLink href="/process" variant="secondary" className="shrink-0">
            Full process
          </ButtonLink>
        </div>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.slice(0, 4).map((step, index) => (
            <li
              key={step.step}
              className={`group hover-sheen animate-reveal relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-[0_28px_60px_-38px_rgba(5,13,33,0.5)] ${
                index === processSteps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-brand-500/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-500/30 lg:block"
              >
                <ArrowRight className="h-10 w-10" />
              </span>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.16em] text-brand-500">{step.step}</span>
                <span className="text-brand-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we are asked before every project"
            description="If your question is not answered here, message us and you will get a direct reply — not a brochure."
          />
          <div>
            <FaqAccordion faqs={homeFaqs} />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Ask a question</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                Software development cost
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
      <FaqSchema faqs={homeFaqs} />
    </>
  );
}
