import React from "react";
import styles from "./Header.module.css";
import Notification from "../SVG/Notification";
import Photo from "../SVG/Photo";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full m-5">
      <h1 className={styles.text}>Dashboard</h1>
      <div className={styles.headerRight}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        {/* <span className={styles.searchIcon}></span> */}
        <Notification />
        <Photo />
      </div>
    </div>
  );
};

export default Header;
