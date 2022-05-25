import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import FormNovaSenha from "../../containers/FormNovaSenha";

const NovaSenha = () => {
  return(
      <div className='container-sidebar'>
          <Sidebar/>
          <div className='content-side'>
            <div></div>
            <FormNovaSenha/>
            <div></div>
          </div>
      </div>
  );
}
export default NovaSenha
