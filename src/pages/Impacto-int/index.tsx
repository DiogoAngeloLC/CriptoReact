import CardArtigo from "../../components/Cards/CardArtigo";
import FormAlterarSenha from "../../containers/FormAlterarSenha";
import "./style.scss";
import TitleHeaderActionIcon from "../../components/Titles/TitleHeaderActionIcon";
import Arvore from "../../assets/img/Icons.png";
import Absorcao from "../../assets/img/absorcao.png";
import Button from "../../components/Button";
import TitleSubtitle from "../../components/Titles/TitleSubtitle";
import Grafico1 from "../../assets/img/Group 499.png";
import Grafico2 from "../../assets/img/Group 500.png";
import Grafico3 from "../../assets/img/Group 501.png";
import Grafico4 from "../../assets/img/Group 502.png";
import Grafico5 from "../../assets/img/Group 503.png";
import Grafico6 from "../../assets/img/Group 504.png";
import Grafico7 from "../../assets/img/Charts.png";

const ImpactoInt = () => {
  return (
    <div className="content-impacto container-fluid content-side _interno fluid-header-actions">
      <div className="row mb-24">
        <div className="xs-12">
          <TitleHeaderActionIcon title="Impacto" />
        </div>
        <div className="md-4 mb-12">
          <div className="card-impacto">
            <div className="superior-card">
              <div className="title-flex">
                <h2>Minhas árvores</h2>
                <img src={Arvore} />
              </div>
              <h6>10</h6>
              <h4>Abundance Tokens</h4>
            </div>
            <div className="div-btn">
              <Button className="button-card btn">Comprar árvores</Button>
            </div>
          </div>
        </div>

        <div className="md-4 mb-12">
          <div className="card-impacto">
            <div className="superior-card">
              <div className="title-flex">
                <h2>Minha absorção</h2>
                <img src={Absorcao} />
              </div>
              <h6>0,7</h6>
              <h4>Em toneladas de CO2 desde Dec. 21</h4>
            </div>
            <div className="div-btn">
              <Button className="button-card btn">Relatório de absorção</Button>
            </div>
          </div>
        </div>

        <div className="md-4 mb-12">
          <div className="card-impacto">
            <div className="superior-card">
              <div className="title-flex">
                <h2>Absorção prevista</h2>
                <img src={Absorcao} />
              </div>
              <h6>7</h6>
              <h4>Em toneladas de CO2 até 2080</h4>
            </div>
            <div className="div-btn">
              <Button className="button-card btn">Relatório de absorção</Button>
            </div>
          </div>
        </div>
        <div className="xs-12">
          <img src={Grafico7} alt="" style={{ width: "100%" }} />
        </div>

      </div>
    </div>
  );
};

export default ImpactoInt;
