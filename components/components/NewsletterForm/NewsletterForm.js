import { mailIcon } from "../../Icons";
import styles from "./styles/NewsletterForm.module.scss";

const NewsletterForm = () => {
  const handleSubmit = () => {};
  return (
    <article className={styles.newsletter}>
      <div className={styles.newsletter__background}></div>
      <div className={styles.newsletter__surface}></div>
      <h1 className={styles.newsletter__title}>
        Subscribe to our newsletter!
      </h1>
      <form className={`${styles.newsletterForm} text`} onSubmit={handleSubmit}>
        <label className={`${styles.newsletterForm__label} input-label`}>
          {mailIcon}
          <input className="text" placeholder="E-mail" />
        </label>
        <button className={`${styles.newsletterForm__button} btn-primary`}>
          {" "}
          Subscribe
        </button>
      </form>
    </article>
  );
};

export default NewsletterForm;
