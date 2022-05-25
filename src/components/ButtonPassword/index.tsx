import React from "react";

interface PropsButton {
  id?: string;
  disabled?: boolean;
  className?: string;
  type?: any;
  children?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonPassword(props: PropsButton) {
  return (
    <button 
      type={props.type}
      id={props.id}
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.children}
      <span className="material-icons icon-pass">
        visibility_off
      </span>
    </button>
  );
}
