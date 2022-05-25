import React from "react";
import TitleSubtitle from "../../components/Titles/TitleSubtitle";
import TitleHeaderAction from "../../components/Titles/TitleHeaderAction";


const Suporte = () => {
  return (
    <div className="container-fluid">
      <TitleSubtitle title="Chamado" subtitle="teste" />
      <div className="container-table">
        <table>
          <tr className="text-lightGray">
            <th>CRÉDITOS</th>
            <th>VALOR</th>
            <th>REFERÊNCIA</th>
            <th>STATUS</th>
            <th>DATA</th>
            <th>EXPORTAR</th>
          </tr>
          <tr className="text-dark-green">
            <td>10</td>
            <td>R$ 700,00</td>
            <td>01234567890</td>
            <td className="text-green text-bold">CONCLUÍDO</td>
            <td>8 de Março de 2021</td>
            <td className="material-icons">picture_as_pdf</td>
          </tr>
          <tr className="text-dark-green ">
            <td>10</td>
            <td>R$ 700,00</td>
            <td>01234567890</td>
            <td className="text-green text-bold">CONCLUÍDO</td>
            <td>8 de Março de 2021</td>
            <td className="material-icons">picture_as_pdf</td>
          </tr>
        </table>
      </div>
      <TitleSubtitle title="teste" subtitle="teste" />
      <TitleHeaderAction title="Chamado" />
    </div>
  );
};
export default Suporte;
