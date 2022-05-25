import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import FormCadastro from "../../containers/FormCadastro";
import Footer from "../../components/Footer";
import InfoCriarConta from "../../components/InfoCriarConta";
import VerificacaoLogin from "../../containers/VerificacaoLogin";

const VerificacaoLog = () => {
  return(
      <div className='container-sidebar'>
          <Sidebar/>
          <div className='content-side marginVerLog'>
            <VerificacaoLogin/>
            <Footer/>
          </div>
      </div>
  );
}
export default VerificacaoLog
