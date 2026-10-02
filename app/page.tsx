const focusAreas = [
  'India-focused power-management and embedded analog semiconductor businesses',
  'Product definition, system applications, and commercial strategy',
  'Cross-functional execution across India and global teams',
  'Ecosystem partnerships across automotive, industrial, and energy markets',
];

const trackRecord = [
  {
    number: '01',
    label: 'Scale',
    detail: 'Strategy execution and process improvement inside a large power-business portfolio.',
  },
  {
    number: '02',
    label: 'Range',
    detail: 'Experience spanning engineering, commercialization, consulting, and product strategy.',
  },
  {
    number: '03',
    label: 'Perspective',
    detail: 'Operating experience across semiconductors, energy, manufacturing, and technology.',
  },
  {
    number: '04',
    label: 'Leadership',
    detail: 'Multi-stakeholder work across India, Japan, the United States, and global teams.',
  },
];

const selectedWork = [
  {
    type: 'Research',
    title: 'Global surveys of consumer sentiment during the coronavirus crisis',
    context: 'McKinsey research tracking how expectations, incomes, and behavior changed across markets.',
    href: 'https://textile-future.com/archives/47053',
  },
  {
    type: 'Technical paper',
    title: 'Technical challenges for compressors and steam turbines',
    context: 'A technical study on efficiency, reliability, and long-term operation in mega ethylene plants.',
    href: 'https://oaktrust.library.tamu.edu/handle/1969.1/160303',
  },
  {
    type: 'Patent',
    title: 'Emergency shut-off device and system',
    context: 'Co-developed safety mechanics for protecting steam-turbine systems under abnormal conditions.',
    href: 'https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2016084140',
  },
];

function OperatingField() {
  return (
    <div className="operating-field" aria-hidden="true">
      <div className="field-label field-label-top">SYSTEMS / 01</div>
      <div className="field-label field-label-bottom">SIGNAL · SCALE · EXECUTION</div>
      <svg className="field-svg" viewBox="0 0 620 620" fill="none">
        <defs>
          <linearGradient id="fieldGradient" x1="100" y1="40" x2="520" y2="580" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D5A36A" />
            <stop offset="0.52" stopColor="#6D8490" />
            <stop offset="1" stopColor="#17252A" />
          </linearGradient>
          <radialGradient id="fieldGlow" cx="0" cy="0" r="1" gradientTransform="translate(312 308) rotate(90) scale(214)">
            <stop stopColor="#D5A36A" stopOpacity="0.24" />
            <stop offset="1" stopColor="#D5A36A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="312" cy="308" r="214" fill="url(#fieldGlow)" />
        <circle className="field-orbit field-orbit-one" cx="312" cy="308" r="172" stroke="url(#fieldGradient)" strokeWidth="1.2" />
        <circle className="field-orbit field-orbit-two" cx="312" cy="308" r="116" stroke="#D5A36A" strokeOpacity="0.48" strokeWidth="1" strokeDasharray="3 11" />
        <circle cx="312" cy="308" r="7" fill="#D5A36A" />
        <circle cx="312" cy="308" r="15" stroke="#D5A36A" strokeOpacity="0.55" />
        <path className="field-line" d="M64 168H222L312 308L454 148H570" stroke="#6D8490" strokeOpacity="0.58" />
        <path className="field-line field-line-delay" d="M86 468H232L312 308L408 448H548" stroke="#D5A36A" strokeOpacity="0.44" />
        <path d="M312 54V562M58 308H566" stroke="#17252A" strokeOpacity="0.1" />
        <circle cx="222" cy="168" r="4" fill="#6D8490" />
        <circle cx="454" cy="148" r="4" fill="#D5A36A" />
        <circle cx="232" cy="468" r="4" fill="#D5A36A" />
        <circle cx="408" cy="448" r="4" fill="#6D8490" />
        <path d="M312 308L392 228" stroke="#D5A36A" strokeWidth="2" />
        <path d="M392 228h-28M392 228v28" stroke="#D5A36A" strokeWidth="2" />
      </svg>
      <div className="field-coordinate">12°58′N / 77°35′E</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhay Jain home">
          <span className="wordmark-mark">AJ</span>
          <span>Abhay Jain</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#focus">Focus</a>
          <a href="#track-record">Track record</a>
          <a href="#selected-work">Selected work</a>
          <a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Executive profile <span>—</span> Bengaluru / India</p>
          <h1>Abhay<br /><em>Jain</em></h1>
          <p className="hero-role">Business Division Leader · Renesas Electronics</p>
          <p className="hero-positioning">
            Works across power-management semiconductors, product direction, and execution in India and global markets.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <OperatingField />
          <figure className="portrait-frame">
            <Image src="/abhay-profile.jpg" alt="Abhay Jain in a suit" width={400} height={400} priority />
            <figcaption><span>01</span> Strategy / systems / execution</figcaption>
          </figure>
        </div>
        <div className="hero-note"><span>Scroll to explore</span><span className="hero-note-line" /></div>
      </section>

      <section id="focus" className="section-shell section-grid">
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

      <section id="track-record" className="section-shell section-grid track-section">
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

      <section id="selected-work" className="section-shell work-section">
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

      <section className="section-shell affiliations-section">
        <div className="section-grid">
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
            <a className="button button-light" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
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
import Image from 'next/image';
