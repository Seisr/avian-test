import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ Icon, name, active, onClick }) => {
  return (
    <>
      <div
        className={`${styles.menuItem} ${active ? styles.active : ""}`}
        onClick={onClick}
      >
        <Icon
          className={`${styles.menuIcon} ${active ? styles.active : ""}`}
          fill={active ? "#1fcb4f" : "#a9a9a9"}
        />
        <span className={styles.menuItemName}>{name}</span>
        <span
          className={`${styles.bar} ${active ? styles.activeBar : ""}`}
        ></span>
      </div>
    </>
  );
};

export default MenuItem;
