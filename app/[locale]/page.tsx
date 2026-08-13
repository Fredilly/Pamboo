import { notFound } from "next/navigation";

const copy = {
  zh: {
    localeLabel: "EN",
    otherLocale: "en",
    eyebrow: "出版 · 文化 · 教育 IP",
    title: "让内容从创作走向世界。",
    lede: "连接图书出版、动画、文化出海、线下书店与 TEEBOT 汉语教育 IP，形成从创作到发行的完整内容生态。",
    primary: "探索合作方向",
    secondary: "了解 TEEBOT",
    metric: "65+",
    metricText: "TEEBOT 规划图书，配套约 200 个视频内容，面向汉语学习与文化传播。",
    sectionTitle: "一个内容生态，多个商业入口",
    sectionIntro: "将内部业务清单转化为更清晰的对外合作结构，避免公开敏感报价，同时保留每条业务线的价值。",
    cards: [
      ["01", "童书与图书出版", "从写作培训、脚本、插画到出版与样书交付。"],
      ["02", "动画与电子版权", "AI 绘本、动画制作与电子内容发行。"],
      ["03", "文化出海", "围绕作者计划、内容传播与海外市场拓展。"],
      ["04", "PAMBOO 胖竹书店", "发行书店、作家书店与区域旗舰店合作。"],
      ["05", "TEEBOT 汉语教育", "图书、动画与汉语教学内容的长期 IP 共创。"],
      ["06", "版权与联合开发", "围绕 TEEBOT 系列及定制项目开展联合开发。"],
    ],
    flowTitle: "从创作到全球发行",
    flow: ["创意", "写作", "插画", "出版", "动画", "发行"],
    footer: "OSP STORY · 小海童话 · 胖竹文化 · TEEBOT",
  },
  en: {
    localeLabel: "中",
    otherLocale: "zh",
    eyebrow: "PUBLISHING · CULTURE · EDUCATIONAL IP",
    title: "Take stories from creation to the world.",
    lede: "A connected ecosystem spanning publishing, animation, cultural export, physical bookstores and the TEEBOT Chinese-learning IP platform.",
    primary: "Explore Partnerships",
    secondary: "Discover TEEBOT",
    metric: "65+",
    metricText: "Planned TEEBOT book titles supported by roughly 200 video assets for Chinese-language learning and cultural storytelling.",
    sectionTitle: "One ecosystem, multiple ways to partner",
    sectionIntro: "A clearer public-facing structure for the underlying business portfolio, preserving the value of each service line without exposing confidential pricing.",
    cards: [
      ["01", "Children's & Trade Publishing", "From author development and scripts to illustration, publishing and sample copies."],
      ["02", "Animation & Digital Rights", "AI picture books, animation production and digital content distribution."],
      ["03", "Cultural Export", "Author programs, content promotion and international market development."],
      ["04", "PAMBOO Bookstores", "Distribution stores, author stores and regional flagship partnerships."],
      ["05", "TEEBOT Chinese Learning", "Books, animation and Chinese-language learning content developed as a long-term IP platform."],
      ["06", "Rights & Co-creation", "Joint development around TEEBOT series and custom content programs."],
    ],
    flowTitle: "From creation to global distribution",
    flow: ["Idea", "Writing", "Illustration", "Publishing", "Animation", "Distribution"],
    footer: "OSP STORY · Xiaohai Fairy Tales · PAMBOO Culture · TEEBOT",
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export default function LocalizedHome({ params }: { params: { locale: string } }) {
  if (params.locale !== "zh" && params.locale !== "en") notFound();
  const t = copy[params.locale];

  return (
    <main className="shell">
      <header className="header">
        <div className="container nav">
          <a className="brand" href={`/${params.locale}`}><span>PAMBOO</span> / TEEBOT</a>
          <nav className="navlinks">
            <a href="#ecosystem">{params.locale === "zh" ? "业务生态" : "Ecosystem"}</a>
            <a href="#flow">{params.locale === "zh" ? "合作流程" : "Flow"}</a>
          </nav>
          <a className="lang" href={`/${t.otherLocale}`} aria-label="Switch language">{t.localeLabel}</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.title}</h1>
            <p className="lede">{t.lede}</p>
            <div className="ctas">
              <a className="btn btn-primary" href="#ecosystem">{t.primary}</a>
              <a className="btn btn-secondary" href="#flow">{t.secondary}</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="TEEBOT overview">
            <div>
              <div className="eyebrow" style={{ color: "rgba(255,255,255,.72)" }}>TEEBOT</div>
              <div className="metric">{t.metric}</div>
            </div>
            <p className="sub">{t.metricText}</p>
          </aside>
        </div>
      </section>

      <section className="section" id="ecosystem">
        <div className="container">
          <div className="section-head">
            <div><h2>{t.sectionTitle}</h2></div>
            <p style={{ maxWidth: 480 }}>{t.sectionIntro}</p>
          </div>
          <div className="grid">
            {t.cards.map(([index, title, body]) => (
              <article className="card" key={index}>
                <div className="index">{index}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="flow">
        <div className="container">
          <h2>{t.flowTitle}</h2>
          <div className="flow">
            {t.flow.map((step) => <div className="flow-step" key={step}>{step}</div>)}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <strong>{t.footer}</strong>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
