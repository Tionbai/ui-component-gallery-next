import React from "react";
import Meta from "../../components/Layout/components/Meta";
import ContactFormAltOne from "../../components/components/ContactFormAltOne/ContactFormAltOne";

const contactForm = () => {
  return (
    <section className="showcase">
      <Meta title="Contact form component - Tina's UI component gallery" />
      <ContactFormAltOne />
    </section>
  );
};

export default contactForm;
