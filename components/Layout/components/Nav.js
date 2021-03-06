import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../../styles/Layout/components/Nav.module.scss";
import { expandMoreIcon } from "../../Icons";

const Nav = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 672 && smallScreen === false) setSmallScreen(true);
    if (window.innerWidth > 672 && smallScreen === true) setSmallScreen(false);
    menuActive && setMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => handleResize());
    return () => window.removeEventListener("resize", () => handleResize);
  }, [menuActive]);

  const handleClick = (e) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.nav__list} ${menuActive && styles.active}`}>
        <li
          className={styles.nav__list__item}
          onClick={() => setMenuActive(false)}
        >
          <Link href="/">Home</Link>
        </li>
        <div
          className={`${styles.nav__list__item} ${styles.nav__list__dropdown}`}
        >
          <li className={styles.nav__list__dropdown__btn}>
            Components{expandMoreIcon}
          </li>
          <ul className={styles.nav__list__dropdown__content}>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/components/article-preview">Article preview</Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/components/contact-form">Contact form</Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/components/customer-status">Customer status</Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/components/digital-clock">Digital Clock</Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/components/newsletter-subscribe">
                Newsletter subscribe
              </Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/components/progress-bar">Progress bar</Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/components/responsive-navbar">
                Responsive navbar
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${styles.nav__list__item} ${styles.nav__list__dropdown}`}
        >
          <li className={styles.nav__list__dropdown__btn}>
            Landing Pages{expandMoreIcon}
          </li>
          <ul className={styles.nav__list__dropdown__content}>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/landing-pages/landing-page-courses">
                Landing page courses
              </Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/landing-pages/landing-page-hat-shop">
                Landing page hat shop
              </Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/landing-pages/landing-page-holidays">
                Landing page holidays
              </Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/landing-pages/landing-page-real-estate">
                Landing page real estate
              </Link>
            </li>
            <li
              className={styles.nav__list__dropdown__content__item}
              onClick={() => setMenuActive(false)}
            >
              <Link href="/landing-pages/landing-page-video">
                Landing page video
              </Link>
            </li>
          </ul>
        </div>
        <li
          className={styles.nav__list__item}
          onClick={() => setMenuActive(false)}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={styles.nav__list__item}
          onClick={() => setMenuActive(false)}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.nav__burger} onClick={handleClick}>
        <img
          src={
            menuActive
              ? "/assets/Nav/close-24px.svg"
              : "/assets/Nav/menu-24px.svg"
          }
          alt="Menu"
        />
      </div>
    </nav>
  );
};

export default Nav;
