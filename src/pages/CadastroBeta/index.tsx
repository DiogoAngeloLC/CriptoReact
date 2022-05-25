import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import FormCadastroBeta from "../../containers/FormCadastroBeta";
import Footer from "../../components/Footer";
import InfoCriarConta from "../../components/InfoCriarConta";

const CadastroBeta = () => {
  return(
      <div className='container-sidebar'>
          <Sidebar/>
          <div className='content-side'>
            <InfoCriarConta/>
            <FormCadastroBeta/>
            <Footer/>
          </div>
      </div>
  );
}
export default CadastroBeta
