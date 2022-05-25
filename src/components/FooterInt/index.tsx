import React, { useEffect, useState } from "react";
import logo01 from "../../assets/img/sdg-wheel-smaller.png";
import logo02 from "../../assets/img/IIRC_Logo_RGB-2-724x257-1.png";
import logo03 from "../../assets/img/PAGINA-INICIAL-SITE-DEEP-07-e1626874934363.png";
import logo04 from "../../assets/img/PAGINA-INICIAL-SITE-DEEP-05.png";
import "./style.scss";
import FormPoliticaDePrivacidade from "../../containers/DrawerInformations/FormPoliticaDePrivacidade";
import FormTemosECondicoes from "../../containers/DrawerInformations/FormTermosECondicoes";
import FormPerguntasFrequentes from "../../containers/DrawerInformations/FormPerguntasFrequentes";
import FormSejaUmParceiro from "../../containers/DrawerInformations/FormSejaUmParceiro";
import FormIndique from "../../containers/DrawerInformations/FormIndique";
import FormFeedback from "../../containers/DrawerInformations/FormFeedback";
import FormCookies from "../../containers/DrawerInformations/FormCookies";
import DrawerVA from "../SliderModalVA";
import FormConfirmacao from "../../containers/DrawerInformations/FormConfirmacao";


const FooterInt = () => {
  const [openDrawerTermos, setOpenDrawerTermos] = useState(false);
  const [openDrawerPrivacidade, setOpenDrawerPrivacidade] = useState(false);
  const [openDrawerPerguntas, setOpenDrawerPerguntas] = useState(false);
  const [openDrawerParceiro, setOpenDrawerParceiro] = useState(false);
  const [openDrawerIndique, setOpenDrawerIndique] = useState(false);
  const [openDrawerFeedback, setOpenDrawerFeedback] = useState(false);
  const [openDrawerCookies, setOpenDrawerCookies] = useState(false);

  const handleOpenDrawerTermos = () => {
    setOpenDrawerTermos(true);
  };

  const handleOpenDrawerPrivacidade = () => {
    setOpenDrawerPrivacidade(true);
  };

  const handleOpenDrawerPerguntas = () => {
    setOpenDrawerPerguntas(true);
  };

  const handleOpenDrawerParceiro = () => {
    setOpenDrawerParceiro(true);
  };

  const handleOpenDrawerIndique = () => {
    setOpenDrawerIndique(true);
  };

  const handleOpenDrawerFeedback = () => {
    setOpenDrawerFeedback(true);
  };

  const handleOpenDrawerCookies = () => {
    setOpenDrawerCookies(true);
  };

  useEffect(() => {
    if (openDrawerTermos || openDrawerPrivacidade || openDrawerPerguntas || openDrawerParceiro || openDrawerIndique || openDrawerFeedback || openDrawerCookies) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openDrawerTermos, openDrawerPrivacidade, openDrawerPerguntas, openDrawerParceiro, openDrawerFeedback, openDrawerIndique, openDrawerCookies]);

  return (
    <div>
      <div className='footerint'>
        <div className="logos">
          <img src={logo01} alt="Logo" />
          <img src={logo02} alt="Logo" />
          <img src={logo03} alt="Logo" />
          <img src={logo04} alt="Logo" />
        </div>
        <div className="menus">
          <a href="https://abundancebrasil.com/" target="_blank"><p>Site Abundance Brasil</p></a>
          <p onClick={handleOpenDrawerPrivacidade} >Política de Privacidade</p>
          <p onClick={handleOpenDrawerTermos} >Termos e Condições</p>
          <p onClick={handleOpenDrawerPerguntas}>Perguntas Frequentes</p>
          <p onClick={handleOpenDrawerParceiro}>Seja um Pareiro</p>
          <p onClick={handleOpenDrawerIndique}>Indique</p>
          <p onClick={handleOpenDrawerFeedback}>Feedback</p>
          <p onClick={handleOpenDrawerCookies}>Cookies</p>
        </div>
      </div>
      <div className="footerint">
        <div className="texto">
          <p>Apoiamos os principais padrões de sustentabilidade e diretrizes para relatórios ESG</p>
        </div>
        <div className="marca">
          <p>Vr. 0.1 © Abundance Brasil 2021</p>
        </div>
      </div>

      <DrawerVA opened={openDrawerPrivacidade} onCLose={() => setOpenDrawerPrivacidade(false)} title="Política de Privacidade">
        <FormPoliticaDePrivacidade />
      </DrawerVA>

      <DrawerVA opened={openDrawerTermos} onCLose={() => setOpenDrawerTermos(false)} title="Termos e Condições">
        <FormTemosECondicoes />
      </DrawerVA>

      <DrawerVA opened={openDrawerPerguntas} onCLose={() => setOpenDrawerPerguntas(false)} title="Perguntas Frequentes">
        <FormPerguntasFrequentes />
      </DrawerVA>

      <DrawerVA opened={openDrawerParceiro} onCLose={() => setOpenDrawerParceiro(false)} title="Seja Um Parceiro">
        <FormSejaUmParceiro />
      </DrawerVA>

      <DrawerVA opened={openDrawerIndique} onCLose={() => setOpenDrawerIndique(false)} title="Indique" subTitle=" a abundance brasil">
        <FormIndique />
      </DrawerVA>

      <DrawerVA opened={openDrawerFeedback} onCLose={() => setOpenDrawerFeedback(false)} title="Feedback">
        <FormFeedback />
      </DrawerVA>

      <DrawerVA opened={openDrawerCookies} onCLose={() => setOpenDrawerCookies(false)} title="Cookies">
        <FormCookies />
      </DrawerVA>
    </div>
  );
}
export default FooterInt
