import React from "react";
import styles from "./styles/LandingPageCourses.module.scss";
import {
  searchIcon,
  downloadOfflineIcon,
  groupWorkIcon,
  questionAnswerIcon,
  starFilledIcon,
  starIcon,
  addShoppingCart,
  schoolIcon,
  menuIcon,
} from "../../Icons";

const LandingPageCourses = () => {
  const courses = [
    {
      image:
        "https://images.unsplash.com/photo-1529119513315-c7c361862fc7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "UI/UX Design",
      author: "Mack Jorlan",
      rating: 4.5,
      price: "$49.99",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      title: "3D Design",
      author: "Lisa Porr",
      rating: 4.3,
      price: "$49.99",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Excel spreadsheets",
      author: "Gary Johnson",
      rating: 4.6,
      price: "$49.99",
    },
  ];

  const ads = [
    {
      icon: downloadOfflineIcon,
      title: "Watch offline",
      description: "Download courses to your device and watch from anywhere!",
    },
    {
      icon: questionAnswerIcon,
      title: "Get personal feedback",
      description:
        "Get feedback and suggestions from our instructors tailored to your level!",
    },
    {
      icon: groupWorkIcon,
      title: "Collaborate with other students",
      description:
        "Join the forum and small group community and learn together!",
    },
  ];

  const reviews = [
    {
      description: "Great teaching and content!",
      icon: "https://hotemoji.com/images/dl/d/4-person-emoji-by-google.png",
      author: "Robert Finn",
      role: "Student",
    },
    {
      description: "Helpful customer support and fast replies.",
      icon:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emoji-one/104/older-man_emoji-modifier-fitzpatrick-type-1-2_1f474-1f3fb_1f3fb.png",
      author: "Nick Barley",
      role: "Student",
    },
    {
      description: "I've learned so much. High value!",
      icon: "https://images.emojiterra.com/google/android-10/512px/1f469.png",
      author: "Mira Tonnes",
      role: "Student",
    },
  ];
  return (
    <section className={styles.landingPageCourses}>
      <nav className={styles.landingPageCourses__nav}>
        <a className={styles.landingPageCourses__nav__logo} href="">
          Logo
        </a>
        <ul className={styles.landingPageCourses__nav__list}>
          <a href="" className={styles.landingPageCourses__nav__list__item}>
            Browse
          </a>
          <a href="" className={styles.landingPageCourses__nav__list__item}>
            About Us
          </a>
          <a href="" className={styles.landingPageCourses__nav__list__item}>
            Pricing
          </a>
        </ul>
        <a href="" className={styles.landingPageCourses__nav__button}>
          <span className={styles.landingPageCourses__nav__button__large}>
            Sign up
          </span>
          <span className={styles.landingPageCourses__nav__button__small}>
            {menuIcon}
          </span>
        </a>
      </nav>

      <header className={styles.landingPageCourses__hero}>
        <img
          className={styles.landingPageCourses__hero__img}
          src="https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <section className={styles.landingPageCourses__hero__content}>
          <div className={styles.landingPageCourses__hero__content__inner}>
            <h1 className={styles.landingPageCourses__hero__title}>
              What do you want to learn?
            </h1>

            <form className={styles.landingPageCourses__hero__search}>
              <label className={styles.landingPageCourses__hero__search__label}>
                <input
                  className={
                    styles.landingPageCourses__hero__search__label__input
                  }
                  placeholder="Search for a course"
                />
                <button
                  className={
                    styles.landingPageCourses__hero__search__label__button
                  }
                >
                  {searchIcon}
                </button>
              </label>
            </form>
            <div className={styles.landingPageCourses__hero__stats}>
              <div
                className={styles.landingPageCourses__hero__stats__img}
                src="/assets/LandingPageCourses/school.svg"
                alt="Icon"
              >
                {schoolIcon}
              </div>
              <span
                className={styles.landingPageCourses__hero__stats__description}
              >
                Join 1K+ students worldwide
              </span>
            </div>
          </div>
        </section>
      </header>

      <section className={styles.landingPageCourses__main}>
        <section className={styles.landingPageCourses__main__courses}>
          {courses.map((course) => {
            return (
              <article className={styles.landingPageCourses__course}>
                <div
                  className={styles.landingPageCourses__course__img__container}
                >
                  <img
                    className={styles.landingPageCourses__course__img}
                    src={course.image}
                    alt="Course image"
                  />
                </div>
                <h1 className={styles.landingPageCourses__course__title}>
                  {course.title}
                </h1>
                <p className={styles.landingPageCourses__course__author}>
                  {course.author}
                </p>
                <div className={styles.landingPageCourses__course__rating}>
                  {course.rating}
                  <p
                    className={styles.landingPageCourses__course__rating__stars}
                  >
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    <span
                      className={
                        styles.landingPageCourses__course__rating__stars__filled
                      }
                      style={{ width: `calc((${course.rating} / 5) * 100%)` }}
                    >
                      {starFilledIcon}
                      {starFilledIcon}
                      {starFilledIcon}
                      {starFilledIcon}
                      {starFilledIcon}
                    </span>
                  </p>
                </div>
                <p className={styles.landingPageCourses__course__price}>
                  {course.price}
                </p>
                <div className={styles.landingPageCourses__course__end}>
                  <span className={styles.landingPageCourses__course__end__ad}>
                    Popular
                  </span>
                  <span
                    className={styles.landingPageCourses__course__end__enroll}
                  >
                    {addShoppingCart}
                    Enroll now
                  </span>
                </div>
              </article>
            );
          })}
        </section>
        <section className={styles.landingPageCourses__main__ads}>
          {ads.map((ad) => {
            return (
              <article className={styles.landingPageCourses__ad}>
                <span className={styles.landingPageCourses__ad__img}>
                  {ad.icon}
                </span>
                <div className={styles.landingPageCourses__ad__body}>
                  <h1 className={styles.landingPageCourses__ad__body__title}>
                    {ad.title}
                  </h1>
                  <p
                    className={styles.landingPageCourses__ad__body__description}
                  >
                    {ad.description}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
        <section className={styles.landingPageCourses__main__reviews}>
          {reviews.map((review) => {
            return (
              <article className={styles.landingPageCourses__review}>
                <p className={styles.landingPageCourses__review__body}>
                  {review.description}
                </p>
                <div className={styles.landingPageCourses__review__author}>
                  <div
                    className={
                      styles.landingPageCourses__review__author__img__container
                    }
                  >
                    <img
                      className={styles.landingPageCourses__review__author__img}
                      src={review.icon}
                      alt="Author image"
                    />
                  </div>
                  <div
                    className={styles.landingPageCourses__review__author__body}
                  >
                    <h1
                      className={
                        styles.landingPageCourses__review__author__body__title
                      }
                    >
                      {review.author}
                    </h1>
                    <p
                      className={
                        styles.landingPageCourses__review__author__body__description
                      }
                    >
                      {review.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default LandingPageCourses;
