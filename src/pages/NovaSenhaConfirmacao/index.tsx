import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import LinkButton from "../../components/LinkButton";

const NovaSenhaConfirmacao = () => {
  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="content-side">
        <div></div>
        <div className="align-center-form">
          <h2 className="text-semibold mb-4">Nova senha criada com sucesso!</h2>
          <p className=" mb-4">Agora você pode acessar novamente a sua conta</p>
          <LinkButton to="/login" className="btn" style={{display: "table"}}>
            Acessar minha conta
          </LinkButton>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default NovaSenhaConfirmacao;
