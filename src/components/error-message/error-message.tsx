import React from 'react';
import { useDispatch } from 'react-redux';
import { changeError } from '../../redux/actions';
import './error-message.css';

interface IErrorMessageProps {
  message: string;
}

export default function ErrorMessage({
  message,
}: IErrorMessageProps): JSX.Element {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(changeError(''));
  };

  return (
    <div className="error-container">
      <div className="error">{message}</div>
      <button type="button" className="button-close" onClick={handleCloseClick}>
        &nbsp;
      </button>
    </div>
  );
}
