import React from "react";
import styles from "./styles/Dashboard.module.scss";
import {
  arrowBackIcon,
  arrowForwardIcon,
  arrowPlayIcon,
} from "../../../../Icons";

const Dashboard = ({
  data,
  selectedDataIndex,
  setSelectedDataIndex,
  lastIndex,
}) => {
  const handleClick = (e, index) => {
    e.preventDefault();

    setSelectedDataIndex(index);
  };

  const handleClickPlay = (e) => {
    e.preventDefault();
    setSelectedDataIndex(0);

    for (let i = 0; i < data.length; i += 1) {
      setTimeout(() => {
        setSelectedDataIndex(i);
      }, 2000 * i);
    }
  };

  return (
    <section className={`${styles.Dashboard} text`}>
      <div className={styles.Dashboard__container}>
        <div
          role="presentation"
          className={`${styles.Dashboard__action} ${
            selectedDataIndex === 0 ? styles.disabled : ""
          }`}
          onClick={(e) => handleClick(e, selectedDataIndex - 1)}
        >
          {arrowBackIcon}
          <p>Previous</p>
        </div>
        <div
          role="presentation"
          className={`${styles.Dashboard__action} ${
            selectedDataIndex === lastIndex ? styles.disabled : ""
          }`}
          onClick={(e) => handleClick(e, selectedDataIndex + 1)}
        >
          {arrowForwardIcon}
          <p>Next</p>
        </div>
      </div>
      <div className={styles.Dashboard__container}>
        <div
          role="presentation"
          className={styles.Dashboard__action}
          onClick={handleClickPlay}
        >
          {arrowPlayIcon}
          <p>Play loop</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
