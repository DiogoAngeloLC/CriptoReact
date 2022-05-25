import React, { useState, useRef } from "react";
import "./style.scss";

interface PropsInput {
  id?: string;
  name?: string;
  error?: string;
  className?: string;
  register?: any;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string | number;
  paint?: string | number | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputPassword(props: PropsInput) {

  const [setActive, setActiveState] = useState("");
  const [setPass, setPassState] = useState("password");

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setPassState(setActive === "active" ? "text" : "password");
    console.log(`${setPass}`)
  }

  return (
    <div className='containerInput'>
      <label htmlFor={props.name}>{props.label}</label>
      <div className={`divPass ${props.className}`}>
        <input
          {...props.register}
          paint={props.paint}
          id={props.id}
          className="inputPass"
          type={`${setPass}`}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          autoComplete="off"
        />
        <span className="material-icons iconPass" onClick={toggleAccordion}>
          visibility_off
        </span>
      </div>
    </div>
  );
}
