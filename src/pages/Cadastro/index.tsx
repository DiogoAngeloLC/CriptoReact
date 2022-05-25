import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import FormCadastro from "../../containers/FormCadastro";
import Footer from "../../components/Footer";
import InfoCriarConta from "../../components/InfoCriarConta";

const Cadastro = () => {
  return(
      <div className='container-sidebar'>
          <Sidebar/>
          <div className='content-side'>
            <FormCadastro/>
            <Footer/>
          </div>
      </div>
  );
}
export default Cadastro
