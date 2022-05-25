import React from "react";
import "./style.scss";
interface PropsAlert {
  type: string;
  children?: any;
  opened: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
const AlertModal = (props: PropsAlert) => {
  return (
    <div className={`notificacoesModal ${props.type} ${props.opened ? "active" : ""}`}>

        <div className="flex">
        <span className="material-icons text-white mr-2">
          {props.type === "error" ? "error_outline" :
            props.type === "warning" ? "report_problem" :
              props.type === "success" ? "check"  : ""}
        </span>
        <h2 className='p-01 text-white text-normal m-0 text-modal'>{props.children}</h2>
        </div>
        <span onClick={props.onClose} className="material-icons text-white close-alert">
           close
        </span>
      </div>
  );
}
export default AlertModal
