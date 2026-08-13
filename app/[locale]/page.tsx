import { notFound } from "next/navigation";

const copy = {
  zh: {
    localeLabel: "EN",
    otherLocale: "en",
    nav: ["生态", "TEEBOT", "PAMBOO", "合作路径"],
    eyebrow: "出版 · 文化 · 教育 IP",
    title: "让一个故事，生长成一个世界。",
    lede: "从创作、出版与动画，到汉语教育 IP、线下书店与全球发行，我们把内容连接成可持续生长的文化生态。",
    primary: "探索合作生态",
    secondary: "认识 TEEBOT",
    heroNote: "OSP STORY · 小海童话 · 胖竹文化 · TEEBOT",
    pulseLabel: "内容生态",
    pulseCore: "故事",
    pulseItems: ["出版", "动画", "教育", "书店", "发行"],
    statA: "65+",
    statALabel: "TEEBOT 规划图书",
    statB: "≈200",
    statBLabel: "配套视频内容",
    statC: "6",
    statCLabel: "核心合作方向",
    ecosystemKicker: "THE ECOSYSTEM",
    ecosystemTitle: "不是单一服务，而是一条完整的内容价值链。",
    ecosystemIntro: "每个合作入口都可以独立启动，也可以沿着创作、版权、出版、动画、教育与发行逐步延展。",
    cards: [
      ["01", "童书与图书出版", "从作者培养、脚本与编辑，到插画、出版制作和样书交付。", "内容成为作品"],
      ["02", "动画与电子版权", "将绘本和原创内容延伸为 AI 动画、电子绘本及数字版权产品。", "作品成为媒介"],
      ["03", "文化出海", "通过作者计划、海外传播和内容发行，让中国故事走向更广阔的市场。", "内容走向世界"],
      ["04", "PAMBOO 胖竹书店", "连接发行书店、作家书店与区域旗舰空间，让内容进入真实生活场景。", "内容进入空间"],
      ["05", "TEEBOT 汉语教育", "以图书、动画和课程内容构建面向全球汉语学习者的长期教育 IP。", "内容成为体系"],
      ["06", "版权与联合开发", "围绕 TEEBOT 系列、定制出版和跨品牌内容开展长期联合开发。", "内容成为资产"],
    ],
    teebotKicker: "TEEBOT",
    teebotTitle: "把汉语学习变成可以阅读、观看和探索的世界。",
    teebotBody: "TEEBOT 不是一本教材，而是一套持续扩展的汉语教育内容系统。规划约 65 本图书与 200 个视频内容，以故事、动画和文化体验连接学习者。",
    teebotTags: ["汉语教学", "儿童内容", "动画", "文化传播"],
    teebotOrbit: ["BOOKS", "VIDEO", "LANGUAGE", "CULTURE"],
    pambooKicker: "PAMBOO / 胖竹",
    pambooTitle: "让内容从屏幕和书页，走进城市空间。",
    pambooBody: "胖竹书店体系将出版与线下体验连接起来，形成从内容发行到作者社群，再到区域文化空间的不同合作层级。",
    pambooTypes: [
      ["发行书店", "以图书发行与内容零售为核心的轻量合作入口。"],
      ["作家书店", "围绕作者、读者社群和文化活动构建更完整的内容空间。"],
      ["区域旗舰", "面向城市与区域市场打造具有独立 IP 表达的旗舰文化空间。"],
    ],
    flowKicker: "HOW IT CONNECTS",
    flowTitle: "从一个创意，到一个跨媒介文化 IP。",
    flow: [
      ["01", "创意与写作", "故事、作者培养与脚本"],
      ["02", "视觉与出版", "插画、编辑与实体出版"],
      ["03", "动画与数字内容", "电子版权与视频内容"],
      ["04", "教育与 IP", "TEEBOT 教学内容体系"],
      ["05", "渠道与空间", "PAMBOO 与合作发行渠道"],
      ["06", "全球传播", "文化出海与国际合作"],
    ],
    ctaKicker: "BUILD TOGETHER",
    ctaTitle: "一个项目，可以从任何入口开始。",
    ctaBody: "出版、动画、教育 IP、书店合作或联合开发。选择最适合的起点，再让内容逐步生长。",
    ctaButton: "开始合作对话",
    footer: "OSP STORY · 小海童话 · 胖竹文化 · TEEBOT",
  },
  en: {
    localeLabel: "中",
    otherLocale: "zh",
    nav: ["Ecosystem", "TEEBOT", "PAMBOO", "Journey"],
    eyebrow: "PUBLISHING · CULTURE · EDUCATIONAL IP",
    title: "Let one story grow into a world.",
    lede: "From creation, publishing and animation to Chinese-learning IP, physical bookstores and global distribution, we connect content into an ecosystem built to grow.",
    primary: "Explore the Ecosystem",
    secondary: "Meet TEEBOT",
    heroNote: "OSP STORY · Xiaohai Fairy Tales · PAMBOO Culture · TEEBOT",
    pulseLabel: "CONTENT ECOSYSTEM",
    pulseCore: "STORY",
    pulseItems: ["Publish", "Animate", "Teach", "Retail", "Distribute"],
    statA: "65+",
    statALabel: "planned TEEBOT books",
    statB: "≈200",
    statBLabel: "supporting videos",
    statC: "6",
    statCLabel: "core partnership paths",
    ecosystemKicker: "THE ECOSYSTEM",
    ecosystemTitle: "Not a single service. A connected content value chain.",
    ecosystemIntro: "Each partnership can begin independently, then expand across creation, rights, publishing, animation, education and distribution.",
    cards: [
      ["01", "Children's & Trade Publishing", "From author development, scripting and editing to illustration, production and sample copies.", "Content becomes a work"],
      ["02", "Animation & Digital Rights", "Extend picture books and original stories into AI animation, digital picture books and rights products.", "Works become media"],
      ["03", "Cultural Export", "Author programs, international promotion and distribution designed to carry Chinese stories into wider markets.", "Content travels"],
      ["04", "PAMBOO Bookstores", "Distribution stores, author-led spaces and regional flagships that bring content into physical life.", "Content becomes place"],
      ["05", "TEEBOT Chinese Learning", "A long-term educational IP built from books, animation and course content for Chinese learners worldwide.", "Content becomes a system"],
      ["06", "Rights & Co-creation", "Long-term joint development around TEEBOT series, custom publishing and cross-brand content programs.", "Content becomes an asset"],
    ],
    teebotKicker: "TEEBOT",
    teebotTitle: "Turn Chinese learning into a world learners can read, watch and explore.",
    teebotBody: "TEEBOT is designed as an expandable Chinese-learning content system rather than a single textbook, with roughly 65 planned books and 200 video assets connecting language, stories, animation and culture.",
    teebotTags: ["Chinese learning", "Children's content", "Animation", "Culture"],
    teebotOrbit: ["BOOKS", "VIDEO", "LANGUAGE", "CULTURE"],
    pambooKicker: "PAMBOO",
    pambooTitle: "Bring content off the screen and page, into the city.",
    pambooBody: "The PAMBOO bookstore model connects publishing with physical experience, offering different partnership levels from distribution-led retail to author communities and regional cultural flagships.",
    pambooTypes: [
      ["Distribution Store", "A lighter entry point focused on book distribution and content retail."],
      ["Author Store", "A richer space built around authors, reader communities and cultural programming."],
      ["Regional Flagship", "A city or regional cultural destination with its own local IP expression."],
    ],
    flowKicker: "HOW IT CONNECTS",
    flowTitle: "From one idea to a cross-media cultural IP.",
    flow: [
      ["01", "Idea & Writing", "Stories, author development and scripts"],
      ["02", "Visual & Publishing", "Illustration, editing and print"],
      ["03", "Animation & Digital", "Digital rights and video content"],
      ["04", "Education & IP", "The TEEBOT learning system"],
      ["05", "Channels & Spaces", "PAMBOO and distribution partners"],
      ["06", "Global Reach", "Cultural export and international partnerships"],
    ],
    ctaKicker: "BUILD TOGETHER",
    ctaTitle: "A project can begin at any point in the ecosystem.",
    ctaBody: "Publishing, animation, educational IP, bookstore partnerships or joint development. Start where the opportunity is strongest, then let the content expand.",
    ctaButton: "Start a Partnership Conversation",
    footer: "OSP STORY · Xiaohai Fairy Tales · PAMBOO Culture · TEEBOT",
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export default function LocalizedHome({ params }: { params: { locale: string } }) {
  if (params.locale !== "zh" && params.locale !== "en") notFound();
  const t = copy[params.locale];
  const navTargets = ["ecosystem", "teebot", "pamboo", "journey"];

  return (
    <main className="shell">
      <header className="header">
        <div className="container nav">
          <a className="brand" href={`/${params.locale}`} aria-label="PAMBOO TEEBOT home">
            <span className="brand-mark">P</span>
            <span className="brand-copy"><b>PAMBOO</b><small>TEEBOT · OSP STORY</small></span>
          </a>
          <nav className="navlinks" aria-label="Primary navigation">
            {t.nav.map((item, index) => <a key={item} href={`#${navTargets[index]}`}>{item}</a>)}
          </nav>
          <a className="lang" href={`/${t.otherLocale}`} aria-label="Switch language"><span className="lang-dot" />{t.localeLabel}</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span />{t.eyebrow}</div>
            <h1>{t.title}</h1>
            <p className="lede">{t.lede}</p>
            <div className="ctas">
              <a className="btn btn-primary" href="#ecosystem">{t.primary}<span>↗</span></a>
              <a className="btn btn-secondary" href="#teebot">{t.secondary}<span>↓</span></a>
            </div>
            <div className="hero-note">{t.heroNote}</div>
          </div>

          <div className="ecosystem-visual" aria-label={t.pulseLabel}>
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="pulse-core"><small>{t.pulseLabel}</small><strong>{t.pulseCore}</strong></div>
            {t.pulseItems.map((item, index) => <span className={`orbit-label orbit-label-${index + 1}`} key={item}>{item}</span>)}
            <div className="visual-caption">PAMBOO × TEEBOT</div>
          </div>
        </div>

        <div className="container stats-row">
          <div className="stat"><strong>{t.statA}</strong><span>{t.statALabel}</span></div>
          <div className="stat"><strong>{t.statB}</strong><span>{t.statBLabel}</span></div>
          <div className="stat"><strong>{t.statC}</strong><span>{t.statCLabel}</span></div>
        </div>
      </section>

      <section className="section ecosystem-section" id="ecosystem">
        <div className="container">
          <div className="section-head">
            <div className="section-heading"><div className="kicker">{t.ecosystemKicker}</div><h2>{t.ecosystemTitle}</h2></div>
            <p>{t.ecosystemIntro}</p>
          </div>
          <div className="ecosystem-grid">
            {t.cards.map(([index, title, body, outcome]) => (
              <article className="ecosystem-card" key={index}>
                <div className="card-top"><span className="card-index">{index}</span><span className="card-arrow">↗</span></div>
                <div><h3>{title}</h3><p>{body}</p></div>
                <div className="card-outcome">{outcome}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-section teebot-section" id="teebot">
        <div className="container feature-grid">
          <div className="feature-copy">
            <div className="kicker light">{t.teebotKicker}</div>
            <h2>{t.teebotTitle}</h2>
            <p>{t.teebotBody}</p>
            <div className="tag-row">{t.teebotTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <div className="teebot-stage" aria-hidden="true">
            <div className="teebot-ring ring-a" />
            <div className="teebot-ring ring-b" />
            <div className="teebot-core"><span>T</span><strong>TEEBOT</strong><small>CHINESE LEARNING IP</small></div>
            {t.teebotOrbit.map((item, index) => <div className={`teebot-node teebot-node-${index + 1}`} key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section pamboo-section" id="pamboo">
        <div className="container">
          <div className="pamboo-intro">
            <div><div className="kicker">{t.pambooKicker}</div><h2>{t.pambooTitle}</h2></div>
            <p>{t.pambooBody}</p>
          </div>
          <div className="pamboo-grid">
            {t.pambooTypes.map(([title, body], index) => (
              <article className="pamboo-card" key={title}>
                <div className="pamboo-number">0{index + 1}</div>
                <div className="pamboo-icon"><span /><span /></div>
                <h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="container">
          <div className="section-heading journey-heading"><div className="kicker">{t.flowKicker}</div><h2>{t.flowTitle}</h2></div>
          <div className="journey-line">
            {t.flow.map(([index, title, body]) => (
              <div className="journey-step" key={index}>
                <div className="journey-dot"><span>{index}</span></div>
                <h3>{title}</h3><p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-copy"><div className="kicker light">{t.ctaKicker}</div><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div>
            <a className="cta-button" href="mailto:stephen@orientalsourcepress.co.uk">{t.ctaButton}<span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <strong>PAMBOO / TEEBOT</strong>
            <span>{t.footer}</span>
            <span>stephen@orientalsourcepress.co.uk · +86 18780161026 · WeChat: Stephen_OSP · QQ: 421446282 · Chengdu, China</span>
          </div>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}