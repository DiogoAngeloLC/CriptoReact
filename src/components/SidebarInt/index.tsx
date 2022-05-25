import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../../assets/img/brand-dark.svg";
import { ReactComponent as MenuInicio } from "../../assets/img/menu/ESG.svg";
import { ReactComponent as MenuCarteira } from "../../assets/img/menu/Cartoes.svg";
import { ReactComponent as MenuCompensar } from "../../assets/img/menu/Union.svg";
import { ReactComponent as MenuImpacto } from "../../assets/img/menu/MKT-crescimento.svg";
import { ReactComponent as MenuSuporte } from "../../assets/img/menu/Conversation.svg";

import FacebookIcon from "../../assets/img/facebook-icon-blue.svg";
import InstagramIcon from "../../assets/img/instagram-icon-blue.svg";
import LinkedingIcon from "../../assets/img/linkeding-icon-blue.svg";
import SpotfyIcon from "../../assets/img/spotfy-icon-blue.svg";

import logo01 from "../../assets/img/sdg-wheel-smaller.png";
import logo02 from "../../assets/img/IIRC_Logo_RGB-2-724x257-1.png";
import logo03 from "../../assets/img/PAGINA-INICIAL-SITE-DEEP-07-e1626874934363.png";
import logo04 from "../../assets/img/PAGINA-INICIAL-SITE-DEEP-05.png";
import { useLocation } from "react-router-dom";

import LinkButton from "../LinkButton";
import "./style.scss";
import CardIndiqueAbundance from "../Cards/CardIndiqueAbundance";
import Button from "../Button";
import SearchMain from "../SearchMain";

const SidebarInt = () => {
  const dispatch = useDispatch();

  const opened = useSelector((state: any) => state.menu.opened);

  const changeMenu = () => {
    dispatch({ type: "MENU_TOGGLE" });
  }

    let location = useLocation();

  return (
    <div className="sidebar-maint">
      <div onClick={() => changeMenu()} className="before"></div>
      <div className="content-all">

        <div className="content-sidebar mb-12">
          <img className="logo-desktop" src={Logo} alt="Logo" />
        </div>

        <div className="content-search-side">
          <SearchMain />
        </div>

        <div className="content-main">
          <ul>
            <li>
              <LinkButton className={`link ${location.pathname === "/home" ? "active" : ""}`} to="/home">
                <MenuInicio />
                Início
              </LinkButton>
            </li>
            <li>
              <LinkButton className={`link ${location.pathname === "/minha-carteira" ? "active" : ""}`} to="/minha-carteira">
                <MenuCarteira />
                Carteira
              </LinkButton>
            </li>
            <li>
              <LinkButton className={`link ${location.pathname === "/impacto" ? "active" : ""}`} to="/impacto">
                <MenuImpacto />
                Impacto
              </LinkButton>
            </li>
            <li>
              <LinkButton className={`link ${location.pathname === "/artigos" ? "active" : ""}`} to="/artigos">
                <MenuImpacto />
                Artigos
              </LinkButton>
            </li>
            <li>
              <LinkButton className={`link ${location.pathname === "/suporte" ? "active" : ""}`} to="/suporte">
                <MenuSuporte />
                Suporte
              </LinkButton>
            </li>
          </ul>
        </div>

        <CardIndiqueAbundance />

        <div className="footer-sidebar-help">
          <p>Precisa de ajuda?</p>
          <div className="actions">
            <a href="#"><span className="material-icons">chat</span></a>
            <a href="#"><span className="material-icons">call</span></a>
            <a href="#"><span className="material-icons">mail_outline</span></a>
          </div>
        </div>

        <div className="footer-sidebar-menu">
          <ul>
            <li><Button className="link">Site</Button></li>
            <li><Button className="link">Política de Privacidade</Button></li>
            <li><Button className="link">Termos e Condições</Button></li>
            <li><Button className="link">Perguntas Frequentes</Button></li>
            <li><Button className="link">Seja um Parceiro</Button></li>
            <li><Button className="link">Indique</Button></li>
            <li><Button className="link">Feedback</Button></li>
            <li><Button className="link">Cookies</Button></li>
          </ul>
        </div>

        <div className="content-sidebar-footer">
          <p className="text-bold text-dark-green mb-4">Siga a Abundance nas Redes Sociais</p>

          <ul className="mb-8">
            <li><a href="#"><img src={FacebookIcon} alt="" /></a></li>
            <li><a href="#"><img src={InstagramIcon} alt="" /></a></li>
            <li><a href="#"><img src={LinkedingIcon} alt="" /></a></li>
            <li><a href="#"><img src={SpotfyIcon} alt="" /></a></li>
          </ul>

          <p className="caption text-lightGray mb-6">Vr. 0.1 © Abundance Brasil 2021</p>

          <div className="logos mb-4">
            <img src={logo01} alt="Logo" />
            <img src={logo02} alt="Logo" />
            <img src={logo03} alt="Logo" />
            <img src={logo04} alt="Logo" />
          </div>

          <p className="text-bold text-small text-lightGray">Apoiamos os principais padrões de<br />sustentabilidade e diretrizes para relatórios ESG </p>
        </div>


      </div>
    </div>
  );
};
export default SidebarInt;
