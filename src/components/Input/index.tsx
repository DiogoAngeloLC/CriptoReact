import React from "react";

interface PropsInput {
  id?: string;
  name?: string;
  error?: string;
  className?: string;
  register?: any;
  label?: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string | number;
  paint?: string | number | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: PropsInput) {
  return (
    <div className='containerInput'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...props.register}
        paint={props.paint}
        id={props.id}
        className={`inputField ${props.className}`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        autoComplete={props.autoComplete}
      />
      <span className='validate'>{props.error}</span>
    </div>
  );
}
