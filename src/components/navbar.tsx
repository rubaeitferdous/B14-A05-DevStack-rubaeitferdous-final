import { useState } from "react";
import logoText from "../assets/images/logo-text.png";


 export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Technologies", "Projects", "About", "Contact"];
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <button
          className="menu-button"
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <a href="#home" className="brand">
          <img src={logoText} alt="Dev Stack" />
        </a>
        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="auth-actions">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

