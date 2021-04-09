import React from "react";
import styles from "./styles/ArticlePreview.module.scss";

const ArticlePreview = () => {
  return (
    <article className={`${styles.articlePreview} card`}>
      <div className={styles.articlePreview__wrapper}></div>
      <span>{new Date().toLocaleDateString()}</span>
      <h3 className={styles.articlePreview__title}>My first blog post</h3>
      <p>Hello everyone. This is my first blog post.</p>
      <span className={`${styles.articlePreview__link} btn-primary`}>
        To article
      </span>
    </article>
  );
};

export default ArticlePreview;
