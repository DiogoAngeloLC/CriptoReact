import React from "react";
import { useHistory } from "react-router-dom";
import logoWhite from "../../assets/img/brand-vertical-white.png";
import logo from "../../assets/img/brand.png";
import arrow from "../../assets/img/arrow_white.png";
import arrowBlack from "../../assets/img/arrow_back.png";
import Button from "../Button";
import "./style.scss";

const Sidebar = () => {
  const history = useHistory();
  return(
      <div className='sidebar-main'>
        <div className="arrow-action">
        <span onClick={() => history.goBack()} className="material-icons arrow-side md-18">arrow_back</span>
        </div>
        <div className='content-sidebar'>
          <img className='logo-desktop' src={logoWhite} alt="Logo" />
          <img className='logo-mobile' src={logo} alt="Logo" />
          <p className='content-upper'>ESG TECH</p>
          <p className='content-text container-siderbar-text uppercase'>Performance a partir de propósitos ambientais, sociais e de governança</p>
        </div>
        <div className='footer-sidebar'>
          <p>dúvidas sobre o portal esg?</p>
          <Button className="white-transparent sm btn">Agende uma apresentação</Button>
        </div>
      </div>
  );
}
export default Sidebar
