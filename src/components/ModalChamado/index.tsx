import React, { useState } from "react";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import Input from "../Input";
import "./style.scss";
import confirm from "../../assets/img/confirm.png";


interface PropsValidation {
  number?: string;
  opened: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalChamado = (props: PropsValidation) => {
  const dispatch = useDispatch();

  const changeModal = () => {
    dispatch({ type: "MODAL_TOGGLE" });
  }
  return (
    props.opened ? (
      <div className="modal-containerR">
        <div className="modal-confirmacao">
            <div className="title-modal-validation mb-4">
              <img src={confirm} className="align-center" />
              <h5 className="heading-05  text-semibold text-dark-green align-center size-h5">
                O chamado será finalizado.
              </h5>
              <Button className="btn btn-1 align-center">
                Continuar
              </Button>
              <Button className="btn btn-1 gray-transparent" onClick={props.onClose}>
                Cancelar
              </Button>
          </div>
        </div>
      </div>
    ) : null
  );
};
export default ModalChamado;