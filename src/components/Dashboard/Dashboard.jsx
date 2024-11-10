import React from "react";
import styles from "./Dashboard.module.css";
import Card from "../Card/Card";
import wallet2 from "../../assets/wallet-2.png";
import walletMinus from "../../assets/wallet-minus.png";

const cards = [
  { icon: wallet2, text: "Balance", amount: 41210 },
  { icon: walletMinus, text: "Income", amount: 41210 },
  { icon: wallet2, text: "Expenses", amount: 41210 },
  { icon: wallet2, text: "Savings", amount: 41210 },
];

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {cards.map((card) => {
        return <Card icon={card.icon} text={card.text} amount={card.amount} />;
      })}
    </div>
  );
};

export default Dashboard;
