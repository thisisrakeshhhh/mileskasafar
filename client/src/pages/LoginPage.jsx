import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login({ email, password });
      navigate("/");
    } catch (submissionError) {
      setError(submissionError.response?.data?.message || submissionError.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Client access</p>
        <h1>Login</h1>
        <p className="auth-copy">Use your Miles Ka Safar account to access saved details and future bookings.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
          <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
          {error ? <p className="form-error">{error}</p> : null}
          <button type="submit" className="solid-button wide" disabled={submitting}>{submitting ? "Logging in..." : "Continue"}</button>
        </form>
      </div>
    </section>
  );
}
