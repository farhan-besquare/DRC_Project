import React from "react";
import MarketLogoDark from "../../assets/DashboardAsset/DashLogoDark.svg";
import MarketLogoLight from "../../assets/DashboardAsset/DashLogoLight.svg";
import ToggleSwitch from "./../ModeSwitch/Switch";
import "./DashMarBar.css";

export default function HeaderBar(props) {
  const { theme, setTheme } = props;
  //   const [theme, setTheme] = React.useState("dark");

  return (
    <div className="market-bar">
      <div className="MarketLogo">
        <img
          src={theme === "dark" ? MarketLogoDark : MarketLogoLight}
          alt="Market Header Logo"
        />
        <span className="MarketHead">{props.titleName}</span>
      </div>
      <div className="market-icon-head">
        <ToggleSwitch theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}