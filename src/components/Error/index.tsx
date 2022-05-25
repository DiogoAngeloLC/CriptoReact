import React from "react";
import "./style.scss";

const Error = () => {
  return (
    <div className="notificacoes">
      <div className="alert-content">
        <span className="material-icons color-icon">
          error_outline
        </span>
        <h2 className="error">Error notification</h2>
      </div>
    </div>
  );
}
export default Error
