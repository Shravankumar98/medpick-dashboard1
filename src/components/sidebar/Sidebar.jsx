import React from "react";
import styles from "./sidebar.module.scss";
import Icons from "../../assets/icons";

const NavItem = ({ link, name, icon, isDropDown }) => {
  const ItemIcon = Icons[icon];
  return (
    <li className={styles.navItem}>
      <a href={link || "./"} className={styles.navLink}>
        <ItemIcon />
        <span>{name}</span>
        {isDropDown && (
          <Icons.ChevronDown className={styles.navLink__chevron} />
        )}
      </a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <div className={styles.logo}>
          {/* <div className={styles.logo__icon}>
            <div className={styles.logo__dot}></div>
          </div> */}
          <span className={styles.logo__text}>Vajra</span>
        </div>
      </div>

      <div className={styles.sidebar__main}>
        <nav className={styles.sidebar__nav}>
          <ul className={styles.navList}>
            <NavItem name={"Dashboard"} icon={"LayoutDashboard"} />
            <NavItem name={"Assets"} icon={"Package"} isDropDown={true} />
            <NavItem name={"Incidents"} icon={"AlertTriangle"} />
            <NavItem name={"Services"} icon={"Settings"} />
            <NavItem name={"Request"} icon={"FileText"} />
            <NavItem name={"Users"} icon={"Users"} isDropDown={true} />
            <NavItem name={"Reports"} icon={"BarChart3"} isDropDown={true} />
          </ul>
        </nav>
      <div className={styles.actions}>
        <button className={styles.action}><Icons.AlertTriangle /><span>Contact us</span></button>
        <button className={styles.action}><Icons.LayoutDashboard /><span>Log Out</span></button>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
