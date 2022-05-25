import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import FormEsqueceuSenha from "../../containers/FormEsqueceuSenha";
import Footer from "../../components/Footer";
import InfoCriarConta from "../../components/InfoCriarConta";

const EsqueceuSenha = () => {
  return(
      <div className='container-sidebar'>
          <Sidebar/>
          <div className='content-side'>
            <InfoCriarConta/>
            <FormEsqueceuSenha/>
            <Footer/>
          </div>
      </div>
  );
}
export default EsqueceuSenha
