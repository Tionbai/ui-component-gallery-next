import React, { useState } from "react";
import styles from "./styles/ResponsiveNavbar.module.scss";

const ResponsiveNavbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [navInactive, setNavInactive] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  // Remove active sidebar on resize beyond set width
  const removeClasses = () => {
    if (window.innerWidth > 672) {
      if (navActive) setNavInactive(true);
      setTimeout(() => {
        setNavInactive(false);
        setNavActive(false);
        setBurgerActive(false);
      }, 100);
      window.removeEventListener("resize", removeClasses);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Add inactive class for smooth transition
    if (navActive) {
      setNavInactive(true);
      setTimeout(() => {
        setNavInactive(false);
        setNavActive(!navActive);
      }, 100);
    } else setNavActive(!navActive);

    window.addEventListener("resize", removeClasses);
    setBurgerActive(!burgerActive);
  };

  return (
    <section className={styles.responsiveNavbar}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h4>Logo</h4>
        </div>
        <ul
          className={`${styles.nav__list} ${
            navActive ? styles.nav__list__active : ""
          } ${navInactive ? styles.nav__list__inactive : ""}`}
        >
          <li className={styles.nav__list__item}>
            <a href="#">Home</a>
          </li>
          <li className={styles.nav__list__item}>About</li>
          <li className={styles.nav__list__item}>Blog</li>
          <li className={styles.nav__list__item}>Contact</li>
        </ul>
        <div
          className={`${styles.burger} ${
            burgerActive ? styles.burger__active : ""
          }`}
          onClick={handleClick}
        ></div>
      </nav>
    </section>
  );
};

export default ResponsiveNavbar;
