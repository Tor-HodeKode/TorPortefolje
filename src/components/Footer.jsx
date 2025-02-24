import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Tor-Magnus Slatlem. All rights reserved.</p>

    <div className="footer-contact">
      <p><strong>Tlf:</strong> +47 123 45 678</p>
      <p><strong>Email:</strong> <a href="mailto:tor.magnus@example.com">tor.magnus@example.com</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/brukernavn" target="_blank" rel="noopener noreferrer">github.com/brukernavn</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tor-magnus" target="_blank" rel="noopener noreferrer">linkedin.com/in/tor-magnus</a></p>
    </div>

    <a href="/CV.pdf" download className="cv-button">Last ned CV</a>
  </footer>
);

export default Footer;

