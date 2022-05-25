import React from "react";
import Cadastro from "../../pages/Cadastro";
import CadastroBeta from "../../pages/CadastroBeta";
import Confirmacao from "../../pages/Confirmacao";
import EsqueceuSenha from "../../pages/EsqueceuSenha";
import Login from "../../pages/Login";
import NovaSenha from "../../pages/NovaSenha";
import NovaSenhaConfirmacao from "../../pages/NovaSenhaConfirmacao";
import NovaSenhaEnviada from "../../pages/NovaSenhaEnviada";
import VerificacaoLog from "../../pages/VerificacaoLog";

const PublicRoutes = [
  {
    component: Login,
    path: "/",
    exact: true,
  },
  {
    component: Login,
    path: "/login",
  },
  {
    component: CadastroBeta,
    path: "/cadastro-beta",
  },
  {
    component: Cadastro,
    path: "/cadastro",
    exact: true,
  },
  {
    component: EsqueceuSenha,
    path: "/esqueci-minha-senha",
  },
  {
    component: NovaSenha,
    path: "/nova-senha",
    exact: true,
  },
  {
    component: NovaSenhaConfirmacao,
    path: "/nova-senha-confirmacao",
  },
  {
    component: NovaSenhaEnviada,
    path: "/nova-senha-enviada",
  },
  {
    component: Confirmacao,
    path: "/confirmacao",
  },
  {
    component: VerificacaoLog,
    path: "/verificacao-login",
  },
];
export default PublicRoutes;
