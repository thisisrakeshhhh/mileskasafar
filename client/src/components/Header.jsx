import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import logoImg from "../images/logo.jpeg";

const navItems = [
  { href: "/packages", label: "MAY" },
  { href: "/destinations/himachal", label: "JUNE" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT US" }
];

export function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="site-header">
      <div className="shell header-row header-row-book">
        <Link to="/" className="brand">
          <div className="brand-mark">
            <img
              src={logoImg}
              alt="Miles Ka Safar"
              className="brand-logo-img"
            />
          </div>
        </Link>
        <a className="header-phone" href="tel:+917015415229">
          <span className="phone-icon">☎</span>
          <span>+917015415229</span>
        </a>
        <nav className="header-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions header-actions-book">
          {isAuthenticated && user ? (
            <>
              <Link to="/account" className="ghost-button ghost-button-dark">MY ACCOUNT</Link>
              <button type="button" className="ghost-button ghost-button-dark button-reset" onClick={handleLogout}>LOGOUT</button>
            </>
          ) : (
            <>
              <Link to="/login" className="ghost-button ghost-button-dark">LOGIN</Link>
              <Link to="/signup" className="solid-button solid-button-light">BOOK NOW</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
