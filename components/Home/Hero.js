import React from "react";
import styles from "../../styles/Home/components/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="bg-gradient"></div>
      <section className={`${styles.hero__text} spacing`}>
        <h1 className="title white">Tina's UI component gallery</h1>
        <p className="subtitle white">
         I love designing beautiful stuff with CSS.
        </p>
      </section>
    </section>
  );
};

export default Hero;
