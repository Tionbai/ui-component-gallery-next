import React from "react";
import styles from "./styles/LandingPageRealEstate.module.scss";

const LandingPageRealEstate = () => {
  return (
    <section className={styles.landingPageRealEstate}>
      <header>
        <nav className={`${styles.nav} ${styles.text}`}>
          <a href="#">
            <div className={styles.nav__logo}>Logo</div>
          </a>

          <a className={styles.nav__link} href="#">
            <span className={styles.nav__link__text}>Sign in</span>
            <img src="../assets/LandingPageRealEstate/loginIcon.svg" alt="" />
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.img__bg}>
          <section className={`${styles.container} ${styles.search}`}>
            <h1 className={`${styles.title} ${styles.dark__bg}`}>
              Get an offer within 48 hours
            </h1>
            <form className={styles.search__form}>
              <img
                className={styles.search__icon}
                src="../assets/LandingPageRealEstate/mapIcon.svg"
                alt=""
              />
              <input
                className={`${styles.search__input} ${styles.text}`}
                placeholder="Search address"
              />
              <button className={styles.search__btn}>Get offer</button>
              <button className={styles.search__btn__small}>
                <img
                  className={styles.search__icon}
                  src="../assets/LandingPageRealEstate/searchIcon.svg"
                  alt=""
                />
              </button>
            </form>
            <h1 className={`${styles.search__title} ${styles.dark__bg}`}>
              Sell your property to us. No preparations needed.
            </h1>
          </section>
        </section>

        <section className={styles.container}>
          <section className={styles.ads}>
            <a className={styles.ad} href="">
              <div className={styles.ad__img__container}>
                <p className={`${styles.ad__img} ${styles.ad__img__4}`}>
                  Reviewer
                </p>
              </div>
              <p className={styles.ad__text}>
                "Guarantees a sale within 48 hours."
              </p>
            </a>

            <a className={styles.ad} href="">
              <div className={styles.ad__img__container}>
                <p className={`${styles.ad__img} ${styles.ad__img__4}`}>
                  Reviewer
                </p>
              </div>
              <p className={styles.ad__text}>
                "Good technology should work like magic."
              </p>
            </a>

            <a className={styles.ad} href="">
              <div className={styles.ad__img__container}>
                <p className={`${styles.ad__img} ${styles.ad__img__4}`}>
                  Reviewer
                </p>
              </div>
              <p className={styles.ad__text}>
                "Predictable pricing on your property."
              </p>
            </a>

            <a className={styles.ad} href="">
              <div className={styles.ad__img__container}>
                <p className={`${styles.ad__img} ${styles.ad__img__4}`}>
                  Reviewer
                </p>
              </div>
              <p className={styles.ad__text}>
                "No more hassle with home sales."
              </p>
            </a>
          </section>
        </section>

        <section className={styles.container}>
          <h1 className={styles.title}>Home sales made easy</h1>
          <p className={styles.text}>
            You receive a non-binding offer based on the information you
            provide.
          </p>
          <p className={styles.text}>
            The service is available to freeholder and cooperative properties
            valued up to 1 million USD.
          </p>
          <p className={styles.text}>
            No open house, marketing or preparations are necessary.
          </p>
        </section>

        <section className={styles.container}>
          <div className={styles.grid}>
            <article className={`${styles.step} ${styles.progress}`}>
              <img
                className={styles.step__img}
                src="../assets/LandingPageRealEstate/step1Icon.svg"
                alt=""
              />
              <h1 className={styles.step__title}>
                Tell us about your property
              </h1>
            </article>

            <article className={`${styles.step} ${styles.complete}`}>
              <img
                className={styles.step__img}
                src="../assets/LandingPageRealEstate/homeSalesIcon.svg"
                alt=""
              />
              <h1 className={styles.step__title}>
                Get an offer within 48 hours
              </h1>
            </article>
          </div>

          <div className={styles.step__next}>
            <img src="../assets/LandingPageRealEstate/advanceImg.png" />
          </div>

          <div className={styles.grid}>
            <article className={`${styles.step} ${styles.progress}`}>
              <img
                className={styles.step__img}
                src="../assets/LandingPageRealEstate/step2Icon.svg"
                alt=""
              />
              <h1 className={styles.step__title}>
                Schedule a time for inspection
              </h1>
            </article>

            <article className={`${styles.step} ${styles.complete}`}>
              <img
                className={styles.step__img}
                src="../assets/LandingPageRealEstate/step3Icon.svg"
                alt=""
              />
              <h1 className={styles.step__title}>
                Get final offer and sign contract
              </h1>
            </article>
          </div>

          <div className={styles.step__next}>
            <img src="../assets/LandingPageRealEstate/advanceImg.png" />
          </div>

          <div className={styles.grid}>
            <article className={`${styles.step} ${styles.progres}`}>
              <img
                className={styles.step__img}
                src="../assets/LandingPageRealEstate/marketPriceIcon.svg"
                alt=""
              />
              <h1 className={styles.step__title}>
                Your property is sold at market value
              </h1>
            </article>

            <article className={`${styles.step} ${styles.complete}`}>
              <img
                className={styles.step__img}
                src="../assets/LandingPageRealEstate/warehouseIcon.svg"
                alt=""
              />
              <h1 className={styles.step__title}>
                Takeover 15-60 days after bid acceptance
              </h1>
            </article>
          </div>
        </section>

        <div className={styles.offer}>
          <button className={styles.btn}>Get offer</button>
        </div>

        <section className={styles.img__bg}>
          <h1 className={`${styles.title} ${styles.dark__bg}`}>
            <i className={styles.dark__bg}>"Too good to be true"</i>
            <br />
            <span className={`${styles.title__long} ${styles.dark__bg}`}>
              - Advertisement
            </span>
          </h1>
        </section>

        <section className={styles.container}>
          <h1 className={styles.title}>Why us?</h1>

          <div className={styles.grid}>
            <article
              className={`${styles.card} ${styles.warning} ${styles.text}`}
            >
              <h1 className={styles.card__title}>Traditional sale</h1>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/minusIcon.svg"
                  alt=""
                />
                <p>Online marketing and ~30 days waiting time</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/minusIcon.svg"
                  alt=""
                />
                <p>Cleaning, styling and preparations</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/minusIcon.svg"
                  alt=""
                />
                <p>Find professionals, organize and make necessary repairs</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/minusIcon.svg"
                  alt=""
                />
                <p>Hidden costs and complicated pricing models</p>
              </div>
            </article>

            <article
              className={`${styles.card} ${styles.success} ${styles.text}`}
            >
              <h1 className={styles.card__title}>Us</h1>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/checkIcon.svg"
                  alt=""
                />
                <p>No preparations</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/checkIcon.svg"
                  alt=""
                />
                <p>We do repairs and upgrades</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/checkIcon.svg"
                  alt=""
                />
                <p>Easy pricing</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/checkIcon.svg"
                  alt=""
                />
                <p>Sell at market value within 48 hours</p>
              </div>
            </article>
          </div>
        </section>
        <div className={styles.offer}>
          <button className={styles.btn}>Get offer</button>
        </div>

        <section className={`${styles.container} ${styles.off}`}>
          <h1 className={styles.title}>How do we value your home?</h1>

          <article className={`${styles.info} ${styles.text}`}>
            <div>
              <img
                className={styles.info__img}
                src="../assets/LandingPageRealEstate/downloadImg.png"
                alt=""
              />
            </div>
            <div>
              <h1 className={styles.info__title}>Unique information</h1>
              <p className={styles.info__text}>
                You give us information about your home's unique qualities,
                latest upgrades, and current condition.
              </p>
            </div>
          </article>

          <article className={`${styles.info} ${styles.text}`}>
            <div>
              <img
                className={styles.info__img}
                src="../assets/LandingPageRealEstate/homeSteps2Img.png"
                alt=""
              />
            </div>
            <div>
              <h1 className={styles.info__title}>Comparable sales</h1>
              <p className={styles.info__text}>
                Our data model estimates your property's value based on
                thousands of comparable home sales.
              </p>
            </div>
          </article>

          <article className={`${styles.info} ${styles.text}`}>
            <div>
              <img
                className={styles.info__img}
                src="../assets/LandingPageRealEstate/homeSteps3Img.png"
                alt=""
              />
            </div>
            <div>
              <h1 className={styles.info__title}>Final assessment</h1>
              <p className={styles.info__text}>
                A final assessment is made from a thorough house inspection by
                our expert appraisers.
              </p>
            </div>
          </article>
        </section>

        <section className={styles.container}>
          <h1 className={styles.title}>Pricing</h1>
          <div className={styles.grid}>
            <article
              className={`${styles.card} ${styles.warning} ${styles.text}`}
            >
              <h1 className={styles.card__title}>Traditional sale</h1>

              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/minusIcon.svg"
                  alt=""
                />
                <p>Long process</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/minusIcon.svg"
                  alt=""
                />
                <p>Months with preparations</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/minusIcon.svg"
                  alt=""
                />
                <p>Uncertain price</p>
              </div>

              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/moodBadIcon.svg"
                  alt=""
                />
                <p>
                  A traditional sale can take up to 120 days from when you
                  decide to sell. That is costly and time consuming
                </p>
              </div>
            </article>

            <article
              className={`${styles.card} ${styles.success} ${styles.text}`}
            >
              <h1 className={styles.card__title}>Us</h1>

              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/checkIcon.svg"
                  alt=""
                />
                <p>Quick sale</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/checkIcon.svg"
                  alt=""
                />
                <p>No preparations</p>
              </div>
              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/checkIcon.svg"
                  alt=""
                />
                <p>Certain price</p>
              </div>

              <div className={styles.card__content}>
                <img
                  src="../assets/LandingPageRealEstate/moodIcon.svg"
                  alt=""
                />
                <p>
                  Quick and easy sale with just a few clicks. You pay one
                  service fee, and we take care of the rest
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.container}>
          <section className={`${styles.calculations} ${styles.text}`}>
            <h1 className={styles.subtitle}>Example sale</h1>
            <div className={styles.calculations__content}>
              <h3 className={styles.accent}></h3>
              <h3 className={styles.warning}>Traditional sale</h3>
              <h3 className={styles.success}>Us</h3>
            </div>
            <div className={styles.line}></div>
            <div className={`${styles.calculations__content} ${styles.high}`}>
              <h3>Market price</h3>
              <p>400 000</p>
              <p>400 000</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.calculations__content}>
              <h4>Transaction fee</h4>
              <p>3.2%</p>
              <p>3.5%</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.calculations__content}>
              <h4>Brokerage fee</h4>
              <p>2.5%</p>
              <p>0%</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.calculations__content}>
              <h4>Cleaning and styling</h4>
              <p>0.4%</p>
              <p>0%</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.calculations__content}>
              <h4>Intermediate term financing</h4>
              <p>0.3%</p>
              <p>0%</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.calculations__content}>
              <h4>Repairs</h4>
              <p>Depends on buyer</p>
              <p>Depends on our inspection</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.calculations__content}>
              <h4>Total costs</h4>
              <p>-12 800</p>
              <p>-14 000</p>
            </div>
            <div className={styles.line}></div>

            <div className={`${styles.calculations__content} ${styles.high}`}>
              <h3>Net payment</h3>
              <p>387 200</p>
              <p>386 000</p>
            </div>
            <div className={styles.line}></div>
          </section>
        </section>

        <div className={styles.offer}>
          <button className={styles.btn}>Get offer</button>
        </div>

        <section className={`${styles.container} ${styles.off}`}>
          <section className={`${styles.faq} ${styles.text}`}>
            <h1 className={styles.title}>FAQ</h1>
            <div className={styles.faq__item}>
              <img
                className={styles.faq__item__icon}
                src="../assets/LandingPageRealEstate/expandMoreIcon.svg"
                alt=""
              />
              <p>Why do I need a house inspection?</p>
            </div>
            <div className={styles.faq__item}>
              <img
                className={styles.faq__item__icon}
                src="../assets/LandingPageRealEstate/expandMoreIcon.svg"
                alt=""
              />
              <p>What happens if the property has flaws?</p>
            </div>
            <div className={styles.faq__item}>
              <img
                className={styles.faq__item__icon}
                src="../assets/LandingPageRealEstate/expandMoreIcon.svg"
                alt=""
              />
              <p>How long is the full sales cycle?</p>
            </div>
            <div className={styles.faq__item}>
              <img
                className={styles.faq__item__icon}
                src="../assets/LandingPageRealEstate/expandMoreIcon.svg"
                alt=""
              />
              <p>What do we look for during the house inspection?</p>
            </div>
          </section>
        </section>

        <footer className={`${styles.footer} ${styles.text}`}>
          <section className={styles.footer__content}>
            <div>
              <h2>Contact us</h2>
              <a href="#">Get offer</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h2>About us</h2>
              <a href="#">Blog</a>
              <a href="#">Terms of service</a>
              <a href="#">Privacy policy</a>
            </div>
          </section>
          <p className={styles.footer__end}>© 2021 Company</p>
        </footer>
      </main>
    </section>
  );
};

export default LandingPageRealEstate;
