import React from 'react';
import './error-message.css';

interface IErrorMessageProps {
  message: string;
  handleCloseClick: () => void;
}

export default function ErrorMessage({
  message,
  handleCloseClick,
}: IErrorMessageProps): JSX.Element {
  return (
    <div className="error-container">
      <div className="error">{message}</div>
      <button type="button" className="button-close" onClick={handleCloseClick}>
        &nbsp;
      </button>
    </div>
  );
}
