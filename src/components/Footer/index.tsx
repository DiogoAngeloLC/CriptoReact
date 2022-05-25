import React from "react";
import logo01 from "../../assets/img/sdg-wheel-smaller.png";
import logo02 from "../../assets/img/IIRC_Logo_RGB-2-724x257-1.png";
import logo03 from "../../assets/img/PAGINA-INICIAL-SITE-DEEP-07-e1626874934363.png";
import logo04 from "../../assets/img/PAGINA-INICIAL-SITE-DEEP-05.png";
import "./style.scss";


const Footer = () => {
  return(
      <div className='footer'>
        <div className="logos">
          <img src={logo01} alt="Logo" />
          <img src={logo02} alt="Logo" />
          <img src={logo03} alt="Logo" />
          <img src={logo04} alt="Logo" />
        </div>
        <p>Apoiamos os principais padrões de sustentabilidade e diretrizes para relatórios ESG</p>
      </div>
  );
}
export default Footer
