import CardArtigo from "../../components/Cards/CardArtigo";
import FormAlterarSenha from "../../containers/FormAlterarSenha";
import "./style.scss";
import Floresta from "../../assets/img/Floresta.png";
import TitleHeaderActionIcon from "../../components/Titles/TitleHeaderActionIcon";
import TitleSubtitle from "../../components/Titles/TitleSubtitle";
import Button from "../../components/Button";
import Arvore from "../../assets/img/Icons9.png";
import Alvo from "../../assets/img/Icons10.png";
import Educacao from "../../assets/img/Education.png";
import ESG from "../../assets/img/ESG.png";
import Lifestyle from "../../assets/img/Lifestyle.png";
import One from "../../assets/img/1.png";
import Two from "../../assets/img/2.png";
import Three from "../../assets/img/3.png";
import Four from "../../assets/img/4.png";
import Five from "../../assets/img/5.png";
import Video from "../../assets/img/Video.png";
import SearchCentral from "../../components/SearchCentral";

const CentralAjuda = () => {
  return (
    <div className="mt-20 container-ctlajuda container-fluid content-side _interno fluid-header-actions responsive">
      <div className="row responsive">
        <div className="xs-12 mb-24 row responsive">
          <TitleHeaderActionIcon title="CENTRAL DE AJUDA" />
          <div className="flexdiv-cont xs-12 mb-24 div-inline">
            <div className="md-4 sidebar-central">
              <div className="div-pesquisa">
                <SearchCentral />
              </div>
              <h3 className="h3-text">Em destaque</h3>
              <div className="btn-returns btn-active">
                <img src={Arvore} />
                <h4 className="espaco-l active-txt">Abundance Token</h4>
              </div>
              <div className="btn-returns">
                <img src={Alvo} />
                <h4 className="espaco-l">Mindset de Abundância</h4>
              </div>
              <div className="btn-returns">
                <img src={Educacao} />
                <h4 className="espaco-l">Tutoriais</h4>
              </div>
              <div className="btn-returns">
                <img src={ESG} />
                <h4 className="espaco-l">ESG Flow</h4>
              </div>
              <div className="btn-returns">
                <img src={Lifestyle} />
                <h4 className="espaco-l">Lifestyle Abundante</h4>
              </div>
            </div>
            <div className="md-8 page-central">
              <h1 className="h1-central">Abundance Token</h1>
              <p className="p-text width45">Feugiat in ante metus dictum at tempor commodo ullamcorper. Risus quis varius quam quisque. Fames ac turpis egestas integer eget aliquet nibh praesent.</p>
              <div className="div-warn flexdiv">
                <span className="material-icons icon-blue">
                  info
                </span>
                <p className="warn-txt"><b>Tip:</b> Feugiat in ante metus dictum at tempor commodo ullamcorper.</p>
              </div>
              <p className="p-text width45">Feugiat in ante metus dictum at tempor commodo ullamcorper. Risus quis varius quam quisque. Fames ac turpis egestas integer eget aliquet nibh praesent.</p>
              <div className="select-tab flexdiv">
                <div className="tab">
                  <p className="tab-text">Tab 1</p>
                </div>
                <div className="tab tab-margin">
                  <p className="tab-text">Tab 2</p>
                </div>
                <div className="tab tab-margin">
                  <p className="tab-text active-tab">Tab 3</p>
                </div>
              </div>
              <div className="tab-div flexdiv">
                <img src={One} />
                <p className="p-text marginleft">Feugiat in ante metus dictum at tempor commodo ullamcorper. Risus quis varius quam quisque. Fames ac turpis egestas. integer eget aliquet nibh praesent.</p>
              </div>
              <div className="tab-div flexdiv">
                <img src={Two} />
                <p className="p-text marginleft">Feugiat in ante metus dictum at tempor commodo ullamcorper. Risus quis varius quam quisque. Fames ac turpis egestas. integer eget aliquet nibh praesent.</p>
              </div>
              <div className="tab-div flexdiv">
                <img src={Three} />
                <p className="p-text marginleft">Feugiat in ante metus dictum at tempor commodo ullamcorper. Risus quis varius quam quisque. Fames ac turpis egestas. integer eget aliquet nibh praesent.</p>
              </div>
              <div className="tab-div flexdiv">
                <img src={Four} />
                <p className="p-text marginleft">Feugiat in ante metus dictum at tempor commodo ullamcorper. Risus quis varius quam quisque. Fames ac turpis egestas. integer eget aliquet nibh praesent.</p>
              </div>
              <div className="tab-div flexdiv">
                <img src={Five} />
                <p className="p-text marginleft">Feugiat in ante metus dictum at tempor commodo ullamcorper. Risus quis varius quam quisque. Fames ac turpis egestas. integer eget aliquet nibh praesent.</p>
              </div>
              <div className="video-content">
                <img src={Video} className="videosm width45" />
              </div>
              <h1 className="h1-central margintop">O artigo foi útil?</h1>
              <div className="flexdiv">
                <Button type="submit" className="sm btn">
                  Sim
                </Button>
                <Button type="submit" className="sm divnao btn">
                  Não
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralAjuda;
