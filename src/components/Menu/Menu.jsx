import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { AppstoreFilled } from "@ant-design/icons";
import logo from "../../assets/logo.png";
// import * as icon from "../../assets";
import styles from "./Menu.module.css";
import Element3 from "../SVG/Element3";
import PresentationChart from "../SVG/PresentationChart";
// import { ReactComponent as setting2 } from "../../assets/svg/setting-2.svg";
import Setting2 from "../SVG/Setting2";
import Sms from "../SVG/Sms";
import WalletMinus from "../SVG/WalletMinus";
import Wallet2 from "../SVG/Wallet2";
import User from "../SVG/User";
import { NavLink } from "react-router-dom";

const tabs = [
  {
    name: "Dashboard",
    icon: Element3,
  },
  {
    name: "Transactions",
    icon: Wallet2,
  },
  {
    name: "Wallet",
    icon: WalletMinus,
  },
  {
    name: "Analytics",
    icon: PresentationChart,
  },
  {
    name: "Personal",
    icon: User,
  },
  {
    name: "Message",
    icon: Sms,
  },
  {
    name: "Setting",
    icon: Setting2,
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

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
            Icon={tab.icon}
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
