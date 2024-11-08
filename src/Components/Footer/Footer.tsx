import React from "react";
import Contact from "../Contact";
import { contactInformation, contactText } from "../../Data";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer-container container">
      <Contact text={contactText} contact={contactInformation} />

      <div className="footer">
        <a
          href="https://www.francinemelopepe.de/"
          target="_blank"
          rel="noreferrer"
        >
          <small>&copy; Copyright {getCurrentYear()} - Francine Melo</small>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
