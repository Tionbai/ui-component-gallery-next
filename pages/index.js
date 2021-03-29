import styles from "../styles/Home/Home.module.scss";
import Hero from "../components/Home/Hero";

const home = () => {
  return (
    <>
      <Hero />
      <section className={styles.home}>
        <h1 className="title">Welcome!</h1>
      </section>
    </>
  );
};

export default home;
