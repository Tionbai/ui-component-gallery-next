import Meta from "../components/Layout/components/Meta";
import styles from "../styles/Contact/Contact.module.scss";
import ContactForm from "../components/ContactForm/ContactForm";

const contact = () => {
  return (
    <div className={`${styles.contact} grid spacing`}>
      <Meta title="Contact - Tina's UI component gallery" />
      <h1 className="title">Contact</h1>
      <ContactForm />
    </div>
  );
};

export default contact;
