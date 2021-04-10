import React, { useState, useEffect } from "react";
import styles from "./styles/DigitalClock.module.scss";

const DigitalClock = () => {
  const [time, setTime] = useState("");

  const getCurrentTime = () => {
    const [newTime] = new Date().toTimeString().split(" ");

    setTime(newTime);
  };

  useEffect(() => {
    getCurrentTime();
    setInterval(() => {
      getCurrentTime();
    }, 1000);
    clearInterval(() => {
      getCurrentTime();
    });
  }, []);

  return (
    <section className={styles.clock__container}>
      <article className={styles.clock}>{time}</article>
    </section>
  );
};

export default DigitalClock;
