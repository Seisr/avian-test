import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ icon, name, active, onClick }) => {
  return (
    <>
      <div
        className={`${styles.menuItem} ${active ? styles.active : ""}`}
        onClick={onClick}
      >
        <img className={styles.menuImg} src={icon} alt="" />
        {name}
        <span className={styles.bar}></span>
      </div>
    </>
  );
};

export default MenuItem;
