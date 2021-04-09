import React from "react";
import NewsletterForm from "../../components/components/NewsletterForm/NewsletterForm";
import Meta from "../../components/Layout/components/Meta";

const newsletterSubscribe = () => {
  return (
    <section className="grid center spacing">
      <Meta title="Newsletter subscribe component - Tina's UI component gallery" />
      <NewsletterForm />
    </section>
  );
};

export default newsletterSubscribe;
