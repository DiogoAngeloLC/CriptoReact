import Button from "../../../components/Button";
import "./style.scss";
import Verdeazul from "../../../assets/img/Verdeazul.png";
import Video from "../../../assets/img/VideoVA.png";
import Gallery from "../../../assets/img/Gallery.png";
import Satellite from "../../../assets/img/Satellite.png";
import Bar1 from "../../../assets/img/Bar.png";
import Frame715 from "../../../assets/img/Frame 715.png";
import TabsVA from "../../../components/AllTabes/TabsVA";
import Oval from "../../../assets/img/Oval.png";
import ArrowN from "../../../assets/img/arrow_forward.png";
import ArrowP from "../../../assets/img/arrow_back.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';
import React, { Component } from 'react';



const FormVerdeAzul = () => {
  return (
    <div className="align-modal modalverdeazul">
      <img src={Verdeazul} className="width-modal" />
      <h2>VERDEAZUL</h2>
      <p>
        <b>
          O Verdeazul é um case de sucesso com o propósito de esverdear o Brasil
          através do reflorestamento.
        </b>
        <br></br> Contribua com a melhoria do meio ambiente: invista em tokens
        que correspondem a uma árvore e acompanhe o desenvolvimento dela..
      </p>
      <iframe
        width="100%"
        height="420px"
        src="https://www.youtube.com/embed/_2c8YZwzaMk"
        title="YouTube video player"
        frameBorder={0}
        style={{ border: 0, borderRadius: "12px" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 className="margin-va">1 milhão de árvores</h3>
      <p>
        Comprometimento rumo à elevar e acelerar o que o Brasil tem de melhor:
        sustentabilidade e abundância ambiental.
        <br></br>
        <br></br>Uma árvore, em média, sequestra 1 tonelada de C02 no seu ciclo
        de vida de 40 anos. Assim, Abundance Tokens foram emitidos para
        preservar cada uma dessas árvores. Invista no reflorestamento e na
        preservação do meio ambiente ao adquirir o seu token e conseguir
        acompanhar o desenvolvimento da sua árvore.
      </p>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button onClick={clickHandler} 
            className="arrow prev">
              <img
                src={ArrowP} />
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <button onClick={clickHandler} className="arrow next">
              <img
              
                src={ArrowN} />
            </button>
          )
        }
      >
        <div>
          <img src={Gallery} className="width-modal" />
        </div>
        <div>
          <img src={Gallery} className="width-modal" />
        </div>
        <div>
          <img src={Gallery} className="width-modal" />
        </div>
      </Carousel>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29125.698532084825!2d-46.730955050000006!3d-24.146739200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1643802521752!5m2!1spt-BR!2sbr"
        width="100%"
        height="420"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen={false}
        loading="lazy"
        className="mt-4 margin-va"
      ></iframe>
      <div className="div-card-va margin-va margin-bt-page">
        <div className="flex-point">
          <h2>Etapas</h2>
          <h3 className="nmb-title">4224</h3>
        </div>
        <img src={Bar1} className="width-modal margin-va" />
        <img src={Bar1} className="width-modal margin-va" />
        <img src={Bar1} className="width-modal margin-va" />
        <img src={Bar1} className="width-modal margin-va" />
      </div>
      <div className="div-card-va margin-va margin-bt-page">
        <div className="flex-point">
          <h2>Linha do tempo</h2>
        </div>
        <div className="flex-point">
          <p className="p-nmb">0</p>
          <p className="p-nmb">100</p>
        </div>
        <img src={Frame715} className="width-modal"></img>
      </div>
      <div className="div-card-va margin-va">
        <h2>Atuação ESG</h2>
        <TabsVA />
      </div>
      <div className="div-card-va margin-va margin-bt-page">
        <h2>Consultor responsável</h2>
        <div className="div-flex divprofile">
          <img src={Oval} />
          <div className="title-profile">
            <h4 className="p-margin">Anderson Souza</h4>
            <p className="p-margin">Business & Development</p>
          </div>
        </div>
        <div className="div-flex margin-va">
          <span className="material-icons color-icon">alternate_email</span>
          <p className="p-margin">anderson@abundancebrasil.com</p>
        </div>
        <div className="div-flex space-info">
          <span className="material-icons color-icon">whatsapp</span>
          <p className="p-margin">+55 (31) 9 9175-7021</p>
        </div>
      </div>
    </div>
  );
};

export default FormVerdeAzul;
