import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Abhay Jain — Executive Profile',
  description:
    'Career, education, recognitions, and selected publications of Abhay Jain. Business and strategy leader across semiconductors, energy, and institutional markets.',
  alternates: { canonical: '/about' },
};

/* ── data ────────────────────────────────────────────────────────────────── */
const career = [
  {
    marker: 'Now',
    company: 'Renesas Electronics',
    role: 'Business Division Leader',
    detail:
      'Leads strategy, product direction, and commercial execution for power-management semiconductor businesses in India. Works across product definition, applications, market development, and cross-functional teams spanning India and global operations.',
  },
  {
    marker: '01',
    company: 'McKinsey & Company',
    role: 'Consultant',
    detail:
      'Delivered strategy and operations engagements across technology, energy, and manufacturing clients. Experience across India, North America, and Asia-Pacific markets.',
  },
  {
    marker: '02',
    company: 'Mitsubishi Heavy Industries',
    role: 'Sales & Marketing Executive · Compressor & Steam Turbine Engineer',
    detail:
      'Combined hands-on engineering work in compressors and steam turbines with commercial responsibility for industrial accounts. Based in Japan for four years.',
  },
  {
    marker: '03',
    company: 'Earlier roles',
    role: 'NextEra Energy · AutoGrid · Sparkz · Averda',
    detail:
      'Experience across renewable energy strategy, energy software, product and business development, and COO-office operations. Exposure to scale, early-stage, and institutional organisations.',
  },
];

const education = [
  {
    school: 'Stanford University',
    program: 'MBA',
    note: 'Graduate School of Business',
  },
  {
    school: 'Stanford University',
    program: 'MS in Environment and Resources',
    note: 'Interdisciplinary focus on energy, sustainability, and systems.',
  },
  {
    school: 'Indian Institute of Technology, Kanpur',
    program: 'B.Tech — Materials & Metallurgical Engineering',
    note: 'Engineering foundation with a strong quantitative and systems orientation.',
  },
];

const recognitions = [
  'K. C. Mahindra Scholarship for Graduate Studies, 2017',
  'J. N. Tata Scholarship for Graduate Studies, 2017',
  'Social Management Immersion Fellowship, Stanford University, 2018',
  'Certificate in Public Management and Social Innovation, Stanford, 2019',
  'InSite Fellowship, 2019',
];

const publications = [
  {
    group: 'Research',
    title: 'Global surveys of consumer sentiment during the coronavirus crisis',
    source: 'McKinsey & Company · 2020',
    href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/a-global-view-of-how-consumer-behavior-is-changing-amid-covid-19',
  },
  {
    group: 'Research',
    title: 'Low Hanging Fruit: VC Investment Trends in Food Waste',
    source: 'Stanford EIPER · 2020',
    href: 'https://earth.stanford.edu/eiper',
  },
  {
    group: 'Research',
    title: 'Stanford experts discuss challenges in disposing of waste',
    source: 'Stanford News · 2019',
    href: 'https://news.stanford.edu/stories/2019/04/reassessing-waste-not',
  },
  {
    group: 'Technical paper',
    title: 'Compressors and steam turbines in mega ethylene plants',
    source: 'Texas A&M Turbomachinery Symposium · 2016',
    href: 'https://oaktrust.library.tamu.edu/handle/1969.1/160303',
  },
  {
    group: 'Patents',
    title: 'Emergency shut-off device and system',
    source: 'Mitsubishi Heavy Industries · 2016–17',
    href: 'https://patents.google.com/patent/US10443513B2/en',
  },
];

/* ── route map SVG ───────────────────────────────────────────────────────── */
function RouteMap() {
  return (
    <div
      className="route-map"
      aria-label="A route from the Himalayan foothills through Japan and the United States to India"
    >
      <svg viewBox="0 0 640 520" fill="none">
        {/* grid */}
        <path className="route-grid" d="M80 130H560M80 260H560M80 390H560" />
        <path className="route-grid" d="M160 60V460M320 60V460M480 60V460" />

        {/* journey path */}
        <path
          className="route-path"
          d="M96 375C172 335 155 222 245 256C332 288 305 116 400 160C486 200 474 348 552 132"
        />
        <circle className="route-node" cx="96"  cy="375" r="5" />
        <circle className="route-node" cx="245" cy="256" r="5" />
        <circle className="route-node" cx="400" cy="160" r="5" />
        <circle className="route-node" cx="552" cy="132" r="5" />
      </svg>

      <span className="route-lbl route-lbl-1">Himalayan foothills</span>
      <span className="route-lbl route-lbl-2">Japan · 4 years</span>
      <span className="route-lbl route-lbl-3">United States</span>
      <span className="route-lbl route-lbl-4 route-lbl-accent">India</span>
      <span className="route-cap">A personal geography / 01</span>
    </div>
  );
}

/* ── page ────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Abhay Jain — home">
          <span className="wordmark-badge">AJ</span>
          <span>Abhay Jain</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/about" className="nav-active">About</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/#focus">Focus</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/#work">Work</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/#contact" className="nav-cta">
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>

      {/* ── ABOUT HERO ─────────────────────────────────────────────── */}
      <section className="about-hero wrap">
        <div className="about-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            About
            <span className="eyebrow-muted">— Full profile</span>
          </p>
          <h1 className="about-h1">
            A career<br />
            across<br />
            <em>systems.</em>
          </h1>
          <p className="about-lede">
            Abhay works at the intersection of technology, markets, and
            execution — moving between the technical detail of a product and
            the institutional decisions that determine whether it scales.
          </p>
          <p className="about-origin">
            From the foothills of the Himalayas · Japan · United States · India
          </p>
        </div>

        <div className="about-visual hero-visual">
          <RouteMap />
          <figure className="portrait-wrap" style={{ width: 'min(60%, 300px)', marginTop: '28px' }}>
            <Image
              src="/abhay-profile.jpg"
              alt="Abhay Jain"
              width={400}
              height={533}
              className="portrait-img"
              priority
            />
            <figcaption className="portrait-cap">
              <span>PROFILE / 01</span>
              <span>ABHAY JAIN</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── STATEMENT BAND ─────────────────────────────────────────── */}
      <section className="about-statement">
        <div className="wrap statement-inner">
          <div>
            <p className="section-label" style={{ color: 'rgba(180,83,42,.8)' }}>
              The throughline
            </p>
          </div>
          <p className="statement-text">
            The work has changed industries, but the question has stayed
            consistent: how do complex systems become useful, adoptable, and durable?
          </p>
        </div>
      </section>

      {/* ── CAREER / EXPERIENCE ────────────────────────────────────── */}
      <section className="section">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number">01</p>
            <p className="section-label">Experience</p>
            <h2 className="section-h2">
              Operating<br />
              <em>range.</em>
            </h2>
          </div>
          <div className="career-list">
            {career.map((item) => (
              <article className="career-item" key={`${item.company}-${item.role}`}>
                <span className="career-mk">{item.marker}</span>
                <div>
                  <h3 className="career-co">{item.company}</h3>
                  <p className="career-role">{item.role}</p>
                  <p className="career-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number">02</p>
            <p className="section-label">Education</p>
            <h2 className="section-h2">
              Technical<br />
              <em>grounding.</em>
            </h2>
          </div>
          <div className="edu-list">
            {education.map((item, i) => (
              <article className="edu-item" key={`${item.school}-${item.program}`}>
                <span className="edu-num">0{i + 1}</span>
                <div>
                  <h3 className="edu-school">{item.school}</h3>
                  <p className="edu-prog">{item.program}</p>
                  <p className="edu-note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number">03</p>
            <p className="section-label">Recognition</p>
            <h2 className="section-h2">
              Signals<br />
              of<br />
              <em>trust.</em>
            </h2>
          </div>
          <div className="rec-list">
            {recognitions.map((item, i) => (
              <div className="rec-item" key={item}>
                <span className="rec-idx">0{i + 1}</span>
                <p className="rec-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS & PATENTS (dark) ──────────────────────────── */}
      <section className="section section-dark">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number" style={{ color: 'rgba(180,83,42,.85)' }}>04</p>
            <p className="section-label" style={{ color: 'rgba(255,255,255,.4)' }}>
              Publications & Patents
            </p>
            <h2 className="section-h2">
              Selected<br />
              <em>work.</em>
            </h2>
            <p className="section-sub">
              Research, technical writing, and inventions that sit behind the operating profile.
            </p>
          </div>
          <div className="pub-list">
            {publications.map((item, i) => (
              <a
                className="pub-item"
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View: ${item.title}`}
              >
                <span className="pub-idx">0{i + 1}</span>
                <span className="pub-grp">{item.group}</span>
                <span className="pub-title">{item.title}</span>
                <span className="pub-src">{item.source}</span>
                <span className="pub-view">View <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEYOND WORK ────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number">05</p>
            <p className="section-label">Beyond work</p>
            <h2 className="section-h2">
              Keep a<br />
              wider<br />
              <em>view.</em>
            </h2>
          </div>
          <div className="beyond-body">
            <p className="beyond-quote">
              Raised in the Himalayan foothills. Four years in Japan.
              Graduate studies in the United States. Now based in India.
            </p>
            <p className="rec-text" style={{ marginBottom: '16px', color: 'var(--ink-60)' }}>
              Outside formal roles: table tennis, pool, golf, road trips, and dance.
            </p>
            <p className="beyond-cap">Personal detail, kept in proportion.</p>
          </div>
        </div>
      </section>

      {/* ── CONTACT (dark) ─────────────────────────────────────────── */}
      <section className="contact-section">
        <div className="wrap contact-inner">
          <div>
            <p className="eyebrow contact-eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              06 · Contact
            </p>
            <h2 className="contact-h2">
              Relevant<br />
              conversation?<br />
              <em>Begin there.</em>
            </h2>
          </div>
          <div className="contact-side">
            <p className="contact-desc">
              For advisory, operating, semiconductor ecosystem, or institutional conversations.
            </p>
            <div className="contact-actions">
              <a
                className="contact-link contact-link-primary"
                href="https://www.linkedin.com/in/abhay-jain-10/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <Link className="contact-link contact-link-secondary" href="/">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>

        <footer className="wrap site-footer footer-dark">
          <Link href="/">← Home</Link>
          <span>© {new Date().getFullYear()} Abhay Jain</span>
          <span>abhayjain.net</span>
        </footer>
      </section>
    </main>
  );
}
