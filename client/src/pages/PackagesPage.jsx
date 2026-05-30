import { PackageCard } from "../components/PackageCard";
import { travelPackages } from "../lib/data";

export function PackagesPage() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Packages</p>
            <h1>Travel products ready to sell.</h1>
          </div>
          <p>Explore curated packages built for clearer decisions, shorter sales cycles, and easier inquiry handling.</p>
        </div>
        <div className="package-grid">
          {travelPackages.map((travelPackage) => (
            <PackageCard key={travelPackage.slug} travelPackage={travelPackage} />
          ))}
        </div>
      </div>
    </section>
  );
}
