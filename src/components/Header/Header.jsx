import React from "react";
import styles from "./Header.module.css";
import Notification from "../SVG/Notification";
import Photo from "../SVG/Photo";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.text}>Dashboard</h1>
      <div className={styles.headerRight}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <div className="notification">
          <Notification />
        </div>
        <div className="photo">
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Header;
