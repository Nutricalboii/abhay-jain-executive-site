'use client';

import { useState } from 'react';
import type { SubmitEvent } from 'react';

export default function SubscribeForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <output className="form-success">
        <h2>Subscribed!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p className="form-preview-note">Preview state only — connect the final subscription service before launch.</p>
      </output>
    );
  }

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <label htmlFor="subscribe-email">Sign up to stay up to date</label>
      <div className="subscribe-row">
        <input id="subscribe-email" type="email" name="email" placeholder="Your email" autoComplete="email" required />
        <button className="btn btn-dark" type="submit">Subscribe <span aria-hidden="true">↗</span></button>
      </div>
      <p className="form-preview-note">By submitting your information, you are granting us permission to email you.</p>
    </form>
  );
}
