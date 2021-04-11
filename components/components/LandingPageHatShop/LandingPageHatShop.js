import React from "react";
import styles from "./styles/LandingPageHatShop.module.scss";

const LandingPageHatShop = () => {
  return (
    <section className={styles.landingPageHatShop}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Buy our hats!</h1>
        <p className={styles.header__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, facere
          voluptatum. Optio eum est, magni officia in doloribus dignissimos
          amet!
        </p>
        <a href="#" className={styles.btn}>
          See featured
        </a>
      </header>

      <div className={styles.featured__container}>
        <section className={styles.featured}>
          <h2 className={styles.title}>Featured products</h2>
          <div className={styles.split}>
            <a href="#" className={styles.featured__item}>
              <div className={styles.featured__img__container}>
                <img
                  src="../assets/LandingPageHatShop/hat1.png"
                  alt=""
                  className={styles.featured__img}
                />
              </div>
              <p className={styles.featured__details}>
                <span className={styles.featured__details__price}>$99</span>
                Hat name
              </p>
            </a>
            <a href="#" className={styles.featured__item}>
              <div className={styles.featured__img__container}>
                <img
                  src="../assets/LandingPageHatShop/hat2.png"
                  alt=""
                  className={styles.featured__img}
                />
              </div>
              <p className={styles.featured__details}>
                <span className={styles.featured__details__price}>$99</span>
                Hat name
              </p>
            </a>
            <a href="#" className={styles.featured__item}>
              <div className={styles.featured__img__container}>
                <img
                  src="../assets/LandingPageHatShop/hat3.png"
                  alt=""
                  className={styles.featured__img}
                />
              </div>
              <p className={styles.featured__details}>
                <span className={styles.featured__details__price}>$99</span>
                Hat name
              </p>
            </a>
          </div>
        </section>
      </div>

      <section className={styles.products}>
        <h2 className={styles.title}>Our products</h2>
        <article className={`${styles.product} ${styles.hat__1}`}>
          <img
            src="../assets/LandingPageHatShop/hat4.png"
            alt=""
            className={styles.product__img}
          />
          <h3 className={styles.product__title}>A cool hat</h3>
          <p className={styles.product__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            fugiat magnam deserunt odit cum laudantium minima ut natus vero
            facere.
          </p>
          <a href="" className={styles.btn}>
            Add to cart
          </a>
        </article>
        <article className={`${styles.product} ${styles.hat__2}`}>
          <img
            src="../assets/LandingPageHatShop/hat5.png"
            alt=""
            className={styles.product__img}
          />
          <h3 className={styles.product__title}>A cool hat</h3>
          <p className={styles.product__description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, ullam similique repellat est blanditiis provident! Iste
            rerum ratione vero sunt.
          </p>
          <a href="" className={styles.btn}>
            Add to cart
          </a>
        </article>
        <article className={`${styles.product} ${styles.hat__3}`}>
          <img
            src="../assets/LandingPageHatShop/hat6.png"
            alt=""
            className={styles.product__img}
          />
          <h3 className={styles.product__title}>A cool hat</h3>
          <p className={styles.product__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            iste autem odit corporis aspernatur voluptatibus cum, recusandae
            nesciunt impedit deleniti!
          </p>
          <a href="" className={styles.btn}>
            Add to cart
          </a>
        </article>
      </section>
    </section>
  );
};

export default LandingPageHatShop;
