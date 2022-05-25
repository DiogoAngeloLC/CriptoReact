import React from "react";
import "./style.scss";
interface PropsAlert {
  type: string;
  children?: any;
}
const Alert = (props: PropsAlert) => {
  return (
    <div className="notificacoes">
        <div className="flexdivalert">
        <span className={`material-icons ${props.type}`}>
          {props.type === "error" ? "error_outline" :
            props.type === "warning" ? "warning_amber" :
              props.type === "success" ? "nature_people" : ""}
        </span>
        <h2 className={`text ${props.type}`}>{props.children}</h2>
        </div>
        <span className="material-icons colorbl">
          radio_button_checked
        </span>
      </div>
  );
}
export default Alert
