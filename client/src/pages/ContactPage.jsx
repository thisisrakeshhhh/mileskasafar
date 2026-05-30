import { useState } from "react";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="section">
      <div className="shell contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Talk to Miles Ka Safar before you lock the route.</h1>
          <p className="hero-copy">For a package-led travel business, inquiry capture matters before deep booking automation.</p>
          <div className="contact-card-grid">
            {[
              { title: "Call", value: "+91 98XXX XXXXX", note: "Mon-Sat, 10:00-19:00" },
              { title: "Email", value: "hello@mileskasafar.in", note: "Best for custom itineraries" },
              { title: "Office", value: "New Delhi", note: "Remote-first planning team" }
            ].map((card) => (
              <article key={card.title} className="fact-card">
                <p className="eyebrow">{card.title}</p>
                <h3>{card.value}</h3>
                <p>{card.note}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="auth-card">
          <p className="eyebrow">Inquiry form</p>
          <h2>Tell us the trip shape.</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>Full name<input type="text" placeholder="Your name" required /></label>
            <label>Email<input type="email" placeholder="name@example.com" required /></label>
            <label>Destination<input type="text" placeholder="Himachal, Uttarakhand..." /></label>
            <label>Travel brief<textarea rows={5} placeholder="Dates, budget range, group size, and priorities" required /></label>
            <button type="submit" className="solid-button wide">Send inquiry</button>
            {sent ? <p className="form-success">Inquiry captured in the frontend. Wire this form to your API or CRM next.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
