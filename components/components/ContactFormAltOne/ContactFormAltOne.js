import React from "react";
import styles from "./styles/contactFormAltOne.module.scss";

const Form = () => {
  const handleSubmit = () => {};
  return (
    <div className={styles.contactForm__container}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h1 className={styles.contactForm__title}>Contact us</h1>
        <label className={`${styles.contactForm__label} input-label`}>
          <p className={styles.contactForm__label__placeholder}>Name</p>
          <input className={`${styles.contactForm__label__input} text`} />
        </label>
        <label className={`${styles.contactForm__label} input-label`}>
          <span className={styles.contactForm__label__placeholder}>E-mail</span>
          <input className={`${styles.contactForm__label__input} text`} />
        </label>
        <label className={`${styles.contactForm__label} input-label`}>
          <span className={styles.contactForm__label__placeholder}>
            Message
          </span>
          <textarea className={`${styles.contactForm__label__input} text`} />
        </label>
        <p className={styles.contactForm__characters}>
          <span className={styles.contactForm__characters__state}>150</span>{" "}
          characters left
        </p>
        <button className={`${styles.contactForm__button} btn-primary`}>
          Send message
        </button>
      </form>
      <div className={styles.contactForm__map__container}>
        <img
          className={styles.contactForm__map}
          src="/assets/world-map-grayscale.png"
          alt="World map"
        />
        <div className={styles.contactForm__pin} />
      </div>
    </div>
  );
};

export default Form;
