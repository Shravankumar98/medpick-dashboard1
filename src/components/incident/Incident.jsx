import React, { useState } from "react";
import styles from "./incident.module.scss";
import Metric from "./Metric";
import Icons from "../../assets/icons";

const Incident = () => {
  const [activeTab, setActiveTab] = useState("Month");

  const incidentData = [
    { period: "Jan", value: 40 },
    { period: "Feb", value: 65 },
    { period: "Mar", value: 30 },
    { period: "Apr", value: 80 },
    { period: "May", value: 45 },
    { period: "Jun", value: 70 },
  ];

  const maxValue = Math.max(...incidentData.map((item) => item.value));

  return (
    <div className={styles.dashboard__card}>
      <div className={styles.incidents__header}>
        <h2>Incidents</h2>
        <button className="btn btn--primary btn--small">
          <Icons.Plus />
          Add New
        </button>
      </div>

      <div className={styles.incidentsMain}>
        <div className={styles.incidents__metrics}>
          <Metric progress={"41"} status={"Open"} value={"24"} />
          <Metric progress={"30"} status={"Closed"} value={"18"} />
          <Metric progress={"41"} status={"Exceptions"} value={"643k"} />
        </div>

        <div className={styles.incidentsContainer}>
          <div className={styles.incidents__tabs}>
            {["Day", "Month", "Year"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? styles.active : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.incidents__chart}>
            {incidentData.map((item, index) => (
              <div
                key={index}
                className={styles.incidents__chartBar}
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              />
            ))}
          </div>

          <div className={styles.incidents__chartLabels}>
            {incidentData.map((item, index) => (
              <span key={index}>{item.period}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incident;
