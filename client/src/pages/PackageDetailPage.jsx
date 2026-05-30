import { Link, useParams } from "react-router-dom";
import { getPackage } from "../lib/data";

export function PackageDetailPage() {
  const { slug } = useParams();
  const travelPackage = getPackage(slug);

  if (!travelPackage) {
    return (
      <section className="auth-shell">
        <div className="auth-card">
          <p className="eyebrow">Package</p>
          <h1>Package not found.</h1>
          <Link to="/packages" className="solid-button wide">Back to packages</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="shell detail-layout">
        <div>
          <div className="detail-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 14, 21, 0.24), rgba(9, 14, 21, 0.72)), url(${travelPackage.heroImage})` }}>
            <p className="eyebrow">{travelPackage.destination}</p>
            <h1>{travelPackage.title}</h1>
            <p>{travelPackage.summary}</p>
          </div>

          <div className="detail-grid">
            <section className="detail-card">
              <h2>Highlights</h2>
              <ul className="simple-list">
                {travelPackage.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </section>
            <section className="detail-card">
              <h2>Stay flow</h2>
              <ul className="simple-list">
                {travelPackage.stays.map((stay) => <li key={stay}>{stay}</li>)}
              </ul>
            </section>
          </div>

          <section className="detail-card">
            <h2>Itinerary</h2>
            <div className="itinerary-list">
              {travelPackage.itinerary.map((stop) => (
                <article key={stop.day} className="itinerary-item">
                  <p className="eyebrow">{stop.day}</p>
                  <h3>{stop.title}</h3>
                  <p>{stop.details}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="booking-card">
          <p className="eyebrow">Quick brief</p>
          <p className="price-line">Rs. {travelPackage.priceFrom.toLocaleString("en-IN")}</p>
          <p className="muted">Starting price per traveler</p>
          <div className="booking-meta">
            <div><span>Duration</span><strong>{travelPackage.duration}</strong></div>
            <div><span>Group size</span><strong>{travelPackage.groupSize}</strong></div>
          </div>
          <Link to="/signup" className="solid-button wide">Request callback</Link>
          <Link to="/packages" className="ghost-button wide">Back to packages</Link>
        </aside>
      </div>
    </section>
  );
}
