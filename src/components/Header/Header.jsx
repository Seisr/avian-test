import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import notification from "../../assets/notification.png";
import photo from "../../assets/photo.png";
const { Search } = Input;

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
        <img
          src={notification}
          alt="notification"
          className={styles.notification}
        />
        <img src={photo} alt="photo" className={styles.photo} />
      </div>
    </div>
  );
};

export default Header;
