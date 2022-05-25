import React from "react";
import "./style.scss";

interface PropsInput {
  id?: string;
  name?: string;
  error?: string;
  className?: string;
  register?: any;
  label?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox(props: PropsInput) {
  return (
    <div className="containerInputCheckbox">
      <div>
        <input
          {...props.register}
          id={props.id}
          className={`inputField ${props.className}`}
          type="checkbox"
          value={props.value}
          onChange={props.onChange}
          name={props.name}
        />
      </div>
      <label htmlFor={props.name}>{props.label}</label>
      <span className="validate">{props.error}</span>
    </div>
  );
}
