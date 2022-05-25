import React from "react";
import InputMask, { Props } from "react-input-mask"
import { number } from "yup/lib/locale";
import Input from "../Input";


interface MaskedInput {
  paint?: string | number | boolean;
  border?: string | number;
  fontSize?: string | number;
  name?: string | number;
  width?: string | number;
  placeholder?: string | number;
  type?: string | number;
  value?: string | number;
  mask?: any;
  maskChar: string | null;
  formatChars?: Record<string, any>;
  className?: any;
  error?: string;
  label?: string;
  register?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

}
export default function MaskedInput(props: MaskedInput) {
  return (
    <div className='containerInput'>
      {/* @ts-ignore:next-line */}
      <label htmlFor={props.name}>{props.label}</label>
      <InputMask
        className={props.className}
        onChange={props.onChange} // @ts-ignore:next-line
        formatChars={props.formatChars}
        mask={props.mask}
        maskChar={props.maskChar}
        value={props.value}
      >

        {(inputProps: any) => (

          <Input
            error={props.error}
            register={props.register}
            paint={props.paint}
            border={props.border}
            fontSize={props.fontSize}
            name={props.name}
            width={props.width}
            placeholder={props.placeholder}
            type={props.type}
            onChange={props.onChange}
            {...inputProps}
          />

        )}

      </InputMask>
      <span className='validate'>{props.error}</span>
    </div>
  );
}