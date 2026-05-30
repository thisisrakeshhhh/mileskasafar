import { Link } from "react-router-dom";
import { PackageCard } from "../components/PackageCard";
import { destinations, travelPackages } from "../lib/data";
import logoImg from "../images/logo.jpeg";

const featuredPackages = travelPackages.slice(-4);
const trustPoints = [
  { label: "Community", value: "12k on social" },
  { label: "Trips", value: "10+ successful departures" },
  { label: "Reviews", value: "100+ verified ratings" },
  { label: "Promise", value: "Best price guidance" }
];
const processSteps = [
  { title: "Pick the destination vibe", copy: "Choose mountains, beaches, or calm hill routes before deep comparison." },
  { title: "Review a ready itinerary", copy: "Every package is structured around duration, route, stays, and clear highlights." },
  { title: "Talk to an expert fast", copy: "Use the inquiry flow to finalize dates, pricing, and custom additions." }
];
const testimonials = [
  { name: "Neha and Arjun", quote: "The itinerary felt clean and realistic. Travel days were paced well and the stay choices were stronger than typical package tours." },
  { name: "Aman, Gurgaon", quote: "We needed a quick trip. The package page made it easy to decide without a long back and forth." },
  { name: "Ritika Family Group", quote: "The route sequence and houseboat night style planning felt much more polished than random package lists." }
];
const himachalTrips = travelPackages.filter((item) => item.destination === "himachal");
const summerTrips = travelPackages.filter((item) => item.destination !== "himachal");

export function HomePage() {
  return (
    <>
<section className="hero hero-photo">
  <div className="hero-overlay">
    <div className="shell hero-centered">


      <h1>Let&apos;s Explore Together</h1>

      <div className="hero-search hero-search-centered">
        <div className="hero-search-row hero-search-row-dark">
          <div className="hero-search-input hero-search-input-light">
            Manali...
          </div>

          <Link to="/packages" className="hero-search-button">
            ⌕
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="section">
        <div className="shell">
          <div className="trust-strip trust-strip-home">
            {trustPoints.map((point) => (
              <div key={point.label} className="trust-item trust-item-plain">
                <span>{point.label}</span>
                <strong>{point.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section trip-strip-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Popular Trips</p>
              <h2>Best selling departures this month.</h2>
            </div>
            <Link to="/packages" className="text-link">View all</Link>
          </div>
          <div className="trip-scroll-row">
            {featuredPackages.map((travelPackage) => (
              <PackageCard key={travelPackage.slug} travelPackage={travelPackage} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Himachal Trips</p>
              <h2>Mountain routes with the highest demand.</h2>
            </div>
            <select className="month-chip" defaultValue="may">
              <option value="may">May</option>
              <option value="june">June</option>
            </select>
          </div>
          <div className="trip-grid">
            {himachalTrips.map((travelPackage) => (
              <PackageCard key={travelPackage.slug} travelPackage={travelPackage} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Summer Destinations</p>
              <h2>Explore more curated routes.</h2>
            </div>
            <Link to="/contact" className="text-link">Custom plan</Link>
          </div>
          <div className="destination-grid destination-grid-large">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                to={`/destinations/${destination.slug}`}
                className="destination-card"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 14, 21, 0.2), rgba(9, 14, 21, 0.74)), url(${destination.heroImage})` }}
              >
                <p className="destination-name">{destination.name}</p>
                <p className="destination-tagline">{destination.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell split-banner">
          <div>
            <p className="eyebrow">In doubt? Can&apos;t decide?</p>
            <h2>Hand over the planning to travel experts.</h2>
            <p className="hero-copy">
              Get direct guidance from Miles Ka Safar travel experts if you are not ready to compare package pages on your own.
            </p>
          </div>
          <div className="split-banner-actions">
            <Link to="/contact" className="solid-button">Reach out now</Link>
            <Link to="/signup" className="ghost-button">Submit trip brief</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>Simple flow from discovery to conversation.</h2>
            </div>
          </div>
          <div className="steps-grid steps-grid-three">
            {processSteps.map((step, index) => (
              <article key={step.title} className="step-card step-card-soft">
                <p className="step-index">0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Client notes</p>
              <h2>Proof that the trip format works.</h2>
            </div>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p>{item.quote}</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
