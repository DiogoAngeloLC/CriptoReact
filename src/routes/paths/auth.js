import React from "react";
import AlterarSenha from "../../pages/AlterarSenha";
import Empresa from "../../pages/Empresa";

import Home from "../../pages/Home";
import Notificacoes from "../../pages/Notificações";
import ResultadoBusca from "../../pages/ResultadoBusca";
import SuporteChamado from "../../pages/SuporteChamado";
import Usuario from "../../pages/Usuario";
import MinhaCarteira from "../../pages/MinhaCarteira";
import Artigos from "../../pages/Artigos";
import ArtigosInt from "../../pages/ArtigosInt";
import Impacto from "../../pages/Impacto";
import SuporteInt from "../../pages/SuporteInt";
import CentralAjuda from "../../pages/CentralAjuda";
import ImpactoInt from "../../pages/Impacto-int";

const AuthRoutes = [
  {
    component: Home,
    path: "/home"
  },
  {
    component: ResultadoBusca,
    path: "/busca"
  },
  {
    component: SuporteChamado,
    path: "/suporte",
    exact: true
  },

  {
    component: AlterarSenha,
    path: "/alterar-senha"
  },
  {
    component: Empresa,
    path: "/empresa"
  },
  {
    component: Usuario,
    path: "/usuario"
  },
  {
    component: Notificacoes,
    path: "/notificacoes"
  },
  {
    component: Artigos,
    path: "/artigos"
  },
  {
    component: ArtigosInt,
    path: "/artigos-interno"
  },
  {
    component: MinhaCarteira,
    path: "/minha-carteira"
  },
  {
    component: Impacto,
    path: "/impacto"
  },
  {
    component: ImpactoInt,
    path: "/impacto-int"
  },
  {
    component: SuporteInt,
    path: "/suporte/:id"
  },
  {
    component: CentralAjuda,
    path: "/central-ajuda"
  },


]
export default AuthRoutes;
