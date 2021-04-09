import React, { useState } from "react";
import styles from "./styles/ContactForm.module.scss";
import { personIcon, mailIcon, messageIcon, sendIcon } from "../Icons";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [response, setResponse] = useState({
    success: false,
    error: false,
    loading: false,
  });

  const validateForm = () => {
    if (values.name === "" || values.email === "" || values.message === "") {
      setResponse({
        success: false,
        error: "All field with * are required.",
        loading: false,
      });
      return false;
    }

    if (!values.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
      setResponse({
        success: false,
        error: (
          <>
            Please enter a valid email <br />{" "}
            <small>
              <i>(abc@example.com)</i>
            </small>
          </>
        ),
        loading: false,
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm() === false) return;

    setResponse({
      success: false,
      error: false,
      loading: "Sending message...",
    });

    let data = values;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resMessage = await res.json();
      if (res.status === 200) {
        setResponse({
          success: resMessage.message,
          error: false,
          loading: false,
        });
        setValues(initialValues);
      } else {
        setResponse({
          success: false,
          error: resMessage.message,
          loading: false,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      {response.error ? (
        <p className={`${styles.contactForm__response__error} text`}>
          {response.error}
        </p>
      ) : null}
      {response.success ? (
        <p className={`${styles.contactForm__response__success} text`}>
          {response.success}
        </p>
      ) : null}
      {response.loading ? (
        <p className={`${styles.contactForm__response__loading} text`}>
          {response.loading}
        </p>
      ) : null}
      <label
        className={`${styles.contactForm__label} input-label`}
        htmlFor="name"
      >
        {personIcon}
        <input
          className={`${styles.contactForm__label__input} text`}
          placeholder="Name*"
          type="text"
          name="name"
          required
          pattern={/([^\s][A-z0-9À-ž\s]+)/}
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label
        className={`${styles.contactForm__label} input-label`}
        htmlFor="email"
      >
        {mailIcon}
        <input
          className={`${styles.contactForm__label__input} text`}
          placeholder="E-mail*"
          type="email"
          name="email"
          required
          pattern={/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label
        className={`${styles.contactForm__label} input-label`}
        htmlFor="message"
      >
        {messageIcon}
        <textarea
          className={`${styles.contactForm__label__input} text`}
          placeholder="Message*"
          type="text"
          name="message"
          required
          pattern={/([^\s][A-z0-9À-ž\s]+)/}
          value={values.message}
          onChange={handleChange}
        />
      </label>
      <button
        className={`${styles.contactForm__button} btn-primary`}
        type="submit"
        onClick={handleSubmit}
      >
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

export default ContactForm;
