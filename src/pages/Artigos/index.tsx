import CardArtigo from "../../components/Cards/CardArtigo";
import FormAlterarSenha from "../../containers/FormAlterarSenha";
import "./style.scss";
import TitleHeaderActionIcon from "../../components/Titles/TitleHeaderActionIcon";

const Artigos = () => {
  return (
    <div className="content-artigo container-fluid">
      <div className="row mb-24">
        <div className="xs-12">
          <TitleHeaderActionIcon title="Artigos" />
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
        <div className="md-4 mb-8">
          <CardArtigo></CardArtigo>
        </div>
      </div>
    </div>
  );
};

export default Artigos;
