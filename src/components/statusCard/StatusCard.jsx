import React from "react";
import Icons from "../../assets/icons";
import styles from "./statusCard.module.scss";

const StatusCard = ({ color, icon, label, value }) => {
  const SelectIcon = Icons[icon];
  return (
    <div className={styles.statusCard}>
      <div className={styles.statusCard__content}>
        <div
          className={`${styles["statusCard__icon"]} ${
            styles[`statusCard__icon--${color ? color : "blue"}`]
          }`}
        >
          {icon ? <SelectIcon /> : <Icons.TrendingUp />}
        </div>
        <div className={styles.statusCard__info}>
          <div className={styles.statusCard__label}>{label || "Assets"}</div>
          <div className={styles.statusCard__value}>{value || "25"}</div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
