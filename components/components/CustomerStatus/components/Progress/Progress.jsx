import React from "react";
import styles from "./styles/Progress.module.scss";
import ProgressAction from "./components/ProgressAction";
import ProgressActionNull from "./components/ProgressActionNull";
import { infoIcon } from "../../../../Icons";

const Progress = ({ dataStatus, dataAction, statusComplete }) => {
  return (
    <article className={`${styles.Progress} text`}>
      {infoIcon}
      <div className={styles.Progress__status}>
        <h3 className={styles.Progress__title}>Din status</h3>
        <p className={styles.Progress__text}>{dataStatus}</p>
      </div>
      {dataAction ? (
        <ProgressAction dataAction={dataAction} />
      ) : (
        <ProgressActionNull statusComplete={statusComplete} />
      )}
    </article>
  );
};

export default Progress;
