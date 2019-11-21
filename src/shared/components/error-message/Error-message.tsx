import React from 'react';
import './Error-message.scss';
import { ReactComponent as ErrorIcon } from './error-icon.svg';

interface ErrorMessageProps {
  title?: string;
  text?: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({title, text}) => {
  const defaultTitle = 'Error';
  const defaultText = 'Something went wrong';
  return (
    <div className="card">
      <div className="card-body d-flex flex-row justify-content-center align-items-center">
        <ErrorIcon className="Error-icon"></ErrorIcon>
        <div className="d-flex flex-column align-items-start">
          <h5 className="card-title">{title || defaultTitle}</h5>
          <p className="card-text">{text || defaultText}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
