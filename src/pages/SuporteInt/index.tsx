import "./style.scss";
import TitleHeaderActionIcon from "../../components/Titles/TitleHeaderActionIcon";
import TitleSubtitle from "../../components/Titles/TitleSubtitle";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import MockData from "../SuporteChamado/mockData.json"
import ModalConfirmacao from "../../components/ModalConfirmacao";
import ModalChamado from "../../components/ModalChamado";
import ModalRemove from "../../components/ModalRemove";
const SuporteInt = () => {
  const history = useHistory()
  const { id }: any = useParams();
  const [dataSuporte, setDataSuporte]: any = useState({})
  

  useEffect(() => {
    setDataSuporte(MockData.filter(item => item.id === id)[0])
  }, [])
  const [modalOpened, setModalOpened] = useState(false);
  const [modalOpenedR, setModalOpenedR] = useState(false);

  return (
    <div className="mt-20 container-artint container-fluid content-side _interno fluid-header-actions">
      <div className="row">
        <div className="xs-12 mb-24">
          <TitleHeaderActionIcon title="Suporte" />
          <div className="title-cham">
            <TitleSubtitle title="Chamados" />
          </div>
          <div className="title-cham">
            <h2>Assunto</h2>
            <p>{dataSuporte.assunto}</p>
          </div>
          <div className="title-cham">
            <h2>Status</h2>
            <p className={`${dataSuporte.status === "ABERTO" ? 'text-red' : 'text-green'}`}>
              {dataSuporte.status}
            </p>
          </div>
          <div className="title-cham">
            <h2>Mensagem</h2>
            <p className="txt-area">{dataSuporte.message}</p>
          </div>
          <div className="colun-btn">

            <div className="btn-return" onClick={() => history.push("/suporte")}>
              <span className="material-icons color-icon">arrow_back</span>
              <h4 className="espaco-l">Retornar para lista de suporte</h4>
            </div>

            <div className="btn-return" onClick={() => setModalOpenedR(true)}>
              <h4 className="espaco-r">Remover chamado</h4>
              <span className="material-icons color-icon">delete</span>
            </div>
            <Button 
            type="submit" 
            className="sm btn-left btn" 
            onClick={() => setModalOpened(true)}>
              Finalizar chamado
              <span className="material-icons icon">
              check
              </span>
            </Button>
            <ModalChamado
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
            />
            <ModalRemove
            opened={modalOpenedR}
            onClose={() => setModalOpenedR(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuporteInt;
