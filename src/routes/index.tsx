import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  CreditCard,
  Globe2,
  Heart,
  LockKeyhole,
  Mail,
  MapPinned,
  ShieldCheck,
  Sparkles,
  ZoomIn,
} from "lucide-react";

import afghanistanSample from "@/assets/afghanistan-sample.webp.asset.json";
import algeriaSample from "@/assets/algeria-sample.webp.asset.json";
import austriaSample from "@/assets/austria-sample.webp.asset.json";
import brazilHistorySample from "@/assets/brazil-history-sample.webp.asset.json";
import canadaActivity from "@/assets/canada-activity.webp.asset.json";
import collectionPortrait from "@/assets/collection-portrait.webp.asset.json";
import collectionWide from "@/assets/collection-wide.webp.asset.json";
import countryPagesSpread from "@/assets/country-pages-spread.webp.asset.json";
import flagMemoryGame from "@/assets/flag-memory-game.webp.asset.json";
import flagsAlbumSample from "@/assets/flags-album-sample.webp.asset.json";
import heritageWordSearch from "@/assets/heritage-word-search.webp.asset.json";
import missionBrazil from "@/assets/mission-brazil.webp.asset.json";
import primaryCollectionCover from "@/assets/main-collection-cover.png.asset.json";
import smallExplorerBook from "@/assets/small-explorer-book.webp.asset.json";
import surpriseBonus from "@/assets/surprise-bonus.webp.asset.json";
import testimonialChris from "@/assets/testimonial-chris.webp.asset.json";
import testimonialHeloisa from "@/assets/testimonial-heloisa.webp.asset.json";
import testimonialLaura from "@/assets/testimonial-laura.webp.asset.json";
import worldFlagsBookDetail from "@/assets/world-flags-book-detail.webp.asset.json";
import worldQuiz from "@/assets/world-quiz.webp.asset.json";
import zumbiCard from "@/assets/zumbi-card.webp.asset.json";
import {
  collectionBonuses,
  faqItems,
  learningBenefits,
  salesPageFacts,
} from "@/lib/sales-page-content";

const testimonials = [
  {
    src: testimonialLaura.url,
    alt: "Depoimento de família mostrando o material Missão Volta ao Mundo",
  },
  {
    src: testimonialChris.url,
    alt: "Depoimento sobre a coleção de atividades e bandeiras",
  },
  {
    src: testimonialHeloisa.url,
    alt: "Depoimento sobre o material educativo para crianças",
  },
];

const activitySamples = [
  {
    src: austriaSample.url,
    alt: "Página do livro com Áustria, Azerbaijão, Bahamas e Bahrein",
    label: "Bandeiras",
  },
  {
    src: algeriaSample.url,
    alt: "Página do livro com Argélia, Argentina, Armênia e Austrália",
    label: "Bandeiras",
  },
  {
    src: afghanistanSample.url,
    alt: "Página do livro com Afeganistão, África do Sul, Albânia e Alemanha",
    label: "Bandeiras",
  },
  {
    src: canadaActivity.url,
    alt: "Atividade sobre o Canadá com bandeira, mapa e curiosidades",
    label: "Países",
  },
  {
    src: countryPagesSpread.url,
    alt: "Páginas internas do Livro Missão Volta ao Mundo com países e bandeiras",
    label: "Países",
  },
  {
    src: flagsAlbumSample.url,
    alt: "Página do Álbum de Bandeiras do Mundo com bandeiras em ordem alfabética",
    label: "Bandeiras",
  },
  {
    src: brazilHistorySample.url,
    alt: "Atividade infantil sobre o Brasil antes de 1500",
    label: "Histórias",
  },
  {
    src: heritageWordSearch.url,
    alt: "Caça-palavras sobre heranças africanas na cultura brasileira",
    label: "Jogos",
  },
];

const bonusImages: Record<(typeof collectionBonuses)[number]["image"], string> = {
  missionPortugalBrasil: "/images/bonus-portugal-brasil-world.svg",
  flagsAlbum: flagsAlbumSample.url,
  canadaActivity: canadaActivity.url,
  memoryGame: flagMemoryGame.url,
  worldFigures: "/images/bonus-personagens-mundo.svg",
  worldHistoryGames: "/images/bonus-jogos-historia-mundo.svg",
  worldExplorer: "/images/bonus-pequeno-explorador-mundo.svg",
  surprise: surpriseBonus.url,
};

function CheckoutLink({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <a className={className} href="#botao-principal">
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Missão Volta ao Mundo | Atividades sobre 195 países para crianças",
      },
      {
        name: "description",
        content:
          "Coleção digital com atividades, bandeiras, capitais, moedas, jogos e descobertas sobre 195 países. Material educativo para baixar e imprimir.",
      },
      {
        property: "og:title",
        content: "Missão Volta ao Mundo | Atividades sobre 195 países para crianças",
      },
      {
        property: "og:description",
        content:
          "Uma aventura educativa por 195 países, com bandeiras, capitais, moedas, jogos e atividades para crianças.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [activeActivity, setActiveActivity] = useState<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const revealTargets = document.querySelectorAll<HTMLElement>(
      ".sales-page section .section-heading, .sales-page section .feature-copy, .sales-page section .feature-image, .sales-page section .rating-strip, .sales-page section .testimonial-image, .sales-page section .activity-sample, .sales-page section .comparison-panel, .sales-page section .learning-item, .sales-page section .bonus-card, .sales-page section .offer-card, .sales-page section .security-item, .sales-page section .faq-item, .sales-page section .world-overview-copy, .sales-page section .world-overview-image",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 65}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeActivity === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveActivity(null);
      if (event.key === "ArrowLeft") {
        setActiveActivity((current) =>
          current === null
            ? 0
            : (current - 1 + activitySamples.length) % activitySamples.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveActivity((current) =>
          current === null ? 0 : (current + 1) % activitySamples.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeActivity]);

  const visibleTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 2);
  const visibleActivities = showAllActivities
    ? activitySamples
    : activitySamples.slice(0, 4);
  const selectedActivity =
    activeActivity === null ? undefined : activitySamples[activeActivity];

  return (
    <main className="sales-page">
      <div className="promo-ribbon" role="region" aria-label="Condição especial de fim de ano">
        <div className="promo-ribbon-track">
          <p><span aria-hidden="true">✦</span> Condição especial de fim de ano — válida até {salesPageFacts.campaignDeadline} <span aria-hidden="true">✦</span></p>
          <p aria-hidden="true"><span>✦</span> Condição especial de fim de ano — válida até {salesPageFacts.campaignDeadline} <span>✦</span></p>
          <p aria-hidden="true"><span>✦</span> Condição especial de fim de ano — válida até {salesPageFacts.campaignDeadline} <span>✦</span></p>
        </div>
      </div>

      <section className="hero-section">
        <div className="content-wrap hero-content">
          <p className="hero-kicker">
            <Globe2 aria-hidden="true" size={15} /> Kit educativo • Crianças de 4 a 10 anos
          </p>
          <h1>
            Seu Filho Vai Conhecer os <span>195 Países do Mundo</span> — Brincando
          </h1>
          <p className="hero-description">
            Transforme a curiosidade do seu filho em uma aventura educativa pelos 195 países,
            com bandeiras, capitais, moedas, jogos e centenas de atividades.
          </p>
          <div className="hero-book-count">
            <BookOpen aria-hidden="true" size={16} /> 8 LIVROS
          </div>
          <figure className="hero-product">
            <img
              src={primaryCollectionCover.url}
              alt="Coleção educativa com livros, bandeiras, atividades e quiz sobre o mundo"
              width={1672}
              height={941}
              fetchPriority="high"
              decoding="async"
            />
            <figcaption className="hero-stamp">
              <Sparkles aria-hidden="true" size={17} /> Uma aventura para descobrir em família
            </figcaption>
          </figure>
          <CheckoutLink className="purchase-button purchase-button--hero">
            Quero começar essa aventura <ArrowRight aria-hidden="true" size={19} />
          </CheckoutLink>
          <p className="hero-access-note">
            <ShieldCheck aria-hidden="true" size={16} /> Liberação imediata após a finalização do pedido
          </p>
        </div>
      </section>

      <section className="section-band section-band--sun">
        <div className="content-wrap feature-split">
          <div className="feature-copy">
            <SectionHeading
              eyebrow="A solução"
              title="Missão Volta ao Mundo: uma viagem por vez, uma página por vez"
              align="left"
            />
            <p>
              Cada país é uma missão. A criança descobre curiosidades, pinta a bandeira,
              encontra o país no mapa, resolve labirintos e carimba o passaporte de explorador.
              É brincadeira com propósito: enquanto se diverte, ela aprende geografia, cultura e
              vocabulário novo.
            </p>
            <ul className="icon-list">
              <li><Check aria-hidden="true" size={18} /> Bandeiras, capitais e moedas</li>
              <li><Check aria-hidden="true" size={18} /> Jogos, mapas e passaporte de explorador</li>
              <li><Check aria-hidden="true" size={18} /> Material digital para baixar e imprimir</li>
            </ul>
            <p className="campaign-note">
              <Sparkles aria-hidden="true" size={17} /> Pagamento único • Condição até {salesPageFacts.campaignDeadline}
            </p>
          </div>
          <div className="feature-image feature-image--book">
            <img
              src={worldFlagsBookDetail.url}
              alt="Livro Bandeiras do Mundo e páginas de atividades sobre países, capitais e moedas"
              width={900}
              height={507}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-band section-band--blue">
        <div className="content-wrap">
          <SectionHeading
            eyebrow="Histórias de quem já recebeu"
            title="Veja o que outras famílias estão falando"
            description="Experiências reais de quem já levou essa aventura para dentro de casa."
          />
          <div className="rating-strip">
            <div className="rating-value">4,9 <span>/ 5,0</span></div>
            <div>
              <div className="rating-stars" aria-label="5 de 5 estrelas">★★★★★</div>
              <p>Avaliação média</p>
            </div>
            <div className="rating-promise"><ShieldCheck aria-hidden="true" size={21} /> Compromisso com a entrega</div>
          </div>
          <div className="testimonial-grid">
            {visibleTestimonials.map((testimonial) => (
              <figure className="testimonial-image" key={testimonial.src}>
                <img src={testimonial.src} alt={testimonial.alt} loading="lazy" />
              </figure>
            ))}
          </div>
          <p className="testimonial-disclaimer">
            Atenção: todos os depoimentos desta página são de clientes reais que adquiriram o
            material diretamente com a MISSÃO VOLTA AO MUNDO.
          </p>
          <button
            className="text-action"
            type="button"
            aria-expanded={showAllTestimonials}
            onClick={() => setShowAllTestimonials((current) => !current)}
          >
            {showAllTestimonials ? "Ver menos depoimentos" : "Ver mais depoimentos reais"}
            <ArrowDown aria-hidden="true" size={16} />
          </button>
        </div>
      </section>

      <section className="section-band section-band--turquoise">
        <div className="content-wrap feature-split feature-split--reverse">
          <div className="feature-copy">
            <p className="included-badge">INCLUSO ATÉ {salesPageFacts.campaignDeadline}</p>
            <SectionHeading
              title="A aventura também passa por Portugal e Brasil!"
              align="left"
            />
            <p>
              Com o material especial sobre <strong>Portugal e Brasil</strong>, a criança descobre regiões, símbolos,
              culturas e curiosidades destes dois países de língua portuguesa.
            </p>
            <CheckoutLink className="purchase-button purchase-button--green">
              Quero conhecer a coleção completa <ArrowRight aria-hidden="true" size={18} />
            </CheckoutLink>
          </div>
          <div className="feature-image">
            <img
              src="/images/bonus-portugal-brasil-world.svg"
              alt="Material educativo ilustrado sobre Portugal e Brasil, com mapas, bandeiras e atividades infantis"
              width={900}
              height={506}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-band section-band--grass">
        <div className="content-wrap feature-split">
          <div className="feature-copy">
            <p className="included-badge included-badge--gold">PRESENTE PARA APRENDER JUNTOS</p>
            <SectionHeading
              title="Um presente para pais e filhos aprenderem juntos!"
              align="left"
            />
            <p>
              Ao garantir o Missão Volta ao Mundo durante esta campanha, você poderá adicionar
              gratuitamente o <strong>Quiz Volta ao Mundo</strong> ao seu pedido.
            </p>
            <p className="warning-note">
              ⚠️ ATENÇÃO: para receber o presente, selecione o Quiz Volta ao Mundo por R$ 0,50 no
              momento de finalizar seu pedido.
            </p>
          </div>
          <div className="feature-image feature-image--quiz">
            <img
              src={worldQuiz.url}
              alt="Quiz Volta ao Mundo: cartas com perguntas sobre países, capitais e bandeiras"
              width={900}
              height={507}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-band section-band--plain">
        <div className="content-wrap">
          <SectionHeading
            eyebrow="Por dentro da coleção"
            title="Veja algumas das atividades que seu filho vai receber"
            description="Páginas reais da coleção para transformar cada país em uma nova descoberta."
          />
          <div className="activity-gallery">
            {visibleActivities.map((item, index) => (
              <button
                className="activity-sample"
                key={item.src}
                type="button"
                aria-label={`${item.label}: ${item.alt}. Toque para ampliar`}
                onClick={() => setActiveActivity(index)}
              >
                <img src={item.src} alt="" loading="lazy" />
                <span className="activity-label">{item.label}</span>
                <span className="activity-zoom"><ZoomIn aria-hidden="true" size={18} /></span>
              </button>
            ))}
          </div>
          <div className="gallery-controls">
            <button
              className="text-action"
              type="button"
              aria-expanded={showAllActivities}
              onClick={() => setShowAllActivities((current) => !current)}
            >
              {showAllActivities ? "Ver menos" : "+ Ver mais"}
              <ArrowDown aria-hidden="true" size={16} />
            </button>
            <p>Arraste para o lado e toque para ampliar</p>
          </div>
          <div className="gallery-purchase">
            <p>Coleção completa por <strong>{salesPageFacts.completePrice}</strong></p>
            <CheckoutLink className="purchase-button purchase-button--green">
              Quero todas as atividades <ArrowRight aria-hidden="true" size={18} />
            </CheckoutLink>
          </div>
        </div>
      </section>

      <section className="section-band section-band--sun">
        <div className="content-wrap">
          <SectionHeading
            title="Aprender sobre o mundo não precisa ser cansativo"
            description="Com o Missão Volta ao Mundo, a criança não fica apenas decorando informações. Ela observa, pinta, compara, reconhece bandeiras, descobre novos países e aprende enquanto se diverte."
          />
          <div className="comparison-grid">
            <div className="comparison-panel comparison-panel--before">
              <h3>Antes</h3>
              <ul>
                <li><span aria-hidden="true">×</span> Atividades repetitivas</li>
                <li><span aria-hidden="true">×</span> Dificuldade para manter a atenção</li>
                <li><span aria-hidden="true">×</span> Aprendizado baseado apenas em memorização</li>
                <li><span aria-hidden="true">×</span> Mais tempo ocioso nas telas</li>
              </ul>
            </div>
            <div className="comparison-panel comparison-panel--after">
              <h3>Com a coleção</h3>
              <ul>
                <li><Check aria-hidden="true" size={17} /> Novos países para explorar</li>
                <li><Check aria-hidden="true" size={17} /> Atividades visuais e práticas</li>
                <li><Check aria-hidden="true" size={17} /> Estímulo à curiosidade</li>
                <li><Check aria-hidden="true" size={17} /> Momentos educativos em família</li>
                <li><Check aria-hidden="true" size={17} /> Aprendizado mais leve e divertido</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band--deep">
        <div className="content-wrap">
          <SectionHeading
            eyebrow="Muito além da geografia"
            title="Uma aventura que também estimula o desenvolvimento"
            description="Cada página convida a criança a observar, associar ideias e experimentar."
          />
          <div className="learning-grid">
            {learningBenefits.map((benefit) => (
              <article className="learning-item" key={benefit.title}>
                <span className="learning-mark" aria-hidden="true">{benefit.mark}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band--plain">
        <div className="content-wrap world-overview">
          <div className="world-overview-copy">
            <SectionHeading
              eyebrow="Uma coleção completa"
              title="195 países. Uma aventura inteira para descobrir."
              align="left"
            />
            <p>
              O Livro Missão Volta ao Mundo transforma a curiosidade infantil em uma jornada de
              descobertas por diferentes lugares, bandeiras e culturas.
            </p>
            <ul className="topic-list">
              {[
                ["Países", MapPinned],
                ["Bandeiras", Compass],
                ["Capitais", Globe2],
                ["Idiomas", BookOpen],
                ["Moedas", CreditCard],
                ["Atividades", Sparkles],
                ["Curiosidades", Heart],
                ["Mapas", MapPinned],
              ].map(([label, Icon]) => (
                <li key={label as string}>
                  <Check aria-hidden="true" size={15} />
                  <span>{label as string}</span>
                </li>
              ))}
            </ul>
            <p className="assurance-line">Compra segura • Acesso por e-mail • Garantia de {salesPageFacts.guaranteeDays} dias</p>
          </div>
          <div className="world-overview-image">
            <img
              src={collectionPortrait.url}
              alt="Livros e materiais da coleção Missão Volta ao Mundo"
              width={460}
              height={690}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-band section-band--sun">
        <div className="content-wrap feature-split feature-split--reverse">
          <div className="feature-copy">
            <p className="included-badge">INCLUÍDO NA COLEÇÃO COMPLETA</p>
            <SectionHeading
              title="Depois de conhecer os países, a aventura continua pela história do mundo"
              align="left"
            />
            <p>
              O Pequeno Explorador leva a criança a uma viagem educativa pela história, cultura e património
              de diferentes povos e civilizações, ampliando as descobertas da coleção.
            </p>
            <p className="page-count"><BookOpen aria-hidden="true" size={18} /> 80 páginas de conteúdo educativo</p>
          </div>
          <div className="feature-image feature-image--cover">
            <img
              src={smallExplorerBook.url}
              alt="Livro Pequeno Explorador — uma viagem ilustrada pela história do mundo"
              width={720}
              height={960}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-band section-band--grass">
        <div className="content-wrap">
          <SectionHeading
            eyebrow="Incluso na coleção completa"
            title="Além dos livros, seu filho ainda recebe 8 bônus"
            description="Materiais extras que chegam junto com a coleção completa."
          />
          <div className="bonus-grid">
            {collectionBonuses.map((bonus) => (
              <article className="bonus-item" key={bonus.title}>
                <img src={bonusImages[bonus.image]} alt={bonus.alt} loading="lazy" />
                <div className="bonus-copy">
                  <span>INCLUSO</span>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="bonus-summary">
            Todos esses materiais estão incluídos na Coleção Completa por {salesPageFacts.completePrice}.
          </p>
          <p className="assurance-line">Compra segura • Acesso por e-mail • Garantia de {salesPageFacts.guaranteeDays} dias</p>
        </div>
      </section>

      <section className="section-band section-band--deep offer-section" id="oferta">
        <div className="content-wrap">
          <div className="offer-grid">
            <div className="offer-story">
              <p className="offer-kicker"><Sparkles aria-hidden="true" size={15} /> Coleção completa • Melhor escolha</p>
              <SectionHeading
                title="Leve uma aventura completa pelos 195 países e pela história do mundo"
                align="left"
              />
              <ul className="offer-includes">
                <li><Check aria-hidden="true" size={17} /> Livro Missão Volta ao Mundo</li>
                <li><Check aria-hidden="true" size={17} /> Livro Pequeno Explorador</li>
                <li><Check aria-hidden="true" size={17} /> +8 bônus exclusivos da campanha</li>
              </ul>
              <img
                className="offer-product-image"
                src={primaryCollectionCover.url}
                alt="Coleção completa com Bichos do Mundo, Bandeiras do Mundo, Pequeno Explorador, Missão pelo Portugal e Brasil e Quiz à Volta do Mundo"
                width={1672}
                height={941}
                loading="lazy"
              />
            </div>
            <div className="offer-card">
              <p className="offer-label">Oferta especial</p>
              <p className="old-price">De {salesPageFacts.referencePrice} por apenas</p>
              <p className="current-price">{salesPageFacts.completePrice}</p>
              <p className="price-caption">Pagamento único • Sem mensalidade</p>
              <a id="botao-principal" className="purchase-button purchase-button--green purchase-button--full" href={salesPageFacts.completeCheckoutUrl} rel="noopener noreferrer" target="_blank">
                Quero a coleção completa <ArrowRight aria-hidden="true" size={18} />
              </a>
              <div className="offer-assurances">
                <span><Check aria-hidden="true" size={15} /> Material digital</span>
                <span><ShieldCheck aria-hidden="true" size={15} /> Garantia de {salesPageFacts.guaranteeDays} dias</span>
              </div>
              <p className="refund-note">
                Você tem {salesPageFacts.guaranteeDays} dias para conhecer o material. Se entender que não é adequado
                para sua família, poderá solicitar o reembolso dentro do prazo da garantia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band--plain">
        <div className="content-wrap guarantee-layout">
          <div className="guarantee-seal"><ShieldCheck aria-hidden="true" size={36} /><span>7<br />DIAS</span></div>
          <div>
            <SectionHeading
              title="Você tem 7 dias para conhecer o material"
              align="left"
            />
            <p>
              Depois da compra, você poderá acessar e conhecer a coleção. Se entender que o
              material não é adequado para sua família, poderá solicitar o reembolso dentro do
              prazo da garantia, conforme as condições da compra.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band section-band--blue">
        <div className="content-wrap">
          <SectionHeading title="Compra 100% segura" />
          <div className="security-grid">
            <article className="security-item">
              <LockKeyhole aria-hidden="true" size={25} />
              <h3>Pagamento protegido</h3>
              <p>O pagamento acontece em ambiente criptografado, com cartão de crédito ou Pix.</p>
            </article>
            <article className="security-item">
              <CreditCard aria-hidden="true" size={25} />
              <h3>Seus dados em segurança</h3>
              <p>Seus dados não são armazenados por nós e você recebe comprovante por e-mail.</p>
            </article>
            <article className="security-item">
              <Mail aria-hidden="true" size={25} />
              <h3>Suporte por e-mail</h3>
              <p>Atendimento para qualquer dúvida sobre acesso, download ou impressão.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band section-band--turquoise">
        <div className="content-wrap faq-wrap">
          <SectionHeading title="Perguntas frequentes" />
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden="true" size={19} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="content-wrap closing-content">
          <p className="closing-kicker"><Compass aria-hidden="true" size={16} /> Sua próxima aventura começa aqui</p>
          <h2>Uma aventura pelo mundo está à espera do seu pequeno explorador</h2>
          <p>
            São 195 países, história mundial, culturas, jogos, atividades e centenas de descobertas
            reunidas em uma única coleção.
          </p>
          <p className="closing-price">Coleção completa por <strong>{salesPageFacts.completePrice}</strong></p>
          <CheckoutLink className="purchase-button purchase-button--closing">
            Quero levar meu filho nessa aventura <ArrowRight aria-hidden="true" size={19} />
          </CheckoutLink>
          <p className="closing-assurance">Pagamento único • Material digital • Garantia de {salesPageFacts.guaranteeDays} dias</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="content-wrap footer-content">
          <p className="footer-brand"><Globe2 aria-hidden="true" size={17} /> Missão Volta ao Mundo</p>
          <p>Material digital em PDF para imprimir. Nenhum produto físico é enviado pelo correio.</p>
          <p>Suporte: atendimento por e-mail para dúvidas sobre acesso, download ou impressão.</p>
          <nav aria-label="Informações legais">
            <a href="https://missaovoltaaomundo.lovable.app/politica-de-privacidade">Política de Privacidade</a>
            <a href="https://missaovoltaaomundo.lovable.app/termos-de-uso">Termos de Uso</a>
          </nav>
          <p className="copyright">© 2026 Missão Volta ao Mundo. Todos os direitos reservados.</p>
        </div>
      </footer>

      <div className="mobile-purchase-bar">
        <div>
          <span>Coleção completa</span>
          <strong>{salesPageFacts.completePrice}</strong>
        </div>
        <CheckoutLink className="purchase-button purchase-button--mobile">
          Garantir minha coleção <ArrowRight aria-hidden="true" size={17} />
        </CheckoutLink>
      </div>

      {selectedActivity ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Atividade ampliada">
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              type="button"
              aria-label="Fechar imagem ampliada"
              onClick={() => setActiveActivity(null)}
            >
              ×
            </button>
            <button
              className="lightbox-nav lightbox-nav--previous"
              type="button"
              aria-label="Imagem anterior"
              onClick={() =>
                setActiveActivity((current) =>
                  current === null
                    ? 0
                    : (current - 1 + activitySamples.length) % activitySamples.length,
                )
              }
            >
              <ArrowLeft aria-hidden="true" size={21} />
            </button>
            <img src={selectedActivity.src} alt={selectedActivity.alt} />
            <button
              className="lightbox-nav lightbox-nav--next"
              type="button"
              aria-label="Próxima imagem"
              onClick={() =>
                setActiveActivity((current) =>
                  current === null ? 0 : (current + 1) % activitySamples.length,
                )
              }
            >
              <ArrowRight aria-hidden="true" size={21} />
            </button>
            <p>{selectedActivity.alt}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
