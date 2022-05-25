import React, { useState } from "react";
import "./style.scss";

import FirstTabe from "../FirstTabe";
import SecondTabe from "../SecondTabe"
import ThirdTabe from "../ThirdTabe";
import FirstVA from "../FirstVA";

const TabsVA = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <div className="Tabs">
      <ul className="nav">

        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Meio Ambiente
        </li>

        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Social
        </li>

        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Governança
        </li>

      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstVA/> : activeTab === "tab2" ? <FirstVA/> : <FirstVA/> }
      </div>
    </div>
  );
};
export default TabsVA; 