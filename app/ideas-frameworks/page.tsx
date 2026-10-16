import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SubscribeForm from '../components/SubscribeForm';
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
            <span>Business &amp; Strategy</span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <Link href="/about-me">About</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/ideas-frameworks" className="nav-active">Ideas &amp; Frameworks</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#focus">Focus</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/contact-me" className="nav-cta">Contact <span aria-hidden="true">↗</span></Link>
          </nav>
        </header>

        <section className="source-page-hero wrap">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" />Ideas &amp; Frameworks</p>
            <h1 className="source-page-title">Thoughts,<br /><em>learnings,</em><br />and ideas.</h1>
            <p className="source-page-lede">{sourceCopy.homeIntro}</p>
          </div>
          <div className="source-page-image">
            <Image src="/abhay-himalayan-meeting.jpg" alt="Abhay Jain in conversation" fill sizes="(max-width: 960px) 100vw, 48vw" />
            <span className="image-caption">Ideas / Frameworks / 01</span>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap source-empty-state reveal">
            <div>
              <p className="section-number">01</p>
              <p className="section-label">Published ideas</p>
              <h2 className="section-h2">A quiet<br /><em>beginning.</em></h2>
            </div>
            <p className="source-empty-copy">There are no published ideas in the source archive yet. This page remains ready for future writing without turning the site into a content repository.</p>
          </div>
        </section>

        <section className="section">
          <div className="wrap subscribe-panel reveal">
            <div>
              <p className="section-label">Stay connected</p>
              <h2 className="section-h2">Sign up to<br /><em>stay current.</em></h2>
            </div>
            <SubscribeForm />
          </div>
        </section>

        <footer className="wrap site-footer">
          <Link href="/">← Home</Link>
          <div className="social-row" aria-label="Social profiles">
            {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <span aria-hidden="true">↗</span></a>)}
          </div>
          <Link href="/sitemap.xml">Sitemap</Link>
          <span>© {new Date().getFullYear()} Abhay Jain</span>
        </footer>
      </main>
    </>
  );
}
