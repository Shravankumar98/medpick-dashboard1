import React from "react";
import styles from "./tableCard.module.scss";
import Icons from "../../assets/icons";

const TableCard = () => {
  const attentionData = [
    {
      assetCode: "MED-1234",
      department: "Cardiology",
      service: "Maintenance",
      status: "urgent",
    },
    {
      assetCode: "MED-2356",
      department: "Radiology",
      service: "Repair",
      status: "high",
    },
    {
      assetCode: "MED-7890",
      department: "Laboratory",
      service: "Calibration",
      status: "medium",
    },
    {
      assetCode: "MED-4567",
      department: "Emergency",
      service: "Replacement",
      status: "low",
    },
  ];

  return (
    <div className={`${styles["table"]} ${styles["dashboard__fullWidth"]}`}>
      <div className={styles.attention__header}>
        <h2>Need Attention</h2>
        <button
          className={`${styles["btn"]} ${styles["btn--primary"]} ${styles["btn--small"]} `}
        >
          <Icons.Plus />
          Add New
        </button>
      </div>

      <table className={styles.attention__table}>
        <thead>
          <tr>
            <th>Asset Code</th>
            <th>Department</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attentionData.map((item, index) => (
            <tr key={index}>
              <td className={styles.itemLabel}>{item.assetCode}</td>
              <td>{item.department}</td>
              <td>{item.service}</td>
              <td>
                <span
                  className={`${styles["attention__status"]} ${
                    styles[`attention__status--${item.status}`]
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCard;
