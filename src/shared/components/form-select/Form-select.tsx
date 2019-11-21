import React from 'react';
import './Form-select.scss';

interface FormSelectProps {
  label?: string;
  value?: string;
  name?: string;
  options?: Array<string>;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const FormSelect: React.FC<FormSelectProps> = (props) => {
  return (
    <div className={'Form-select-container form-group w-100 ' + props.className} >
      <label className="w-100">
        {props.label}
        <select placeholder={props.label} className="form-control" name={props.name} value={props.value} onChange={props.onChange}>
          <option key="0"></option>
          { props.options && props.options.map((option, ix) => (
            <option key={ix} value={option}>{option}</option>
          )) }
        </select>
      </label>
  </div>
  );
}

export default FormSelect;
