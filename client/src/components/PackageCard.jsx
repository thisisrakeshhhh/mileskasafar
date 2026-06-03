import { Link } from "react-router-dom";

export function PackageCard({ travelPackage }) {
  return (
    <article className="package-card">
      <div className="package-price-ribbon">Starts at Rs. {travelPackage.priceFrom.toLocaleString("en-IN")}/-</div>
      <div
        className="package-card-image"
        style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(9, 14, 21, 0.55)), url(${travelPackage.heroImage})` }}
      >
        <span className="package-chip">{travelPackage.destination.replace("-", " ")}</span>
      </div>
      <div className="package-card-body">
        <h3 className="package-title-strong">{travelPackage.title}</h3>
        <div className="package-facts">
          <span>📍 Chandigarh</span>
          <span>🕒 {travelPackage.duration}</span>
        </div>
        <p>{travelPackage.summary}</p>
        <div className="package-card-meta package-card-dates">
          <span>🗓 May 15, May 21, May 28</span>
        </div>
        <Link to={`/packages/${travelPackage.slug}`} className="text-link">View itinerary</Link>
      </div>
    </article>
  );
}
