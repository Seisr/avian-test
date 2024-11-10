import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { AppstoreFilled } from "@ant-design/icons";
import logo from "../../assets/logo.png";
// import * as icon from "../../assets";
import styles from "./Menu.module.css";
import element3 from "../../assets/svg/element-3.svg";
import presentationChart from "../../assets/svg/presention-chart.svg";
import setting2 from "../../assets/svg/setting-2.svg";
import sms from "../../assets/svg/sms.svg";
import wallet2 from "../../assets/svg/wallet-2.svg";
import walletMinus from "../../assets/svg/wallet-minus.svg";
import user from "../../assets/svg/user.svg";
import { NavLink } from "react-router-dom";

const tabs = [
  {
    name: "Dashboard",
    icon: element3,
  },
  {
    name: "Transactions",
    icon: wallet2,
  },
  {
    name: "Wallet",
    icon: walletMinus,
  },
  {
    name: "Analytics",
    icon: presentationChart,
  },
  {
    name: "Personal",
    icon: user,
  },
  {
    name: "Message",
    icon: sms,
  },
  {
    name: "Setting",
    icon: setting2,
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  console.log(activeTab);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menu}>
        {tabs.map((tab) => (
          <MenuItem
            key={tab.name}
            className={styles.menuItem}
            icon={tab.icon}
            name={tab.name}
            active={activeTab === tab.name}
            onClick={() => setActiveTab(tab.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
