import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import FormLogin from "../../containers/FormLogin";
import Footer from "../../components/Footer";
import InfoCriarConta from "../../components/InfoCriarConta";

const Login = () => {
  return(
      <div className='container-sidebar'>
          <Sidebar/>
          <div className='content-side'>
            <InfoCriarConta/>
            <FormLogin/>
            <Footer/>
          </div>
      </div>
  );
}
export default Login
