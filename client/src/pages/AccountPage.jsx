import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export function AccountPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || !user) {
    return (
      <section className="auth-shell">
        <div className="auth-card">
          <p className="eyebrow">Account</p>
          <h1>You are not logged in.</h1>
          <p className="auth-copy">Use the login page to access future booking history and inquiry details.</p>
          <Link to="/login" className="solid-button wide">Go to login</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">My account</p>
            <h1>{user.name}</h1>
          </div>
          <p>This is the core signed-in page for the MERN frontend. It can expand into bookings, payments, and inquiry tracking.</p>
        </div>
        <div className="account-grid">
          <article className="detail-card">
            <h2>Traveler details</h2>
            <div className="account-meta">
              <div><span>Email</span><strong>{user.email}</strong></div>
              <div><span>Phone</span><strong>{user.phone || "Not added yet"}</strong></div>
            </div>
          </article>
          <article className="detail-card">
            <h2>Next expansions</h2>
            <ul className="simple-list">
              <li>Track submitted trip inquiries</li>
              <li>Show booked departures and payment state</li>
              <li>Compare package variations by stay tier</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
