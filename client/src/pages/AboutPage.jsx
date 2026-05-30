import { Link } from "react-router-dom";

const principles = [
  { title: "Package-led planning", copy: "We start from sellable itineraries with realistic travel time, clear stay blocks, and obvious upgrade points." },
  { title: "Faster inquiry handling", copy: "The site structure answers common trip questions up front instead of relying on manual sales follow-up." },
  { title: "Customizable without chaos", copy: "Travelers can start from a base route and then adjust hotel tier, travel style, and add-ons." }
];

export function AboutPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">About Miles Ka Safar</p>
            <h1>Curated travel planning with clearer package pages and faster expert support.</h1>
          </div>
          <p>Miles Ka Safar is positioned like a practical travel-selling website, where each page helps discovery, comparison, and inquiry conversion.</p>
        </div>
        <div className="about-grid">
          {principles.map((principle) => (
            <article key={principle.title} className="detail-card">
              <h2>{principle.title}</h2>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
        <section className="section section-soft about-band">
          <div className="shell shell-tight">
            <p className="eyebrow">Best fit</p>
            <h2>Built for the core trip categories most agencies actually sell.</h2>
            <div className="pill-row">
              {["Couple trips", "Family vacations", "Group departures", "Corporate offsites"].map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link to="/packages" className="solid-button">Browse packages</Link>
              <Link to="/contact" className="ghost-button">Contact the team</Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
