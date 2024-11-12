import React from "react";
import styles from "./Dashboard.module.css";
import Card from "../Card/Card";
import DollarCircle from "../SVG/DollarCircle";
import Cardsvg from "../SVG/Cardsvg";
import Wallet from "../SVG/Wallet";
import Wallet3 from "../SVG/Wallet3";

const cards = [
  { icon: Wallet3, text: "Balance", amount: 41210 },
  { icon: Wallet, text: "Income", amount: 41210 },
  { icon: Cardsvg, text: "Expenses", amount: 41210 },
  { icon: DollarCircle, text: "Savings", amount: 41210 },
];

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {cards.map((card) => {
        return <Card Icon={card.icon} text={card.text} amount={card.amount} />;
      })}
    </div>
  );
};

export default Dashboard;
