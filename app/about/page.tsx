import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Abhay Jain — Executive Profile',
  description: 'A selected profile of Abhay Jain’s operating experience, education, recognitions, and published work.',
  alternates: { canonical: '/about' },
};

const career = [
  {
    marker: 'Now',
    company: 'Renesas Electronics',
    role: '[Current title TBC]',
    detail: 'Work across power management, product direction, strategy execution, and India-focused growth.',
  },
  {
    marker: '01',
    company: 'McKinsey & Company',
    role: 'Consultant',
    detail: 'Worked across operations, commercialization, and growth questions for technology and energy businesses.',
  },
  {
    marker: '02',
    company: 'Mitsubishi Heavy Industries',
    role: 'Sales & Marketing Executive · Compressor & Steam Turbine Engineer',
    detail: 'Combined technical engineering work with commercial responsibility in industrial systems.',
  },
  {
    marker: '03',
    company: 'Earlier operating roles',
    role: 'NextEra Energy · AutoGrid · Sparkz · Averda',
    detail: 'Experience across renewable energy strategy, energy software, product development, sustainability, and COO-office operations.',
  },
];

const education = [
  { school: 'Stanford University', program: 'MBA', note: 'Graduate School of Business' },
  { school: 'Stanford University', program: 'MS in Environment and Resources', note: 'Interdisciplinary work across energy, sustainability, and systems.' },
  { school: 'Indian Institute of Technology, Kanpur', program: 'B.Tech in Materials & Metallurgical Engineering', note: 'Engineering foundation with a broad institutional perspective.' },
];

const recognitions = [
  'K. C. Mahindra and J. N. Tata Scholarships for Graduate Studies, 2017',
  'Social Management Immersion Fellowship, Stanford, 2018',
  'Certificate in Public Management and Social Innovation, Stanford, 2019 · InSite Fellowship, 2019',
];

const publishedWork = [
  { group: 'Research', title: 'Global surveys of consumer sentiment during the coronavirus crisis', source: 'McKinsey · 2020', href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/a-global-view-of-how-consumer-behavior-is-changing-amid-covid-19' },
  { group: 'Research', title: 'Low Hanging Fruit: VC Investment Trends in Food Waste', source: 'Stanford EIPER · 2020', href: 'https://earth.stanford.edu/eiper' },
  { group: 'Research', title: 'Stanford experts discuss challenges and opportunities in disposing of waste', source: 'Stanford Report · 2019', href: 'https://news.stanford.edu/stories/2019/04/reassessing-waste-not' },
  { group: 'Technical paper', title: 'Compressors and steam turbines in mega ethylene plants', source: 'Texas A&M Asia Turbomachinery & Pump Symposium · 2016', href: 'https://oaktrust.library.tamu.edu/handle/1969.1/160303' },
  { group: 'Patents', title: 'Emergency shut-off device and system', source: 'Mitsubishi Heavy Industries · 2016–17 · two publications', href: 'https://patents.google.com/patent/US10443513B2/en' },
];

function AboutHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Abhay Jain home">
        <span className="wordmark-mark">AJ</span>
        <span>Abhay Jain</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="nav-active" href="/about">About</Link>
        <Link href="/#focus">Focus</Link>
        <Link href="/#selected-work">Work</Link>
        <Link className="nav-contact" href="/#contact">Contact <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}

function RouteMap() {
  return (
    <div className="route-map" aria-label="A route from the Himalayan foothills through Japan and the United States to India">
      <svg viewBox="0 0 640 520" fill="none">
        <path className="route-grid-line" d="M76 115H565M76 260H565M76 405H565" />
        <path className="route-path" d="M94 370C170 330 152 218 243 252C330 284 303 112 397 157C483 198 471 343 548 129" />
        <circle className="route-node" cx="94" cy="370" r="5" />
        <circle className="route-node" cx="243" cy="252" r="5" />
        <circle className="route-node" cx="397" cy="157" r="5" />
        <circle className="route-node" cx="548" cy="129" r="5" />
      </svg>
      <span className="route-label route-label-one">Himalayan foothills</span>
      <span className="route-label route-label-two">Japan</span>
      <span className="route-label route-label-three">United States</span>
      <span className="route-label route-label-four">India</span>
      <span className="route-caption">A personal geography / 01</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      <AboutHeader />

      <section className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">About / 01</p>
          <h1>A career across<br /><em>systems.</em></h1>
          <p className="about-lede">Abhay works at the intersection of technology, markets, and execution—moving between the technical detail of a product and the institutional decisions that determine whether it scales.</p>
          <p className="about-origin">From the foothills of the Himalayas to Japan, the United States, and India.</p>
        </div>
        <div className="about-hero-visual">
          <RouteMap />
          <figure className="about-portrait">
            <Image src="/abhay-profile.jpg" alt="Abhay Jain in a suit" width={400} height={400} priority />
            <figcaption><span>PROFILE / 01</span><span>ABHAY JAIN</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="about-statement">
        <div className="section-shell about-statement-inner">
          <p className="eyebrow">The throughline</p>
          <p className="statement-copy">The work has changed industries, but the question has stayed consistent: how do complex systems become useful, adoptable, and durable?</p>
        </div>
      </section>

      <section className="section-shell about-section about-career reveal-section">
        <div className="about-section-intro">
          <p className="eyebrow">02 / Experience</p>
          <h2>Operating<br />range.</h2>
        </div>
        <div className="career-timeline">
          {career.map((item) => (
            <article className="career-item" key={`${item.company}-${item.role}`}>
              <span className="career-marker">{item.marker}</span>
              <div className="career-content">
                <h3>{item.company}</h3>
                <p className="career-role">{item.role}</p>
                <p className="career-detail">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-education">
        <div className="section-shell about-section reveal-section">
          <div className="about-section-intro">
            <p className="eyebrow">03 / Education</p>
            <h2>Technical<br />grounding.</h2>
          </div>
          <div className="education-list">
            {education.map((item, index) => (
              <article className="education-item" key={`${item.school}-${item.program}`}>
                <span className="item-index">0{index + 1}</span>
                <div>
                  <h3>{item.school}</h3>
                  <p className="education-program">{item.program}</p>
                  <p className="education-note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell about-section about-recognition reveal-section">
        <div className="about-section-intro">
          <p className="eyebrow">04 / Recognition</p>
          <h2>Signals of<br />trust.</h2>
        </div>
        <div className="recognition-list">
          {recognitions.map((item, index) => (
            <div className="recognition-item" key={item}>
              <span className="item-index">0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-work">
        <div className="section-shell about-section reveal-section">
          <div className="about-section-intro about-work-intro">
            <p className="eyebrow">05 / Publications & patents</p>
            <h2>Selected<br />work.</h2>
            <p>Research, technical writing, and inventions that sit behind the operating profile.</p>
          </div>
          <div className="about-publications">
            {publishedWork.map((item, index) => (
              <a className="publication-item" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <span className="item-index">0{index + 1}</span>
                <span className="publication-group">{item.group}</span>
                <span className="publication-title">{item.title}</span>
                <span className="publication-source">{item.source}</span>
                <span className="publication-view">View <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell about-section about-beyond reveal-section">
        <div className="about-section-intro">
          <p className="eyebrow">06 / Beyond work</p>
          <h2>Keep a wider<br />view.</h2>
        </div>
        <div className="beyond-copy">
          <p>Raised in the Himalayan foothills, Abhay lived in Japan for four years before moving to the United States for graduate study. Outside formal roles, his interests include table tennis, pool, golf, road trips, and dance.</p>
          <p className="beyond-caption">Personal detail, kept in proportion.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-shell contact-inner">
          <div>
            <p className="eyebrow eyebrow-light">07 / Contact</p>
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
        <Link href="/">← Home</Link>
        <span>© {new Date().getFullYear()} Abhay Jain</span>
        <span>Executive profile / abhayjain.net</span>
      </footer>
    </main>
  );
}
