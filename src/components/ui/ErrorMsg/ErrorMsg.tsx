import React from 'react';
import './ErrorMsg.scss';

interface IProps {
  message: string
}

const ErrorMsg: React.FC<IProps> = ({message}) => {
  return (
    <div className="errorMsg">
      <h2>{message}</h2>
    </div>
  );
};

export default ErrorMsg;