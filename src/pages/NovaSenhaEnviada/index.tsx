import React from "react";
import "./style.scss";
import LinkButton from "../../components/LinkButton";
import logoWhite from "../../assets/img/brand-vertical-white.png";

const NovaSenhaEnviada = () => {
  return (
    <div className="content-fill-center">
      <div className="content-centered-slim">
        <img className="mb-8" src={logoWhite} alt="Logo" />

        <h2 className="text-center text-white mb-5 heading-05">
          O e-mail para criar a nova senha foi enviado
        </h2>
        <p className="text-center text-white">
          Enviamos um e-mail de redefinição de senha para email@domain.com com
          instruções sobre como redefinir sua senha.
        </p>
        <p className="text-center text-white mb-10">
          Se você não receber o e-mail, verifique se o endereço de e-mail
          inserido está correto, consulte nossas{" "}
          <a className="text-white text-bold" href="#">Perguntas frequentes</a> ou entre em contato com o suporte{" "}
          <a className="text-white text-bold" href="#">aqui</a>.
        </p>

        <div className="action-btn">
        </div>
      </div>
    </div>
  );
};
export default NovaSenhaEnviada;
