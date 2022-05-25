import React from "react";
import "./style.scss";

const NeedHelp = () => {
  return (
    <div className="need-help alinhar">
    <p>Precisa de ajuda?</p>
    <div className="actions">
      <a href="#"><span className="material-icons">chat</span></a>
      <a href="#"><span className="material-icons">call</span></a>
      <a href="#"><span className="material-icons">mail_outline</span></a>
    </div>
  </div>
  );
  }
export default NeedHelp
