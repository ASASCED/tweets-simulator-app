import React from "react";
import TwitterLogo from "../../assets/img/original.png";

import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <img src={TwitterLogo} alt="Tweets Simulator" />
      <h1>Tweets Simulator</h1>
    </div>
  );
}
