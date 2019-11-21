import React from 'react';
import './Form-input.scss';

interface FormInputProps {
  label?: string;
  value?: string;
  name?: string;
  type?: string;
  pattern?: string;
  min?: string;
  max?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <div className={'Form-input-container form-group w-100 ' + props.className} >
      <label className="w-100">
        {props.label}
        <input
          placeholder={props.label}
          type={props.type}
          className="form-control Form-input"
          pattern={props.pattern}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          min={props.min}
          max={props.max}
          ></input>
      </label>
  </div>
  );
}

export default FormInput;
