import React, {useState} from "react";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import Input from "../Input";
import "./style.scss";
import warning from "../../assets/img/warning.png";


interface PropsValidation {
  number?: string;
  opened: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalConfirmacao = (props: PropsValidation) => {
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);

  const changeModal = () => {
    dispatch({ type: "MODAL_TOGGLE" });
  }
  return (
    props.opened ? (
      <div className="modal-container">
        <div className="modal-confirmacao">

          <div className="validation-componentes">
            <div className="title-modal-validation mb-4">
              <img src={warning} className="align-center"/>
              <h5 className="heading-05  text-semibold text-dark-green align-center size-h5">
                Você será redirecionado para o sistema de pagamentos
              </h5>
              <p className="text-lightGray align-center">
                Siga as instruções de preferência para finalizar o processo.
              </p>
              
          <Button className="btn btn-1 align-center">
            Continuar
          </Button>

          <Button className="btn btn-1 gray-transparent" onClick={props.onClose}>
            Sair
          </Button>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};
export default ModalConfirmacao;
