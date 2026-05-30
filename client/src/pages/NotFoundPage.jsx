import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Not found</p>
        <h1>This page does not exist.</h1>
        <p className="auth-copy">The route may have changed while the MERN version was being rebuilt.</p>
        <Link to="/" className="solid-button wide">Return home</Link>
      </div>
    </section>
  );
}
