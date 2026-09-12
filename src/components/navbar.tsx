

import { useState } from "react";
import logoText from "../assets/images/logo-text.png";

export default function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="navbar" aria-label="Main navigation">
            <button
                className="menu-button"
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
                <span />
                <span />
                <span />
            </button>
            <div className="navbar-brand">
                <img src={logoText} alt="Dev Logo" />
            </div>
            <div className={`navbar-links${menuOpen ? " is-open" : ""}`}>
                <button type="button">Home</button>
                <button type="button">Technologies</button>
                <button type="button">Projects</button>
                <button type="button">About</button>
                <button type="button">Contact</button>
            </div>
            <div className="navbar-actions">
                <button className="sign-in">Sign In</button>
                <button className="sign-up">Sign Up</button>
            </div>
        </div>
    )
}