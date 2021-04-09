import React, { useState, useEffect } from "react";
import styles from "./styles/LandingPageHolidays.module.scss";
import { menuIcon, searchIcon, animationIcon } from "../../Icons";

const LandingPageHolidays = () => {
  // Active state will cause animation on content on and off hover.
  const [active, setActive] = useState(false);
  // Disabled state will deactivate animation on content on and off hover.
  const [disableAnimation, setDisableAnimation] = useState(false);

  // Set active state after initial animation has finished running.
  useEffect(() => {
    setTimeout(() => {
      if (window.innerWidth > 600 && window.innerHeight > 630) {
        // Check if animation has been disabled before triggering active state
        if (disableAnimation === false) setActive(true);
      } else {
        setDisableAnimation(true);
      }
    }, 10000);

    return () =>
      clearTimeout(() => {
        if (window.innerWidth > 600 && window.innerHeight > 630) {
          // Check if animation has been disabled before triggering active state
          if (disableAnimation === false) setActive(true);
        } else {
          setDisableAnimation(true);
        }
      });
  }, []);

  const handleDisable = (e) => {
    e.preventDefault();

    // If animation is enabled and state is inactive (on initial render before active state is triggered).
    if (!disableAnimation && !active) setDisableAnimation(true);

    // If animation is enabled and state is active (after active state has been triggered, and animation has not been manually disabled).
    if (!disableAnimation && active) {
      setDisableAnimation(true);
      setActive(false);
    }

    // If animation is disabled and state is inactive (when animation has been manually disabled).
    if (disableAnimation && !active) {
      setDisableAnimation(false);
      setActive(true);
    }
    // If animation is disabled and state is active (when animation has been manually disabled and in case active state has not been prevented in any other scenario).
    if (disableAnimation && active) {
      setDisableAnimation(false);
      setActive(false);
    }
  };

  return (
    <section
      className={`${styles.landingPageHolidays} ${
        active ? styles.landingPageHolidays__active : ""
      } ${disableAnimation ? styles.landingPageHolidays__disabled : ""}`}
    >
      <div className={styles.landingPageHolidays__img__container}>
        <img
          className={styles.landingPageHolidays__img}
          src="https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>
      <button
        className={styles.landingPageHolidays__disableBtn}
        onClick={handleDisable}
      >
        {animationIcon}{" "}
        {!disableAnimation ? "Disable animation" : "Enable animation"}
      </button>
      <nav className={styles.landingPageHolidays__nav}>
        <a className={styles.landingPageHolidays__nav__logo} href="">
          Logo
        </a>
        <ul className={styles.landingPageHolidays__nav__list}>
          <a href="" className={styles.landingPageHolidays__nav__list__item}>
            Shop
          </a>
          <a href="" className={styles.landingPageHolidays__nav__list__item}>
            Places
          </a>
          <a href="" className={styles.landingPageHolidays__nav__list__item}>
            Blog
          </a>
          <a href="" className={styles.landingPageHolidays__nav__list__item}>
            About us
          </a>
        </ul>
        <a href="" className={styles.landingPageHolidays__nav__button}>
          {menuIcon}
        </a>
      </nav>

      <section className={styles.landingPageHolidays__header}>
        <h1 className={styles.landingPageHolidays__header__title}>
          Holidays you dream about
        </h1>
      </section>

      <section className={styles.landingPageHolidays__content}>
        <ul className={styles.landingPageHolidays__content__menu}>
          <li className={styles.landingPageHolidays__content__menu__item}>
            <h1
              className={styles.landingPageHolidays__content__menu__item__title}
            >
              Location
            </h1>
            <button
              className={
                styles.landingPageHolidays__content__menu__item__action
              }
            >
              Where are you going?
            </button>
          </li>
          <li className={styles.landingPageHolidays__content__menu__item}>
            <h1
              className={styles.landingPageHolidays__content__menu__item__title}
            >
              Check in
            </h1>
            <button
              className={
                styles.landingPageHolidays__content__menu__item__action
              }
            >
              Add dates
            </button>
          </li>
          <li className={styles.landingPageHolidays__content__menu__item}>
            <h1
              className={styles.landingPageHolidays__content__menu__item__title}
            >
              Check out
            </h1>
            <button
              className={
                styles.landingPageHolidays__content__menu__item__action
              }
            >
              Add dates
            </button>
          </li>
          <li className={styles.landingPageHolidays__content__menu__item}>
            <h1
              className={styles.landingPageHolidays__content__menu__item__title}
            >
              Guests
            </h1>
            <button
              className={
                styles.landingPageHolidays__content__menu__item__action
              }
            >
              Add guests
            </button>
          </li>
          <li className={styles.landingPageHolidays__content__menu__item}>
            <button
              className={
                styles.landingPageHolidays__content__menu__item__search
              }
            >
              {searchIcon}
            </button>
          </li>
        </ul>
        <section
          className={styles.landingPageHolidays__content__bottom}
        ></section>
      </section>
    </section>
  );
};

export default LandingPageHolidays;
