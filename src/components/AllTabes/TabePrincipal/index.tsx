import React, { useState } from "react";
import "./style.scss";

import FirstTabe from "../FirstTabe";
import SecondTabe from "../SecondTabe"
import ThirdTabe from "../ThirdTabe";

const Tabs = () => {
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
          Comprar
        </li>

        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Vender
        </li>

        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Enviar
        </li>

      </ul>
      <div className="title-table-principal">
      <p className="m-0 text-semibold heading-06 text-dark-green ">Abundance tokens</p>
        <p className="m-0 text-lightGray" >Valor atual do mercado: <small className="p-01 text-purple text-semibold">20 USD (R$ 112,43)</small> </p>
      </div>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTabe className="firstTabe" /> : activeTab === "tab2" ? <SecondTabe /> : <ThirdTabe /> }
      </div>
    </div>
  );
};
export default Tabs; 