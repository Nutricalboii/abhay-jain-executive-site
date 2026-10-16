import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { awards, education, publications, socialLinks, sourceCopy, workExperience } from '../source-data';

export const metadata: Metadata = {
  title: 'About Abhay Jain — Background & Work',
  description: 'Selected career, education, recognitions, and publications of Abhay Jain across consulting, energy, sustainability, technology, and manufacturing.',
  alternates: { canonical: '/about-me' },
};

/* ── Route Map SVG ───────────────────────────────────────────────────────── */
function RouteMap() {
  return (
    <div className="route-map" aria-label="Career geography — Himalayan foothills, Japan, United States, India">
      <svg viewBox="0 0 640 520" fill="none" aria-hidden="true">
        <path className="route-grid" d="M80 130H560M80 260H560M80 390H560" />
        <path className="route-grid" d="M160 60V460M320 60V460M480 60V460" />
        <path className="route-path" d="M96 375C172 335 155 222 245 256C332 288 305 116 400 160C486 200 474 348 552 132" />
        <circle className="route-node" cx="96"  cy="375" r="5" />
        <circle className="route-node" cx="245" cy="256" r="5" />
        <circle className="route-node" cx="400" cy="160" r="5" />
        <circle className="route-node" cx="552" cy="132" r="5" />
      </svg>
    </div>
  );
}

/* ── page ────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main id="main-content">
      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Abhay Jain — home">
          <span className="wordmark-badge">AJ</span>
          <span>Business &amp; Strategy</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/about-me" className="nav-active">About</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/ideas-frameworks">Ideas &amp; Frameworks</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/#focus">Focus</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/#track-record">Track Record</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/contact-me" className="nav-cta">Contact <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      {/* ── ABOUT HERO ─────────────────────────────────────────────── */}
      <section className="about-hero wrap">
        <div className="about-hero-copy">
          <h1 className="about-h1">
            Across<br />
            industries and<br />
            <em>geographies.</em>
          </h1>
          <p className="about-lede">
            {sourceCopy.aboutLead}
          </p>
          <p className="about-origin">
            {sourceCopy.aboutOrigin}
          </p>
        </div>

        <div className="about-visual hero-visual">
          <RouteMap />
          <figure className="portrait-wrap" style={{ width: 'min(60%, 280px)', marginTop: '24px' }}>
            <Image
              src="/Abhay_Jain_profile_pic.jpg"
              alt="Abhay Jain"
              width={400}
              height={533}
              className="portrait-img"
              priority
            />
          </figure>
        </div>
      </section>

      {/* ── STATEMENT BAND ─────────────────────────────────────────── */}
      <section className="about-statement">
        <div className="wrap statement-inner">
          <p className="statement-text">
            The work has moved across consulting, energy, technology, and manufacturing — with a consistent focus on making complex systems useful, adoptable, and durable.
          </p>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ────────────────────────────────────────── */}
      <section id="pedigree" className="section">
        <div className="wrap reveal">
          <div className="logo-section-header">
            <h2 className="section-h2">
              Operating<br />
              <em>range.</em>
            </h2>
          </div>
          <div className="logo-grid">
            {workExperience.map((item) => (
              <article className="logo-card" key={item.company}>
                <div className="logo-card-img-wrap">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={160}
                    height={60}
                    className="logo-card-img"
                  />
                </div>
                <h3 className="logo-card-name">{item.company}</h3>
                <p className="logo-card-role">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────────────── */}
      <section id="education" className="section section-alt">
        <div className="wrap reveal">
          <div className="logo-section-header">
            <h2 className="section-h2">
              Technical<br />
              <em>grounding.</em>
            </h2>
          </div>
          <div className="logo-grid logo-grid-3">
            {education.map((item) => (
              <article className="logo-card" key={`${item.school}-${item.degree}`}>
                <div className={`logo-card-img-wrap${item.whiteBg ? ' logo-card-img-wrap--white' : ''}`}>
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={160}
                    height={60}
                    className="logo-card-img"
                  />
                </div>
                <h3 className="logo-card-name">{item.school}</h3>
                <p className="logo-card-role">{item.degree}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONORS & PUBLICATIONS ──────────────────────────────────── */}
      <section id="honors" className="section">
        <div className="wrap reveal">
          <div className="logo-section-header">
            <h2 className="section-h2">
              Signals<br />
              of<br />
              <em>trust.</em>
            </h2>
          </div>

          {/* Publications */}
          <h3 className="about-list-heading">Publications &amp; Patents</h3>
          <div className="pub-list pub-list-about">
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
                <span className="pub-title">{item.title}</span>
                <span className="pub-src">{item.source}</span>
                <span className="pub-view">View <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>

          {/* Awards */}
          <h3 className="about-list-heading about-list-heading-spaced">Awards &amp; Fellowships</h3>
          <div className="rec-list">
            {awards.map((item, i) => (
              <div className="rec-item" key={item.title}>
                <span className="rec-idx">0{i + 1}</span>
                <div>
                  <p className="rec-text" style={{ fontWeight: 500 }}>{item.title}</p>
                  {item.note && <p className="rec-text" style={{ color: 'var(--ink-60)', fontSize: '13px', marginTop: '2px' }}>{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEYOND WORK ────────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="wrap section-grid reveal">
          <div>
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
              Outside formal roles: competitive table tennis, pool, golf, road trips, and international dance performances.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCE SITE ADDITIONS ──────────────────────────────────── */}
      <section className="section">
        <div className="wrap section-grid reveal">
          <div>
            <h2 className="section-h2">
              More<br />
              to<br />
              <em>come.</em>
            </h2>
          </div>
          <div className="source-additions">
            <article className="source-addition">
              <h3 className="aff-title">Extra Curricular</h3>
              <p className="source-addition-status">Coming soon</p>
            </article>
            <article className="source-addition">
              <h3 className="aff-title">Projects</h3>
              <p className="source-addition-status">Coming soon</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── BANNER ─────────────────────────────────────────────────── */}
      <section className="banner-section">
        <div className="banner-img-wrap">
          <Image
            src="/abhay-kalam-clean.png"
            alt="Abhay Jain with Dr. A.P.J. Abdul Kalam"
            fill
            className="banner-img"
            sizes="100vw"
          />
          <div className="banner-overlay" />
        </div>
        <div className="wrap banner-content">
          <h2 className="banner-h2">Inbound</h2>
          <p className="banner-sub">
            Open to precise conversations regarding advisory positions,
            operating questions, or institutional alignment.
          </p>
          <a className="btn btn-dark" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <nav className="social-row" aria-label="Social profiles">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <span aria-hidden="true">↗</span></a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────── */}
      <section className="contact-section">
        <div className="wrap contact-inner">
          <div>
            <h2 className="contact-h2">
              Relevant<br />
              conversation?<br />
              <em>Begin there.</em>
            </h2>
          </div>
          <div className="contact-side">
            <p className="contact-desc">
              For advisory, operating, technology, energy, sustainability, or institutional conversations.
            </p>
            <div className="contact-actions">
              <a className="contact-link contact-link-primary" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <Link className="contact-link contact-link-secondary" href="/">← Back to home</Link>
            </div>
          </div>
        </div>
        <footer className="wrap site-footer footer-dark">
          <Link href="/">← Home</Link>
          <span>© {new Date().getFullYear()} Abhay Jain</span>
          <Link href="/ideas-frameworks">Ideas &amp; Frameworks</Link>
          <Link href="/contact-me">Contact me</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
          <span>abhayjain.net</span>
        </footer>
      </section>
      </main>
    </>
  );
}
