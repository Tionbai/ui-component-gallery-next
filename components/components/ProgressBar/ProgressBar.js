import React, { useRef, useState, useEffect } from "react";
import styles from "./styles/ProgressBar.module.scss";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  const [value, setValue] = useState(0);
  const progressRef = useRef();

  const loadProgressBar = () => {
    if (progressRef.current) {
      const newWidth = parseInt(progressRef.current.style.width.split("%")[0]);
      const newValue = progressRef.current.value;
      // Run loop while width is <= 100%
      if (newWidth < 100) {
        // Update width attribute
        setWidth(newWidth + 10);
        setValue(newValue + 0.1);
      }
    }
  };

  const runInterval = () => {
    setInterval(() => {
      loadProgressBar();
    }, 100);
    clearInterval(() => {
      loadProgressBar();
    });
  };

  useEffect(() => {
    runInterval();
  }, [progressRef]);

  return (
    <section className={styles.progressBar}>
      <div className={styles.progress__bar__container}>
        <div
          className={styles.progress__bar__inner}
          style={{ width: `${width}%` }}
        >{`${width}%`}</div>
        <progress
          ref={progressRef}
          className={styles.progress__bar}
          style={{ width: `${width}%` }}
          value={value}
        ></progress>
      </div>
    </section>
  );
};

export default ProgressBar;
