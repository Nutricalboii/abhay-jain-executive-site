import Image from 'next/image';
import Link from 'next/link';

/* ── data ────────────────────────────────────────────────────────────────── */
const focusAreas = [
  'Power-management and embedded analog businesses in India',
  'Product definition, portfolio strategy, and commercial execution',
  'Cross-functional leadership across India and global teams',
  'Ecosystem partnerships in automotive, industrial, and energy markets',
];

const trackRecord = [
  {
    label: 'Strategy & Execution',
    detail:
      'Led strategy, process transformation, and commercial execution for a large-scale power-management semiconductor business.',
  },
  {
    label: 'Management Consulting',
    detail:
      'Delivered engagements at McKinsey & Company across technology, energy, and operations — working across markets in Asia and North America.',
  },
  {
    label: 'Engineering & Sales',
    detail:
      'Combined technical engineering with commercial responsibility at Mitsubishi Heavy Industries — compressors and steam turbines for complex industrial systems.',
  },
  {
    label: 'Operating Range',
    detail:
      'Worked across semiconductors, energy, sustainability, and manufacturing. Experience spanning India, Japan, the United States, and global organisations.',
  },
];

const selectedWork = [
  {
    type: 'Research',
    title: 'Global consumer sentiment during COVID-19',
    context: 'McKinsey research tracking behavioral shifts across markets during a period of acute uncertainty.',
    href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/a-global-view-of-how-consumer-behavior-is-changing-amid-covid-19',
  },
  {
    type: 'Research',
    title: 'VC investment trends in food waste',
    context: 'Stanford EIPER research on capital flows, waste systems, and emerging market opportunities.',
    href: 'https://earth.stanford.edu/eiper',
  },
  {
    type: 'Technical paper',
    title: 'Compressors and steam turbines in mega ethylene plants',
    context: 'Technical study on efficient and sustainable operation of industrial rotating equipment.',
    href: 'https://oaktrust.library.tamu.edu/handle/1969.1/160303',
  },
  {
    type: 'Patent',
    title: 'Emergency shut-off device and system',
    context: 'Two Mitsubishi Heavy Industries patent publications in industrial safety systems.',
    href: 'https://patents.google.com/patent/US10443513B2/en',
  },
];

const affiliations = {
  current: ['Renesas Electronics'],
  earlier: ['McKinsey & Company', 'Mitsubishi Heavy Industries', 'NextEra Energy'],
  education: ['Stanford University', 'IIT Kanpur'],
};

/* ── SVG graphics ────────────────────────────────────────────────────────── */
function SignalField() {
  return (
    <div className="signal-field" aria-hidden="true">
      <svg viewBox="0 0 640 640" fill="none">
        {/* subtle grid */}
        <path className="field-grid-x" d="M0 160H640M0 320H640M0 480H640" />
        <path className="field-crosshair" d="M56 320H584M320 56V584" />

        {/* noisy waveform → clean regulated line */}
        <path
          className="field-wave-raw"
          d="M0 321C32 321 30 258 62 258C93 258 90 382 121 382C151 382 148 286 180 286C210 286 213 355 243 355C273 355 275 274 306 274C337 274 339 360 370 360C400 360 403 291 433 291C463 291 465 330 495 330C523 330 525 320 555 320C580 320 590 320 640 320"
        />
        <path
          className="field-wave-clean"
          d="M0 320C90 320 130 320 200 320C270 320 295 319 360 320C430 321 480 320 640 320"
        />

        {/* nodes */}
        <circle className="field-node" cx="180" cy="286" r="4" />
        <circle className="field-node" cx="370" cy="360" r="4" />
        <circle className="field-core-dot" cx="320" cy="320" r="6" />
        <circle
          style={{ stroke: 'var(--copper)', strokeOpacity: '.4', strokeWidth: '1', fill: 'none' }}
          cx="320"
          cy="320"
          r="18"
        />
        <circle
          style={{ stroke: 'var(--copper)', strokeOpacity: '.2', strokeWidth: '.8', fill: 'none' }}
          cx="320"
          cy="320"
          r="34"
        />
      </svg>

      <span className="field-label field-label-tl">SIGNAL / 01</span>
      <span className="field-label field-label-br field-label-accent">
        POWER · SYSTEMS · SCALE
      </span>
    </div>
  );
}

function SignalThread() {
  return (
    <div className="signal-thread" aria-hidden="true">
      <svg viewBox="0 0 40 2000" preserveAspectRatio="none" fill="none">
        <path className="thread-rail" d="M20 0V2000" />
        <path
          className="thread-path"
          pathLength="1"
          d="M20 0C20 80 6 108 20 200C34 292 8 370 20 462C34 564 7 658 20 750C33 842 9 932 20 1024C31 1116 8 1208 20 1300C32 1392 9 1480 20 1580C31 1674 20 1870 20 2000"
        />
        <circle className="thread-pip" cx="20" cy="218" r="4" />
        <circle className="thread-pip" cx="20" cy="784" r="4" />
        <circle className="thread-pip" cx="20" cy="1390" r="4" />
      </svg>
      <span className="thread-num thread-num-1">01</span>
      <span className="thread-num thread-num-2">02</span>
      <span className="thread-num thread-num-3">03</span>
    </div>
  );
}

/* ── page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <SignalThread />

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhay Jain — home">
          <span className="wordmark-badge">AJ</span>
          <span>Abhay Jain</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/about">About</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <a href="#focus">Focus</a>
          <span className="nav-dot" aria-hidden="true">·</span>
          <a href="#work">Work</a>
          <span className="nav-dot" aria-hidden="true">·</span>
          <a href="#contact" className="nav-cta">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section id="top" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Executive profile
            <span className="eyebrow-muted">— India / Global</span>
          </p>

          <h1 className="hero-name">
            Abhay<br />
            <em>Jain</em>
          </h1>

          <p className="hero-role">
            Business Division Leader
            <span className="hero-role-sep" aria-hidden="true">·</span>
            Renesas Electronics
          </p>

          <p className="hero-statement">
            Business and strategy leader across power-management semiconductors,
            product direction, and ecosystem development.
          </p>

          <div className="hero-actions">
            <a className="btn btn-dark" href="#contact">
              Start a conversation
              <span className="btn-icon" aria-hidden="true">↗</span>
            </a>
            <a
              className="btn btn-outline"
              href="https://www.linkedin.com/in/abhay-jain-10/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span className="btn-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <SignalField />
          <figure className="portrait-wrap">
            <Image
              src="/abhay-profile.jpg"
              alt="Abhay Jain"
              width={480}
              height={640}
              className="portrait-img"
              priority
            />
            <figcaption className="portrait-cap">
              <span>01</span>
              <span>Strategy · Systems · Execution</span>
            </figcaption>
          </figure>
        </div>

        <p className="hero-scroll" aria-hidden="true">
          <span className="hero-scroll-line" />
          Scroll to explore
        </p>
      </section>

      {/* ── CURRENT FOCUS ──────────────────────────────────────────── */}
      <section id="focus" className="section">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number">01</p>
            <p className="section-label">Current Focus</p>
            <h2 className="section-h2">
              Where<br />
              the work<br />
              <em>is now.</em>
            </h2>
            <p className="section-sub">
              A filter for relevant inbound. These are the active domains.
            </p>
          </div>

          <div className="focus-list">
            {focusAreas.map((area, i) => (
              <div className="focus-item" key={area}>
                <span className="focus-idx">0{i + 1}</span>
                <p className="focus-text">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ───────────────────────────────────────────── */}
      <section id="track" className="section section-alt">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number">02</p>
            <p className="section-label">Track Record</p>
            <h2 className="section-h2">
              Useful<br />
              range.<br />
              <em>Clear ownership.</em>
            </h2>
          </div>

          <div className="track-list">
            {trackRecord.map((item, i) => (
              <article className="track-item" key={item.label}>
                <span className="track-marker">0{i + 1}</span>
                <div>
                  <p className="track-label">{item.label}</p>
                  <p className="track-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ──────────────────────────────────────────── */}
      <section id="work" className="section">
        <div className="wrap reveal">
          <div className="work-header">
            <div>
              <p className="section-label">03 · Selected Work</p>
              <h2 className="section-h2">
                Proof,<br />
                <em>not volume.</em>
              </h2>
            </div>
            <p className="work-aside">
              A small set of work that shows the operating range. Curated, not exhaustive.
            </p>
          </div>

          <div className="work-list">
            {selectedWork.map((work, i) => (
              <a
                className="work-item"
                key={work.title}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View: ${work.title}`}
              >
                <span className="work-num">0{i + 1}</span>
                <span className="work-type">{work.type}</span>
                <span className="work-title">{work.title}</span>
                <span className="work-context">{work.context}</span>
                <span className="work-view">View <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFFILIATIONS ───────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="wrap section-grid reveal">
          <div>
            <p className="section-number">04</p>
            <p className="section-label">Roles & Affiliations</p>
            <h2 className="section-h2">
              Built<br />
              across<br />
              <em>systems.</em>
            </h2>
          </div>

          <div className="aff-grid">
            <div className="aff-block">
              <p className="aff-head">Current</p>
              <ul className="aff-list">
                {affiliations.current.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="aff-block">
              <p className="aff-head">Earlier</p>
              <ul className="aff-list">
                {affiliations.earlier.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="aff-block">
              <p className="aff-head">Education</p>
              <ul className="aff-list">
                {affiliations.education.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="wrap contact-inner">
          <div>
            <p className="eyebrow contact-eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              05 · Contact
            </p>
            <h2 className="contact-h2">
              Relevant<br />
              conversation?<br />
              <em>Begin there.</em>
            </h2>
          </div>

          <div className="contact-side">
            <p className="contact-desc">
              For advisory, operating, semiconductor ecosystem, or
              institutional conversations. One or two methods only.
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
              <Link className="contact-link contact-link-secondary" href="/about">
                View full profile
              </Link>
            </div>
          </div>
        </div>

        <footer className="wrap site-footer footer-dark">
          <span>© {new Date().getFullYear()} Abhay Jain</span>
          <Link href="/about">About</Link>
          <span>abhayjain.net</span>
        </footer>
      </section>
    </main>
  );
}
