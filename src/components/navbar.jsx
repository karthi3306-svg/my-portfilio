import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
      <div className="container">
        <a className={`navbar-brand ${styles.logo}`} href="#home">K</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#contact">Contact</a>
            </li>
          </ul>
          <div className={`d-flex gap-3 ${styles.contactIcons}`}>
            <a href="mailto:karthinatarajan36@gmail.com" className={styles.iconLink}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+916380854251" className={styles.iconLink}>
              <i className="fas fa-phone-alt"></i>
            </a>
            <a href="/karthick-resume.pdf" download className={styles.iconLink} title="Download Resume">
              <i className="fas fa-file-download"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
