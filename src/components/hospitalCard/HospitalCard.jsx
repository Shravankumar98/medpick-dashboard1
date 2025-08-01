import React from "react";
import Icons from "../../assets/icons";
import styles from "./hospitalCard.module.scss";
import Metric from "./Metric";

const HospitalCard = () => {
  return (
    <div className={styles.hospitalCard}>
      <div className={styles.hospitalCard__header}>
        <div className={styles.hospitalInfo}>
          <div className={styles.hospitalIcon}>
            <Icons.Package size={24} />
          </div>
          <div className={styles.hospitalDetails}>
            <div className={styles.hospitalTitle}>
              <h2>City General Hospital</h2>
              <span className={styles.statusBadge}>Active Client</span>
            </div>
            <div className={styles.hospitalStatus}>
              <div className={styles.onlineIndicator}>
                <div className={styles.statusDot}></div>
                <span>Online</span>
              </div>
              <span className={styles.lastUpdated}>
                Last updated 2 mins ago
              </span>
            </div>
          </div>
        </div>

        <button className={styles.generateReportBtn}>
          <Icons.Plus />
          <span>Generate Report</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className={styles.metricsRow}>
        <Metric
          label={"Performance"}
          value={"98.5"}
          unit={"%"}
          rep={"progressBar"}
        />
        <Metric label={"Satisfaction"} value={"4.5"} rep={"coinsReview"} />
        <Metric label={"Asset Utilization"} value={"95.3"} unit={"%"} />

        <div className={styles.placeholderCard}>
          <div className={styles.placeholderContent}>
            <div className={styles.placeholderText}>XXXXXXXXXXX</div>
            <div className={styles.placeholderText}>XXXXXXXXXXX</div>
          </div>
        </div>
      </div>

      {/* Contract Value and Additional Metrics */}
      <div className={styles.contractSection}>
        <div className={styles.contractValue}>
          <div className={styles.contractLabel}>Annual Contract Value</div>
          <div className={styles.contractAmount}>₹2,50,00,000</div>
        </div>
        <div className={styles.additionalMetrics}>
          <div className={styles.additionalMetric}>
            <div className={styles.additionalMetric__label}>Assets</div>
            <div className={styles.additionalMetric__value}>487</div>
          </div>
          <div className={styles.additionalMetric}>
            <div className={styles.additionalMetric__label}>Services</div>
            <div className={styles.additionalMetric__value}>24</div>
          </div>
          <div className={styles.additionalMetric}>
            <div className={styles.additionalMetric__label}>Uptime</div>
            <div className={styles.additionalMetric__value}>99.9%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
