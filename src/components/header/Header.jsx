import React from "react";
import styles from "./header.module.scss";
import Icons from "../../assets/icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>Dashboard</h1>

        <div className={styles.header__actions}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>B</div>
            <div className={styles.userDetails}>
              <div className={styles.userName}>Non Bio Medical</div>
            </div>
          </div>

          <div className={styles.locationSelector}>
            <span className={styles.locationText}>Vijayanagar</span>
            <Icons.ChevronDown className={styles.locationChevron} />
          </div>

          <Icons.Grid3X3 className={styles.headerIcon} />
          <Icons.Bell className={styles.headerIcon} />

          <div className={styles.userAvatar}>A</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
