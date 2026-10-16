'use client';

import { useState } from 'react';
import type { SubmitEvent } from 'react';
import { sourceCopy } from '../source-data';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <output className="form-success">
        <h2>Message Sent!</h2>
        <p>{sourceCopy.success}</p>
        <p className="form-preview-note">Preview state only — connect the final delivery endpoint before launch.</p>
      </output>
    );
  }

  return (
    <form className="source-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>First name<input name="firstName" required /></label>
        <label>Last name<input name="lastName" required /></label>
        <label>Your email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Email subject<input name="subject" required /></label>
        <label>Your phone<input type="tel" name="phone" autoComplete="tel" /></label>
        <label className="form-full">Your message<textarea name="message" rows={6} required /></label>
      </div>
      <label className="form-consent"><input type="checkbox" required /> <span>{sourceCopy.permission}</span></label>
      <button className="btn btn-dark" type="submit">Send Message <span aria-hidden="true">↗</span></button>
      <p className="form-preview-note">This rebuilt preview preserves the source form and fields. Its delivery service still needs to be connected.</p>
    </form>
  );
}
