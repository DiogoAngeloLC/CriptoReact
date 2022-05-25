import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const Confirmacao = () => {
  const history = useHistory();

  const backPage = () => {
    history.goBack();
  };

  return (
    <div className="container-sidebar hide-logo">
      <Sidebar/>
      <div className="content-side">
        <div></div>
        <div className="confirmation-content">
          <h2>Cadastro realizado com sucesso!</h2>
          <p>
            Em breve você será convidado para iniciar a sua jornada ESG de
            Abundância com um diagnóstico descomplicado .
          </p>
          <Button type="button" className="md btn" onClick={() => backPage()}>
            Voltar para o site
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Confirmacao;
