import React from "react";
import Newsletter from "../../components/Form/NewsletterForm";
import Meta from "../../components/Layout/components/Meta";

const newsletterSubscribe = () => {
  return (
    <section className="grid center spacing">
      <Meta title="Newsletter subscribe component - Tina's UI component gallery" />
      <Newsletter />
    </section>
  );
};

export default newsletterSubscribe;
