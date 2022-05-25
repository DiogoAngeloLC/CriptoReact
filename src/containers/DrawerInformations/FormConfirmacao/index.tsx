import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import "./style.scss";
import Verdeazul from "../../../assets/img/Verdeazul.png";
import Video from "../../../assets/img/VideoVA.png";
import Gallery from "../../../assets/img/GalleryVA.png";
import Satellite from "../../../assets/img/Satellite.png";
import Milestones from "../../../assets/img/Milestones.png";
import LogoVA from "../../../assets/img/logoVA.png";
import TabsVA from "../../../components/AllTabes/TabsVA";
import Oval from "../../../assets/img/Oval.png";
import Boleto from "../../../assets/img/Boleto.png";
import Metodopagamento from "../../../assets/img/Metodo-pagamento.png";
import Stripe from "../../../assets/img/Stripe.png";
import IBlue from "../../../assets/img/Iconblue.png";
import IconBRL from "../../../assets/img/IconBRL.png";
import ModalConfirmacao from "../../../components/ModalConfirmacao";

const FormConfirmacao = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="align-modal modalconfirmacao">
      <div className="div-flex">
        <img src={LogoVA} className="margin-img" />
        <div>
        <p className="title-ptxt">FLORESTA DA SUA ÁRVORE</p>
        <h2 className="margin-none">VERDEAZUL</h2>
        </div>
      </div>
      <div className="div-flex div-info divprofile div-top">
        <div className="div-flex">
          <img src={IBlue} className="margin-img"/>
          <h2 className="lite p-margin txt-infos">Abundance tokens</h2>
        </div>
        <h3 className="p-margin ">10</h3>
      </div>
      <div className="div-flex margin-va div-info div-bot">
        <div className="div-flex">
          <img src={IconBRL} className="margin-img"/>
          <h2 className="lite p-margin txt-infos">Valor total</h2>
        </div>
        <h3 className="p-margin txt-infos">R$ 1.124,30</h3>
      </div>
      <h2 className="lite">Selecione a forma de pagamento</h2>
      <div className="div-card-va margin-va div-flex">
        <div className="div-flex">
          <img src={Boleto} className="margin-img" />
          <p className="p-margin txt-infos">Boleto</p>
        </div>
        <Button className="button-card btn" onClick={() => setModalOpened(true)}>Selecionar</Button>
      </div>
      <div className="div-card-va margin-va div-flex">
        <div className="div-flex">
          <img src={Metodopagamento} className="margin-img" />
          <p className="p-margin">PIX</p>
        </div>
        <Button className="button-card btn" onClick={() => setModalOpened(true)}>Selecionar</Button>
      </div>
      <div className="div-card-va margin-va div-flex">
        <div className="div-flex">
          <img src={Stripe} className="margin-img" />
          <p className="p-margin">Stripe</p>
        </div>
        <Button className="button-card btn" onClick={() => setModalOpened(true)}>Selecionar</Button>
      </div>
      <div className="div-warn div-flex margin-va">
        <span className="material-icons icon-blue">
          info
        </span>
        <p className="warn-txt"><b>Os ativos de carbono visam compensar emissões de gases de efeito estufa.</b> Este é seu objetivo final. Os ativos de carbono transacionados pela MOSS não devem ser entendidos como uma moeda digital ou título de investimento. O uso dos ativos de carbono transacionados pela Abundance Brasil com o objetivo de investimento é de responsabilidade do usuário.</p>
      </div>
      <ModalConfirmacao
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </div>
  );
};

export default FormConfirmacao;
