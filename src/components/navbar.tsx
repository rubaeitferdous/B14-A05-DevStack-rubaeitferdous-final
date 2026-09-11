

import logoText from "../assets/images/logo-text.png";

export default function Navbar () {
    return(
        <div className="navbar" aria-label="Main navigation">
            <div className="navbar-brand">
                <img src={logoText} alt="Dev Logo" />
            </div>
            <div className="navbar-links">
                <button type="button">Home</button>
                <button type="button">Technologies</button>
                <button type="button">Projects</button>
                <button type="button">About</button>
                <button type="button">Contact</button>
            </div>
            <div className="navbar-actions">
                <button className="sign-in">Log In</button>
                <button className="sign-up">Sign Up</button>
            </div>
        </div>
    )
}