import React, {useState} from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";
import Perfil from "../../assets/img/Avatars.png";
import SearchMain from "../SearchMain";
import LogoWhite from "../../assets/img/Logo-white-mobile.svg";
import SearchLanguage from "../SearchLanguage";
import { useDispatch, useSelector } from "react-redux";
import BandeiraBrasil from "../../assets/img/brasil-bandeira.svg";
import DrawerVA from "../SliderModalVA";
import FormPerguntasFrequentes from "../../containers/DrawerInformations/FormPerguntasFrequentes";
import LinkButton from "../LinkButton";
import LinkSpam from "../LinkSpam";

const MainHeader = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state: any) => state.user.data)

  let location = useLocation();

  const changeMenu = () => {
    dispatch({ type: "MENU_TOGGLE"});
  }

  const changeMenuProfile = () => {
    dispatch({ type: "MENU_TOGGLE_PROFILE"});
  }

  const [openDrawerPerguntas, setOpenDrawerPerguntas] = useState(false);

  const handleOpenDrawerPerguntas = () => {
    setOpenDrawerPerguntas(true);
  };

  

  return (
    <header className="text-lightGray _interno">
      <SearchMain className="hidden-mobile" />
      <div className="buttonLogoHeader alinhar">
        <button style={{cursor: "pointer"}} onClick={() => changeMenu()} className="material-icons">
          menu
        </button>

        <div className="logo-mobile mt-1">
          <img src={LogoWhite} alt="" />
        </div>
      </div>
      <div className="InfoHeader alinhar">
        {/* <SearchLanguage img={BandeiraBrasil} /> */}

        <a onClick={handleOpenDrawerPerguntas} className="pointer-h">
          <span className="material-icons text-lightGray alinhar mr-4-5">
            help_outline
          </span>
        </a>

        <LinkSpam to="/notificacoes" className="pointer-h">
          <span className="material-icons mr-4-5 color-icons">notifications</span>
        </LinkSpam>

        <div className="perfilHeader alinhar">
          {dataUser && <p>Olá, {dataUser.name}!</p>}
          <img src={Perfil} alt="" style={{cursor: "pointer"}} onClick={() => changeMenuProfile()} />
        </div>
      </div>
      <DrawerVA opened={openDrawerPerguntas} onCLose={() => setOpenDrawerPerguntas(false)} title="Perguntas Frequentes">
        <FormPerguntasFrequentes />
      </DrawerVA>
    </header>
  );
};
export default MainHeader;
