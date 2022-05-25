import React from "react";
import { Route, Switch } from "react-router-dom";

import CadastroBeta from "../pages/CadastroBeta";
import Cadastro from "../pages/Cadastro";
import Confirmacao from "../pages/Confirmacao";
import EsqueceuSenha from "../pages/EsqueceuSenha";
import Login from "../pages/Login";
import NovaSenha from "../pages/NovaSenha";
import NovaSenhaConfirmacao from "../pages/NovaSenhaConfirmacao";
import NovaSenhaEnviada from "../pages/NovaSenhaEnviada";
import Home from "../pages/Home";
import Suporte from "../pages/Suporte";
import ResultadoBusca from "../pages/ResultadoBusca";
import VerificacaoLog from "../pages/VerificacaoLog";
import SuporteChamado from "../pages/SuporteChamado";
import AlterarSenha from "../pages/AlterarSenha";
import Empresa from "../pages/Empresa";
import Usuario from "../pages/Usuario";
import Notificacoes from "../pages/Notificações";
import MinhaCarteira from "../pages/MinhaCarteira";


const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro-beta" component={CadastroBeta} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/esqueci-minha-senha" component={EsqueceuSenha} />
        <Route path="/nova-senha" component={NovaSenha} />
        <Route path="/nova-senha-confirmacao" component={NovaSenhaConfirmacao} />
        <Route path="/nova-senha-enviada" component={NovaSenhaEnviada} />
        <Route path="/confirmacao" component={Confirmacao} />
        <Route path="/verificacao-login" component={VerificacaoLog} />
        <Route path="/busca" component={ResultadoBusca} />
        <Route path="/home" component={Home} />
        <Route path="/suporte" component={Suporte} />
        <Route path="/suporte-chamado" component={SuporteChamado} />
        <Route path="/alterar-senha" component={AlterarSenha} />
        <Route path="/empresa" component={Empresa} />
        <Route path="/usuario" component={Usuario} />
        <Route path="/notificacoes" component={Notificacoes} />
        <Route path="/minha-carteira" component={MinhaCarteira} />

        

      </Switch>
    </main>
  );
};

export default Routes;
