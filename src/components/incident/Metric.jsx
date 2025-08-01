import React from "react";
import styles from "./incident.module.scss";

const Metric = ({ progress, status, value }) => {
  return (
    <div className={styles.metric}>
      <div className={styles.metricInfo}>
        <h3>{status}</h3>
        <p>{value}</p>
      </div>
      <div
        className={`${styles["metricCircle"]} ${
          styles[`metricCircle${status}`]
        }`}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Metric;
