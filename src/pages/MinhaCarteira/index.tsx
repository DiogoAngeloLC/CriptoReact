import React, { useState } from "react";
import "./style.scss";

import "../../assets/scss/common/flexbox.scss";
import TitleHeaderAction from "../../components/Titles/TitleHeaderAction";

import CardQtd from "../../components/Cards/CardQtd";
import Tabs from "../../components/AllTabes/TabePrincipal";
import ValueCompra from "../../components/ValueCompra";
import Tree from "../../assets/img/icon-tree.svg";
import Cloud from "../../assets/img/icon-cloud.svg";
import AlertModal from "../../components/AlertModal";

const MinhaCarteira = () => {
  const [message, setMessage] = useState({
    opened: true, 
    message: 'Compra realizada com sucesso.' 
  })
  return (
    <>
      <div className="content-side _interno container-fluid fluid-header-actions">
        <TitleHeaderAction title="Carteira" />
      </div>
      <div className="container-fluid margin-fluid-0">
        <div className="spacing-mobile-interno"></div>
      <div className="title-value">
        <p className="mb-2 text-lightGray">Valor Atual</p>
        <h5 className="heading-03 text-purple mb-6">R$ 0</h5>
      </div>
        <div className="container-table ">
          <table className="table-scroll-unset">
            <tr className="text-dark-green">
              <div className="flex">
              <img className="mr-2" src={Tree} alt="" />
              <td className="text-semibold p-02">CO2 comprados</td>
              </div>
              <td className="text-end p-02">R$ 168,00</td>
            </tr>

            <tr className="text-dark-green">
              <div className="flex">
              <img className="mr-2" src={Cloud} alt="" />
              <td className="text-semibold p-02">CO2 compensados</td>
              </div>
              <td className="text-end p-02">R$ 32,00</td>
            </tr>

            <tr className="text-dark-green">
              <div className="flex ">
              <img className="mr-2" src={Cloud} alt="" />
              <td className="text-semibold p-02">CO2 disponíveis</td>
              </div>
              <td className="text-end p-02">R$ 76,00</td>
            </tr>
          </table>
        </div>

        <Tabs />

        <CardQtd />

        <ValueCompra />

        <AlertModal type="success" opened={message.opened} onClose={() => setMessage({...message, opened: false})}>
         {message.message}
        </AlertModal>
      </div>
    </>
  );
};
export default MinhaCarteira;
