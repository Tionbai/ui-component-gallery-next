import React from "react";
import styles from "../../styles/Form/contactForm.module.scss";
import { personIcon, mailIcon, messageIcon, sendIcon } from "../Icons";

const Form = () => {
  const handleSubmit = () => {};
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={`${styles.contactForm__label} input-label`}>
        {personIcon}
        <input
          className={`${styles.contactForm__label__input} text`}
          placeholder="Name"
        />
      </label>
      <label className={`${styles.contactForm__label} input-label`}>
        {mailIcon}
        <input
          className={`${styles.contactForm__label__input} text`}
          placeholder="E-mail"
        />
      </label>
      <label className={`${styles.contactForm__label} input-label`}>
        {messageIcon}
        <textarea
          className={`${styles.contactForm__label__input} text`}
          placeholder="Message"
        />
      </label>
      <button className={`${styles.contactForm__button} btn-primary`}>
        <p className={`${styles.contactForm__button__content}`}>
          <span
            className={`${styles.contactForm__button__content__label} white`}
          >
            Send message
          </span>
          {sendIcon}
        </p>
      </button>
    </form>
  );
};

export default Form;
