import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./style.scss";

interface PropsValidation {
  number?: string;
  opened: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalValidation = (props: PropsValidation) => {
  return (
    props.opened ? (
      <div className="modal-container">
        <div className="modal-validation">
          <button
            className="material-icons button-close text-lightGray"
            onClick={props.onClose}
          >
            close
          </button>

          <div className="validation-componentes">
            <div className="title-modal-validation mb-4">
              <h5 className="m-0 heading-05  text-semibold text-dark-green">
                Verificação de segurança
              </h5>
              <p className="text-lightGray ">
                Para proteger sua conta, conclua a seguinte verificação.
              </p>
            </div>

            <div className="campo-verificacao mb-4">
              <p className=" mb-2">Verificação por telefone</p>
              <div className="pass-validation">
                <Input className="material-icons" type="password"></Input>
              </div>
              <p className="text-lightGray mb-4">
                Digite o código de dígitos enviado para{" "}
                <span>{props.number}</span>{" "}
              </p>
              <a className="text-medium-green p-01 text-bold" href="">
                Reenviar código
              </a>
            </div>

            <Button className="mb-4 p-03 btn" disabled>
              Enviar
            </Button>

            <a className="text-medium-green p-01 text-bold" href="#">
              A verificação de segurança não está disponível?
            </a>
          </div>
        </div>
      </div>
    ) : null
  );
};
export default ModalValidation;
