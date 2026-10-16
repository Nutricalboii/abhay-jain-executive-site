import Image from 'next/image';
import Link from 'next/link';
import { publications, socialLinks, sourceCopy } from './source-data';

/* ── real data from source sites ─────────────────────────────────────────── */
const focusAreas = [
  'Business and product strategy across technology, energy, sustainability, and manufacturing.',
  'Operating across product direction, market adoption, commercial growth, and cross-functional execution.',
  'Building practical systems and partnerships that make complex ideas useful, adoptable, and durable.',
];

const trackRecord = [
  {
    stat: 'Strategy',
    label: 'Management consulting',
    detail: 'Consulting experience across growth, operations, technology, energy, and consumer research at McKinsey & Company.',
  },
  {
    stat: 'Industry',
    label: 'Engineering and commercial execution',
    detail: 'Engineering, sales, and marketing work on compressors and steam turbines at Mitsubishi Heavy Industries.',
  },
  {
    stat: 'Energy',
    label: 'Innovation and sustainability',
    detail: 'Renewable energy innovation, strategy, waste, and sustainability work across operating and research settings.',
  },
  {
    stat: 'Research',
    label: 'Published work and patents',
    detail: 'Selected research, technical writing, and patent work spanning industrial systems, consumer sentiment, and food waste.',
  },
];

const selectedWork = publications.map((item, index) => ({
  ...item,
  type: index > 3 ? 'Publication / patent' : index === 3 ? 'Technical paper' : 'Research',
}));

const affiliations = {
  current: ['Business & strategy'],
  earlier: ['McKinsey & Company', 'Mitsubishi Heavy Industries', 'NextEra Energy', 'AutoGrid', 'Sparkz Inc.', 'Averda'],
  education: ['Stanford University (MBA)', 'Stanford University (MS Earth)', 'IIT Kanpur (B.Tech)'],
};

/* ── SVG decorations ─────────────────────────────────────────────────────── */
function SignalField() {
  return (
    <div className="signal-field" aria-hidden="true">
      <svg viewBox="0 0 640 640" fill="none">
        <path className="field-grid-x" d="M0 160H640M0 320H640M0 480H640" />
        <path className="field-crosshair" d="M56 320H584M320 56V584" />
        <path
          className="field-wave-raw"
          d="M0 321C32 321 30 258 62 258C93 258 90 382 121 382C151 382 148 286 180 286C210 286 213 355 243 355C273 355 275 274 306 274C337 274 339 360 370 360C400 360 403 291 433 291C463 291 465 330 495 330C523 330 525 320 555 320C580 320 590 320 640 320"
        />
        <path
          className="field-wave-clean"
          d="M0 320C90 320 130 320 200 320C270 320 295 319 360 320C430 321 480 320 640 320"
        />
        <circle className="field-node" cx="180" cy="286" r="4" />
        <circle className="field-node" cx="370" cy="360" r="4" />
        <circle className="field-core-dot" cx="320" cy="320" r="6" />
        <circle style={{ stroke: 'var(--copper)', strokeOpacity: '.4', strokeWidth: '1', fill: 'none' }} cx="320" cy="320" r="18" />
        <circle style={{ stroke: 'var(--copper)', strokeOpacity: '.2', strokeWidth: '.8', fill: 'none' }} cx="320" cy="320" r="34" />
      </svg>
    </div>
  );
}

function SignalThread() {
  return (
    <div className="signal-thread" aria-hidden="true">
      <svg viewBox="0 0 40 2000" preserveAspectRatio="none" fill="none">
        <path className="thread-rail" d="M20 0V2000" />
        <path className="thread-path" pathLength="1" d="M20 0C20 80 6 108 20 200C34 292 8 370 20 462C34 564 7 658 20 750C33 842 9 932 20 1024C31 1116 8 1208 20 1300C32 1392 9 1480 20 1580C31 1674 20 1870 20 2000" />
        <circle className="thread-pip" cx="20" cy="218" r="4" />
        <circle className="thread-pip" cx="20" cy="784" r="4" />
        <circle className="thread-pip" cx="20" cy="1390" r="4" />
      </svg>
    </div>
  );
}

/* ── page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main id="main-content">
      <SignalThread />

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhay Jain — home">
          <span className="wordmark-badge">AJ</span>
          <span>Business &amp; Strategy</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/about-me">About</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/ideas-frameworks">Ideas &amp; Frameworks</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <a href="#focus">Focus</a>
          <span className="nav-dot" aria-hidden="true">·</span>
          <a href="#track-record">Track Record</a>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/contact-me" className="nav-cta">Contact <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section id="top" className="hero wrap">
        <div className="hero-copy">
          <h1 className="hero-name">
            Abhay<br />
            <em>Jain</em>
          </h1>
          <p className="hero-role">
            Business & Strategy Professional
            <span className="hero-role-sep" aria-hidden="true">·</span>
            Technology · Energy · Manufacturing
          </p>
          <p className="hero-statement">
            {sourceCopy.aboutLead}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-dark" href="/contact-me">
              Start a conversation
              <span className="btn-icon" aria-hidden="true">↗</span>
            </Link>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">
              LinkedIn
              <span className="btn-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <SignalField />
          <figure className="portrait-wrap">
            <Image
              src="/Abhay_Jain_profile_pic.jpg"
              alt="Abhay Jain"
              width={480}
              height={640}
              className="portrait-img"
              priority
            />
          </figure>
        </div>

      </section>

      {/* ── KALAM HIGHLIGHT ───────────────────────────────────────── */}
      <section id="kalam-highlight" className="kalam-highlight section-alt">
        <div className="wrap kalam-highlight-inner reveal">
          <div className="kalam-highlight-copy">
            <h2 className="section-h2">With Dr. A.P.J.<br /><em>Abdul Kalam.</em></h2>
          </div>
          <figure className="kalam-highlight-image">
            <Image
              src="/abhay-kalam.jpg"
              alt="Abhay Jain with Dr. A.P.J. Abdul Kalam"
              fill
              sizes="(max-width: 960px) 100vw, 68vw"
            />
          </figure>
        </div>
      </section>

      {/* ── SOURCE SITE VISUAL ARCHIVE ────────────────────────────── */}
      <section className="source-archive section-alt">
        <div className="wrap source-archive-intro reveal">
          <div>
            <h2 className="section-h2">A place for<br /><em>the work behind</em><br />the work.</h2>
          </div>
          <div className="source-archive-copy-wrap">
            <p className="source-archive-copy">{sourceCopy.homeIntro}</p>
            <Link className="source-archive-link" href="/ideas-frameworks">Read more <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      {/* ── CURRENT FOCUS ──────────────────────────────────────────── */}
      <section id="focus" className="section">
        <div className="wrap section-grid reveal">
          <div>
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
              <div className="focus-item" key={i}>
                <span className="focus-idx">0{i + 1}</span>
                <p className="focus-text">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ───────────────────────────────────────────── */}
      <section id="track-record" className="section section-alt">
        <div className="wrap section-grid reveal">
          <div>
            <h2 className="section-h2">
              A record<br />
              of<br />
              <em>range.</em>
            </h2>
          </div>
          <div className="track-list">
            {trackRecord.map((item) => (
              <article className="track-item" key={item.label}>
                <span className="track-marker track-stat">{item.stat}</span>
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
              <h2 className="section-h2">
                Published<br />
                <em>record.</em>
              </h2>
            </div>
            <p className="work-aside">
              Research, technical writing, and patents that sit behind the operating profile.
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
                <span className="work-context">{work.source}</span>
                <span className="work-view">View <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER IMAGE SECTION ────────────────────────────────────── */}
      <section id="inbound" className="banner-section">
        <div className="banner-img-wrap">
          <Image
            src="/Abhay_Jain_banner_pic.jpg"
            alt="Abhay Jain presenting technical frameworks"
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
          <a
            className="btn btn-dark"
            href="https://www.linkedin.com/in/abhay-jain-10/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <nav className="social-row" aria-label="Social profiles">
            {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <span aria-hidden="true">↗</span></a>)}
          </nav>
        </div>
      </section>

      {/* ── AFFILIATIONS ───────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="wrap section-grid reveal">
          <div>
            <h2 className="section-h2">
              Built<br />
              across<br />
              <em>systems.</em>
            </h2>
          </div>
          <div className="aff-grid">
            <div className="aff-block">
              <h3 className="aff-title">Current</h3>
              <ul className="aff-list">
                {affiliations.current.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="aff-block">
              <h3 className="aff-title">Earlier</h3>
              <ul className="aff-list">
                {affiliations.earlier.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="aff-block">
              <h3 className="aff-title">Education</h3>
              <ul className="aff-list">
                {affiliations.education.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────── */}
      <section id="contact" className="contact-section">
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
              {sourceCopy.contactLead}
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
              <Link className="contact-link contact-link-secondary" href="/about-me">
                View full profile
              </Link>
            </div>
          </div>
        </div>

        <footer className="wrap site-footer footer-dark">
          <span>© {new Date().getFullYear()} Abhay Jain</span>
          <Link href="/about-me">About me</Link>
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
