import React from "react";
import Meta from "../../components/Layout/components/Meta";
import ArticlePreview from "../../components/components/ArticlePreview/ArticlePreview";

const articlePreview = () => {
  return (
    <section className="showcase">
      <Meta title="Article preview component - Tina's UI component gallery" />
      <ArticlePreview />
    </section>
  );
};

export default articlePreview;
