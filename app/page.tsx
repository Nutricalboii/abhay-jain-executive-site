import Image from 'next/image';
import Link from 'next/link';

const focusAreas = [
  'Power-management and embedded analog businesses in India',
  'Product definition and commercial strategy',
  'Execution across India and global teams',
  'Partnerships across automotive, industrial, and energy markets',
];

const trackRecord = [
  {
    number: '01',
    label: 'Consulting',
    detail: 'Management consulting at McKinsey across technology, energy, and operations.',
  },
  {
    number: '02',
    label: 'Industry',
    detail: 'Engineering and sales at Mitsubishi Heavy Industries across compressors and steam turbines.',
  },
  {
    number: '03',
    label: 'Operating range',
    detail: 'Experience spanning semiconductors, energy, software, manufacturing, and sustainability.',
  },
  {
    number: '04',
    label: 'Perspective',
    detail: 'Work across India, Japan, the United States, and global teams.',
  },
];

const selectedWork = [
  {
    type: 'Research',
    title: 'Global surveys of consumer sentiment during the coronavirus crisis',
    context: 'McKinsey research tracking how expectations, incomes, and behavior changed across markets.',
    href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/a-global-view-of-how-consumer-behavior-is-changing-amid-covid-19',
  },
  {
    type: 'Research',
    title: 'Low Hanging Fruit: VC investment trends in food waste',
    context: 'Stanford EIPER research on capital, waste systems, and emerging opportunities.',
    href: 'https://earth.stanford.edu/eiper',
  },
  {
    type: 'Technical paper',
    title: 'Compressors and steam turbines in mega ethylene plants',
    context: 'A technical study on efficient and sustainable operation in complex industrial systems.',
    href: 'https://oaktrust.library.tamu.edu/handle/1969.1/160303',
  },
  {
    type: 'Patent',
    title: 'Emergency shut-off device and system',
    context: 'Two Mitsubishi Heavy Industries patent publications focused on industrial safety.',
    href: 'https://patents.google.com/patent/US10443513B2/en',
  },
];

function SignalField() {
  return (
    <div className="signal-field" aria-hidden="true">
      <div className="field-label field-label-top">SIGNAL / 01</div>
      <div className="field-label field-label-bottom">POWER · SYSTEMS · SCALE</div>
      <svg className="field-svg" viewBox="0 0 620 620" fill="none" role="presentation">
        <path className="field-crosshair" d="M48 310H572M310 48V572" />
        <path className="field-wave field-wave-noisy" d="M0 311C36 311 34 250 69 250C104 250 99 371 133 371C166 371 162 276 198 276C232 276 234 343 267 343C301 343 304 269 338 269C371 269 374 350 407 350C440 350 445 286 479 286C512 286 514 325 550 325C580 325 583 310 620 310" />
        <path className="field-wave field-wave-clean" d="M0 310C108 310 148 310 206 310C262 310 284 309 344 310C410 311 463 310 620 310" />
        <circle className="field-node node-one" cx="198" cy="276" r="5" />
        <circle className="field-node node-two" cx="407" cy="350" r="5" />
        <circle className="field-core" cx="310" cy="310" r="8" />
        <circle className="field-core-ring" cx="310" cy="310" r="22" />
      </svg>
      <div className="field-coordinate">POWER / 00.00 — 01.00</div>
    </div>
  );
}

function SignalThread() {
  return (
    <div className="signal-thread" aria-hidden="true">
      <svg viewBox="0 0 120 2200" preserveAspectRatio="none" fill="none" role="presentation">
        <path className="thread-guide" d="M60 0V2200" />
        <path className="thread-path" pathLength="1" d="M60 0C60 90 22 120 60 220C98 320 24 394 60 505C99 625 30 735 60 845C92 965 27 1080 60 1200C93 1320 29 1434 60 1550C92 1670 30 1810 60 1925C75 1980 60 2084 60 2200" />
        <circle className="thread-dot dot-one" cx="60" cy="240" r="5" />
        <circle className="thread-dot dot-two" cx="60" cy="870" r="5" />
        <circle className="thread-dot dot-three" cx="60" cy="1556" r="5" />
      </svg>
      <span className="thread-label thread-label-one">01</span>
      <span className="thread-label thread-label-two">02</span>
      <span className="thread-label thread-label-three">03</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <SignalThread />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhay Jain home">
          <span className="wordmark-mark">AJ</span>
          <span>Abhay Jain</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/about">About</Link>
          <a href="#focus">Focus</a>
          <a href="#selected-work">Work</a>
          <a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Executive profile <span>—</span> India / global</p>
          <h1>Abhay<br /><em>Jain</em></h1>
          <p className="hero-role">[Current title TBC] · Renesas Electronics</p>
          <p className="hero-positioning">
            Business and strategy leader across power-management semiconductors, product strategy, and ecosystem development.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <SignalField />
          <figure className="portrait-frame">
            <Image src="/abhay-profile.jpg" alt="Abhay Jain in a suit" width={400} height={400} priority />
            <figcaption><span>01</span> Strategy / systems / execution</figcaption>
          </figure>
        </div>
        <div className="hero-note"><span>Scroll to explore</span><span className="hero-note-line" /></div>
      </section>

      <section id="focus" className="section-shell section-grid reveal-section">
        <div className="section-intro">
          <p className="eyebrow">01 / Current focus</p>
          <h2>Where the work is now.</h2>
        </div>
        <div className="focus-list">
          {focusAreas.map((area, index) => (
            <div className="focus-item" key={area}>
              <span className="item-index">0{index + 1}</span>
              <p>{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="track-record" className="section-shell section-grid track-section reveal-section">
        <div className="section-intro">
          <p className="eyebrow">02 / Track record</p>
          <h2>Useful range.<br />Clear ownership.</h2>
        </div>
        <div className="track-list">
          {trackRecord.map((item) => (
            <article className="track-item" key={item.number}>
              <span className="item-index">{item.number}</span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="selected-work" className="section-shell work-section reveal-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">03 / Selected work</p>
            <h2>Proof, not volume.</h2>
          </div>
          <p className="section-aside">A small set of work that shows the operating range.</p>
        </div>
        <div className="work-list">
          {selectedWork.map((work, index) => (
            <a className="work-item" key={work.title} href={work.href} target="_blank" rel="noreferrer">
              <span className="item-index">0{index + 1}</span>
              <span className="work-type">{work.type}</span>
              <span className="work-title">{work.title}</span>
              <span className="work-context">{work.context}</span>
              <span className="work-view">View <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell affiliations-section reveal-section">
        <div className="section-grid section-grid-tight">
          <div className="section-intro">
            <p className="eyebrow">04 / Roles & affiliations</p>
            <h2>Built across<br />different systems.</h2>
          </div>
          <div className="affiliations-copy">
            <div className="affiliation-group">
              <p className="affiliation-label">Current</p>
              <p>Renesas Electronics</p>
            </div>
            <div className="affiliation-group">
              <p className="affiliation-label">Earlier</p>
              <p>McKinsey & Company<br />Mitsubishi Heavy Industries<br />NextEra Energy<br />AutoGrid · Sparkz · Averda</p>
            </div>
            <div className="affiliation-group">
              <p className="affiliation-label">Education</p>
              <p>Stanford University<br />Indian Institute of Technology, Kanpur</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-inner">
          <div>
            <p className="eyebrow eyebrow-light">05 / Contact</p>
            <h2>Relevant conversation?<br /><em>Let’s begin there.</em></h2>
          </div>
          <div className="contact-action">
            <p>For advisory, operating, semiconductor ecosystem, or institutional conversations.</p>
            <div className="contact-links">
              <span className="contact-placeholder">Email [TBC]</span>
              <a className="button button-light" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} Abhay Jain</span>
        <span>Executive profile / abhayjain.net</span>
      </footer>
    </main>
  );
}
