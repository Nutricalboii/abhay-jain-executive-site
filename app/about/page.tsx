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
    role: 'Business Division Leader',
    detail: 'Leading work across power management, product direction, strategy execution, and India-focused growth.',
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
    company: 'NextEra Energy',
    role: 'MBA Intern · Renewable Energy Innovation & Strategy',
    detail: 'Worked on questions at the intersection of energy transition, innovation, and market strategy.',
  },
  {
    marker: '04',
    company: 'AutoGrid',
    role: 'Summer Intern · Solutions & Data Science',
    detail: 'Worked on software and data-led approaches to modern energy systems.',
  },
  {
    marker: '05',
    company: 'Sparkz Inc. · Averda',
    role: 'Business & Product Development · COO Office Operations',
    detail: 'Early operating experience across product development, sustainability, and execution.',
  },
];

const education = [
  { school: 'Stanford University', program: 'MBA', note: 'Graduate School of Business' },
  { school: 'Stanford University', program: 'MS in Environment and Resources', note: 'Interdisciplinary work across energy, sustainability, and systems.' },
  { school: 'Indian Institute of Technology, Kanpur', program: 'B.Tech in Materials & Metallurgical Engineering', note: 'Engineering foundation with a broad institutional perspective.' },
];

const recognitions = [
  'K. C. Mahindra Scholarship for Graduate Studies, 2017',
  'J. N. Tata Scholarship for Graduate Studies, 2017',
  'Social Management Immersion Fellowship, Stanford, 2018',
  'Certificate in Public Management and Social Innovation, Stanford, 2019',
  'InSite Fellowship, 2019',
];

const publishedWork = [
  { group: 'Research', title: 'Global surveys of consumer sentiment during the coronavirus crisis', source: 'McKinsey · 2020', href: 'https://textile-future.com/archives/47053' },
  { group: 'Research', title: 'Low Hanging Fruit: VC Investment Trends in Food Waste', source: 'Stanford EIPER · 2020', href: 'https://earth.stanford.edu/eiper/capstone/archives' },
  { group: 'Research', title: 'Stanford experts discuss challenges and opportunities in disposing of waste', source: 'Stanford News · 2019', href: 'https://pangea.stanford.edu/news/stanford-experts-discuss-challenges-and-opportunities-disposing-waste' },
  { group: 'Technical paper', title: 'Technical Challenges for Compressors and Steam Turbines for Efficient and Sustainable Operation in Mega Ethylene Plants', source: 'Texas A&M Asia Turbomachinery & Pump Symposium · 2016', href: 'https://oaktrust.library.tamu.edu/handle/1969.1/160303' },
  { group: 'Patent', title: 'Emergency Shut-Off Device', source: 'Mitsubishi Heavy Industries · 2017', href: 'https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2017104037' },
  { group: 'Patent', title: 'Emergency Shutoff Device and Emergency Shutoff System', source: 'Mitsubishi Heavy Industries · 2016', href: 'https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2016084140' },
  { group: 'Writing', title: 'The clock stops ticking', source: 'Vox-populi, IIT Kanpur · 2016', href: 'https://voxiitk.com/the-clock-stops-ticking/' },
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
        <Link href="/#track-record">Track record</Link>
        <Link className="nav-contact" href="/#contact">Contact <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
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
          <div className="about-grid-mark" aria-hidden="true"><span /><span /><span /><span /></div>
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

      <section className="section-shell about-section about-career">
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
        <div className="section-shell about-section">
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

      <section className="section-shell about-section about-recognition">
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
        <div className="section-shell about-section">
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

      <section className="section-shell about-section about-beyond">
        <div className="about-section-intro">
          <p className="eyebrow">06 / Beyond work</p>
          <h2>Keep a wider<br />view.</h2>
        </div>
        <div className="beyond-copy">
          <p>Abhay has lived and worked across India, Japan, and the United States. Outside formal roles, his interests include table tennis, pool, golf, road trips, and dance.</p>
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
