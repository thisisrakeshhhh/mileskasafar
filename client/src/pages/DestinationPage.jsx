import { Link, useParams } from "react-router-dom";
import { getDestination, getPackagesByDestination } from "../lib/data";
import { PackageCard } from "../components/PackageCard";

export function DestinationPage() {
  const { slug } = useParams();
  const destination = getDestination(slug);

  if (!destination) {
    return (
      <section className="auth-shell">
        <div className="auth-card">
          <p className="eyebrow">Destination</p>
          <h1>Destination not found.</h1>
          <Link to="/" className="solid-button wide">Return home</Link>
        </div>
      </section>
    );
  }

  const packages = getPackagesByDestination(destination.slug);

  return (
    <>
      <section className="destination-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 14, 21, 0.2), rgba(9, 14, 21, 0.78)), url(${destination.heroImage})` }}>
        <div className="shell">
          <p className="eyebrow">Destination funnel</p>
          <h1>{destination.name}</h1>
          <p className="hero-copy">{destination.blurb}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Why this route</p>
              <h2>{destination.tagline}</h2>
            </div>
            <Link to="/contact" className="text-link">Ask for a custom itinerary</Link>
          </div>
          <div className="facts-grid">
            {destination.facts.map((fact) => <div key={fact} className="fact-card">{fact}</div>)}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Matching packages</p>
              <h2>{packages.length} trips currently surfaced.</h2>
            </div>
          </div>
          <div className="package-grid">
            {packages.map((travelPackage) => <PackageCard key={travelPackage.slug} travelPackage={travelPackage} />)}
          </div>
        </div>
      </section>
    </>
  );
}
