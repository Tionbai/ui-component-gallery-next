import React, { useState } from "react";
import styles from "./styles/LandingPageVideo.module.scss";
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  linkedInIcon,
} from "../../Icons";

const LandingPageVideo = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <section
        className={`${styles.landing} ${
          menuActive ? styles.landing__active : ""
        }`}
      >
        <header className={styles.landing__header}>
          <h2 className={styles.landing__logo}>Space travel</h2>
          <button
            className={`${styles.menu__toggle} ${
              menuActive ? styles.menu__active : ""
            }`}
            onClick={() => setMenuActive(!menuActive)}
          ></button>
        </header>
        <video
          className={styles.landing__video}
          src="../assets/space-travel.mp4"
          muted
          loop
          autoPlay
        ></video>

        <div className={styles.landing__overlay}></div>
        <div className={styles.landing__text}>
          <h2 className={styles.landing__text__title}>Eternity is waiting</h2>
          <h3 className={styles.landing__text__subtitle}>
            Where are you headed?
          </h3>
          <p className={styles.landing__text__body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            fugiat esse in dolorum quibusdam ipsa vero asperiores iure
            voluptatum modi doloribus incidunt dolor eveniet, magnam,
            accusantium soluta facere architecto eaque.
          </p>
          <a className={styles.landing__text__link} href="#">
            Discover
          </a>
        </div>

        <ul className={styles.landing__social}>
          <li className={styles.landing__social__item}>
            <a className={styles.landing__social__item__link} href="#">
              {facebookIcon}
            </a>
          </li>
          <li className={styles.landing__social__item}>
            <a className={styles.landing__social__item__link} href="#">
              {instagramIcon}
            </a>
          </li>
          <li className={styles.landing__social__item}>
            <a className={styles.landing__social__item__link} href="#">
              {twitterIcon}
            </a>
          </li>
          <li className={styles.landing__social__item}>
            <a className={styles.landing__social__item__link} href="#">
              {linkedInIcon}
            </a>
          </li>
        </ul>
      </section>

      <div className={styles.menu}>
        <ul className={styles.menu__list}>
          <li>
            <a className={styles.menu__list__link} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={styles.menu__list__link} href="#">
              Vision
            </a>
          </li>
          <li>
            <a className={styles.menu__list__link} href="#">
              Blog
            </a>
          </li>
          <li>
            <a className={styles.menu__list__link} href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LandingPageVideo;
