import React from "react";
import styles from "./Card.module.css"; // Create a CSS file with the styles

const Card = ({ icon, text, amount }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <img src={icon} alt="Icon" className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.label}>{text}</p>
        <p className={styles.amount}>${amount.toLocaleString("en-US")}</p>
      </div>
    </div>
  );
};

export default Card;
