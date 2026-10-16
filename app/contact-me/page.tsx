import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { socialLinks, sourceCopy } from '../source-data';

export const metadata: Metadata = {
  title: 'Contact me — Abhay Jain',
  description: 'Contact Abhay Jain to discuss an idea, opportunity, or conversation.',
  alternates: { canonical: '/contact-me' },
};

export default function ContactMePage() {
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
            <Link href="/ideas-frameworks">Ideas &amp; Frameworks</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#focus">Focus</Link>
            <span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/contact-me" className="nav-cta nav-active">Contact <span aria-hidden="true">↗</span></Link>
          </nav>
        </header>

        <section className="source-page-hero source-page-hero-contact wrap">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" />Contact me</p>
            <h1 className="source-page-title">Start a<br /><em>conversation.</em></h1>
            <p className="source-page-lede">{sourceCopy.contactLead}</p>
            <div className="contact-socials" aria-label="Social profiles">
              {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <span aria-hidden="true">↗</span></a>)}
            </div>
          </div>
          <div className="source-page-image">
            <Image src="/contact-writing.jpg" alt="Notebook and pen on a desk" fill sizes="(max-width: 960px) 100vw, 48vw" />
            <span className="image-caption">Contact / 01</span>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap contact-form-layout reveal">
            <div>
              <p className="section-number">01</p>
              <p className="section-label">Contact me</p>
              <h2 className="section-h2">Make the<br /><em>first move.</em></h2>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer className="wrap site-footer">
          <Link href="/">← Home</Link>
          <Link href="/about-me">About me</Link>
          <Link href="/ideas-frameworks">Ideas &amp; Frameworks</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
          <span>© {new Date().getFullYear()} Abhay Jain</span>
        </footer>
      </main>
    </>
  );
}
