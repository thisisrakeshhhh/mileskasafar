import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export function SignupPage() {
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", message: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await signup({
        name: form.name,
        phone: form.phone,
        email: form.email,
        password: form.password
      });
      navigate("/");
    } catch (submissionError) {
      setError(submissionError.response?.data?.message || submissionError.message || "Signup failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Lead capture</p>
        <h1>Plan your trip</h1>
        <p className="auth-copy">Create an account and submit your trip brief for quicker expert follow-up.</p>
        <form className="auth-form auth-grid" onSubmit={handleSubmit}>
          <label>Full name<input type="text" name="name" value={form.name} onChange={updateField} required /></label>
          <label>Phone<input type="tel" name="phone" value={form.phone} onChange={updateField} required /></label>
          <label>Email<input type="email" name="email" value={form.email} onChange={updateField} required /></label>
          <label>Password<input type="password" name="password" value={form.password} onChange={updateField} required /></label>
          <label className="full-span">Trip notes<textarea rows={4} name="message" value={form.message} onChange={updateField} /></label>
          {error ? <p className="form-error full-span">{error}</p> : null}
          <button type="submit" className="solid-button wide full-span" disabled={submitting}>
            {submitting ? "Creating account..." : "Submit inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
