import React from "react";
import styles from "./metric.module.scss";

const Metric = ({ label, value, unit, rep }) => {
  return (
    <div className={styles.metric}>
      <div className={styles.metric__label}>{label}</div>
      <div className={styles.metric__value}>
        {value}
        {unit || "/5"}
      </div>
      {rep === "progressBar" ? (
        <div className={styles.progressBar}>
          <div
            className="progress-bar__fill progress-bar__fill--blue"
            style={{ width: "98.5%" }}
          ></div>
        </div>
      ) : rep === "coinsReview" ? (
        <div className={styles.coinsReview}>
          {Array.from({ length: 5 }, (_, i) => i).map((_, i) => {
            return (
              <div
                className={styles.coin}
                style={{
                  backgroundColor:
                    Math.floor(value) >= i ? "lightgreen" : "#111111",
                }}
              >
                <div></div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.dotFill}>
          {Array.from({ length: 10 }, (_, i) => i).map((_, i) => {
            return (
              <div
                className={styles.dot}
                style={{
                  backgroundColor:
                    Math.floor(value) >= i ? "purple" : hexToRgb("111111"),
                }}
              >
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Metric;
