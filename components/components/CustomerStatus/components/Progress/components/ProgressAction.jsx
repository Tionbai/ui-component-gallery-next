import React from "react";
import PropTypes from "prop-types";
import { chevronRightIcon, feedbackIcon } from "../../../../../Icons";
import styles from "../styles/Progress.module.scss";

const ProgressAction = ({ dataAction }) => {
  return (
    <>
      {feedbackIcon}
      <div className={styles.Progress__action}>
        <h3 className={styles.Progress__title}>Handling gjenstår</h3>
        <p className={styles.Progress__text__action}>
          <span>{dataAction}</span>
          {chevronRightIcon}
        </p>
      </div>
    </>
  );
};

export default ProgressAction;

ProgressAction.propTypes = {
  dataAction: PropTypes.string,
};

ProgressAction.defaultProps = {
  dataAction: PropTypes.string,
};
