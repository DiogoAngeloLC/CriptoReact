import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Perfil from "../../assets/img/Avatars.png";

import Brasil from "../../assets/img/brasil-bandeira.svg";
import LinkButton from "../LinkButton";
import SearchLanguage from "../SearchLanguage";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

interface PropsSidebarProfile {
  name?: string;
}

const SidebarProfile = (props: PropsSidebarProfile) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let location = useLocation();
  const openedProfile = useSelector((state: any) => state.menu.openedProfile);

  const getOut = () => {
    history.push("/")
    changeMenu()
  }

  const changeMenu = () => {
    dispatch({ type: "MENU_TOGGLE_PROFILE" });
  }

  return (
    <div className={`sidebar-profile ${openedProfile ? "active" : ""}`}>
      <div onClick={() => changeMenu()} className="before"></div>
      <div className="content-all">
        <div className="content-information">
          <div className="infoProfile">
            <img src={Perfil} alt="" />
            <p className="p-02 text-semibold mb-2">Olá, {props.name}!</p>
            <p className="mb-2 caption text-lightGray">
              felipe@mycompany.com.br
            </p>
            <p className="mb-2 caption text-lightGray">+55 31 99466-4040</p>
          </div>

          <div className="content-sidebarProfile ">
            <ul>
              <li onClick={() => changeMenu()}>
                <LinkButton className={`link ${location.pathname === "/usuario" ? "active" : ""}`} to="/usuario">
                  <span className="material-icons mr-6">account_circle</span>
                  Usuário
                </LinkButton>
              </li>

              <li onClick={() => changeMenu()}>
                <LinkButton className={`link ${location.pathname === "/empresa" ? "active" : ""}`} to="/empresa">
                  <span className="material-icons mr-6">business</span>
                  Empresa
                </LinkButton>
              </li>
              <li onClick={() => changeMenu()}>
                <LinkButton className={`link ${location.pathname === "/central-ajuda" ? "active" : ""}`} to="/central-ajuda">
                  <span className="material-icons mr-6">help_outline</span>
                  Central de Ajuda
                </LinkButton>
              </li>
              <li onClick={() => changeMenu()}>
                <LinkButton className={`link ${location.pathname === "/notificacoes" ? "active" : ""}`} to="/notificacoes">
                  <span className="material-icons mr-6">notifications</span>
                  Notificações
                </LinkButton>
              </li>
              <li onClick={() => changeMenu()}>
                <LinkButton className={`link ${location.pathname === "/alterar-senha" ? "active" : ""}`} to="/alterar-senha">
                  <span className="material-icons mr-6">password</span>
                  Alterar senha
                </LinkButton>
              </li>
            </ul>
          </div>

          <div className="footer-sidebar-help">
            <p>Precisa de ajuda?</p>
            <div className="actions">
              <a href="#">
                <span className="material-icons">chat</span>
              </a>
              <a href="#">
                <span className="material-icons">call</span>
              </a>
              <a href="#">
                <span className="material-icons">mail_outline</span>
              </a>
            </div>
            <SearchLanguage img={Brasil} />
          </div>
        </div>

        <div onClick={() => getOut()} className="getOut">
          <span className="text-red">
            <span className="mr-6 material-icons">power_settings_new</span>
          </span>

          <span className="text-red mb-1">
            Sair
          </span>
        </div>
      </div>
    </div>
  );
};
export default SidebarProfile;
