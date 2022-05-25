import React from "react";
import "./style.scss";
import NeedHelp from "../../components/NeedHelp";
import "../../assets/scss/common/flexbox.scss";
import TitleHeaderAction from "../../components/Titles/TitleHeaderAction";
import CardInformation from "../../components/Cards/CardInformation";
import Cloud from "../../assets/img/cloud-card.svg";
import Tree from "../../assets/img/Trees-card.svg";
import Union from "../../assets/img/Union-card.svg";
import CardAnuncio from "../../components/Cards/CardAnuncio";
import Button from "../../components/Button";
import bannerAnuncio from "../../assets/img/banner-anuncio.jpg";
import FirstTabe from "../../components/AllTabes/FirstTabe";
import TitleSubtitle from "../../components/Titles/TitleSubtitle";
import CardArtigo from "../../components/Cards/CardArtigo";
import { Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton";

const Home = () => {
  return (
    <>
      <div className="content-side _interno container-fluid fluid-header-actions">
        <TitleHeaderAction title="Início" />
      </div>
      <div className="container-fluid margin-fluid-0">
        <div className="spacing-mobile-interno home-style ">
          <div className="main-title02 flex justify-space-between ">
            <div className="main-title ">
              <h5 className="subheading text-semibold text-dark-green mb-1">
                Olá, Nome do cliente
              </h5>
              <p className="p-01 text-lightGray">
                Ajude a salvar o planeta hoje!
              </p>
            </div>
            <NeedHelp />
          </div>
          <div className="card-anuncio-home">
            <CardAnuncio backgroundImage={bannerAnuncio}>
              <h5 className="text-white uppercase text-normal mb-2">
                A restauração ambiental <br></br> nosso país depende de você
              </h5>
              <p className="text-white text-light">
                Invista em restauração ambiental comprando árvores e gerando
                abundância
              </p>
              <LinkButton to="/minha-carteira" className="button-card-home text-white p-02 btn">
                Comprar árvores
              </LinkButton>
            </CardAnuncio>
          </div>
          <section>
            <div className="row style-card">
              <div className="xs-12 mb-8 ">
                <CardInformation
                  title="Minhas Árvores"
                  paragraph="Abundance Tokens"
                  img={Tree}
                  subtitle="0 "
                  paragraph02="Você ainda não possui árvores"
                />
              </div>

              <div className="xs-12 md-6 ">
                <CardInformation
                  title="Meu Impacto"
                  paragraph="CO2"
                  img={Cloud}
                  subtitle="0"
                  paragraph02="Você não absorveu seu impacto ambientl"
                />
              </div>
              <div className="xs-12 md-6 ">
                <CardInformation
                  title="Mercado"
                  paragraph="Variação do dia para 1 Token"
                  img={Union}
                  subtitle="20 USD"
                  paragraph02="R$ 1.124,30"
                  budget="00,0%"
                />
              </div>
            </div>
          </section>

          <FirstTabe className="firstTabe" />

          <div className="flex justify-space-between align-center subtitle-home">
            <TitleSubtitle className="heading-06" title="Artigos recentes" />
              <Link to="/artigos" className="p-01 text-purple">Ver todos</Link>
          </div>
          <div className="row mb-18">
            <div className="md-4">
              <CardArtigo></CardArtigo>
            </div>
            <div className="md-4">
              <CardArtigo></CardArtigo>
            </div>
            <div className="md-4 ">
              <CardArtigo></CardArtigo>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
