import React from "react";
import styles from "./Card.module.css";

const Card = ({ Icon, text, amount }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.label}>{text}</p>
        <p className={styles.amount}>${amount.toLocaleString("en-US")}</p>
      </div>
    </div>
  );
};

export default Card;
