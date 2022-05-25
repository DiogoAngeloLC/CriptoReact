import React from "react";
import LinkButton from "../LinkButton";
import "./style.scss";


export default function InfoCriarConta() {
  return (
    <div className='container-info-create-account'>
      <label>Não possui uma conta?</label>
      <LinkButton className="sm btn gray-transparent" to="/cadastro">Crie sua conta</LinkButton>
    </div>
  );
}
