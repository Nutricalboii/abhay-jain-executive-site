import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { socialLinks, sourceCopy } from '../source-data';

export const metadata: Metadata = {
  title: 'Ideas & Frameworks — Abhay Jain',
  description: 'A place to share thoughts, learnings, ideas, and general musings from Abhay Jain.',
  alternates: { canonical: '/ideas-frameworks' },
};

export default function IdeasFrameworksPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main id="main-content">
        <header className="site-header">
          <Link className="wordmark" href="/" aria-label="Business and strategy home">
            <span className="wordmark-badge">AJ</span>
            <span className="wordmark-copy">
              <strong className="wordmark-name">Abhay Jain</strong>
              <small className="wordmark-role">Business &amp; Strategy</small>
            </span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <Link href="/">Home</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/about-me">About</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#work" className="nav-active">Work</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#focus">Focus</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/contact-me" className="nav-cta">Contact <span aria-hidden="true">↗</span></Link>
          </nav>
        </header>

        <section className="source-page-hero wrap">
          <div>
            <h1 className="source-page-title">Notes from<br /><em>the work.</em></h1>
            <p className="source-page-lede">{sourceCopy.homeIntro}</p>
            <div className="source-page-actions">
              <Link className="btn btn-dark" href="/#work">View selected work <span className="btn-icon" aria-hidden="true">↗</span></Link>
              <Link className="btn btn-outline" href="/contact-me">Start a conversation <span className="btn-icon" aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="source-page-image">
            <Image src="/abhay-himalayan-meeting.jpg" alt="Abhay Jain" fill sizes="(max-width: 960px) 100vw, 48vw" priority />
          </div>
        </section>

        <footer className="wrap site-footer">
          <Link href="/">← Home</Link>
          <div className="social-row" aria-label="Social profiles">
            {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <span aria-hidden="true">↗</span></a>)}
          </div>
          <Link href="/#work">Work</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
          <span>© {new Date().getFullYear()} Abhay Jain</span>
        </footer>
      </main>
    </>
  );
}
