import React from "react";
import "./style.scss";

const Warning = () => {
  return (
    <div className="notificacoes">
      <div className="alert-content">
        <span className="material-icons color-icon-w">
          warning_amber
        </span>
        <h2 className="warning">Warning notification</h2>
      </div>
    </div>
  );
}
export default Warning
