import React from "react";
import { pendingIcon } from "../../../../../Icons";
import styles from "../styles/Progress.module.scss";

const ProgressActionNull = ({ statusComplete }) => {
  return (
    <>
      {pendingIcon}
      <div className={styles.Progress__action}>
        <h3 className={styles.Progress__title}>
          {statusComplete
            ? "Saken din er avsluttet"
            : "Saken din er til behandling"}
        </h3>
        <p className={styles.Progress__text}>
          {statusComplete
            ? "Takk for samarbeidet!"
            : "Takk for din tålmodighet mens våre eksperter behandler saken din."}
        </p>
      </div>
    </>
  );
};

export default ProgressActionNull;
