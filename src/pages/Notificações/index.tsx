import React from "react";
import "./style.scss";
import Alert from "../../components/Alert";
import TitleHeaderActionIcon from "../../components/Titles/TitleHeaderActionIcon";
import Loader from "../../components/Loader";

const Notificacoes = () => {
  return (
    <div className="container-fluid  container-not content-side ">
      <TitleHeaderActionIcon title="Notificações" />
      <Alert
        type="error">
        Alert Error
      </Alert>
      <Alert
        type="success">
        Alert Success
      </Alert>
      <Alert
        type="warning">
        Alert Warning
      </Alert>
    </div>
  );
};
export default Notificacoes;
