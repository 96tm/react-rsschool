import React, { ChangeEvent } from 'react';
import './StepPersonInfo.css';

interface IStepPersonInfoProps {
  step: number;
  personName: string;
  personEmail: string;
  personDateOfBirth: string;
  handleChange: (event: ChangeEvent) => void;
}

export default function StepPersonInfo({
  step,
  personName,
  personEmail,
  personDateOfBirth,
  handleChange,
}: IStepPersonInfoProps): JSX.Element | null {
  const FORM_STEP = 2;
  if (step !== FORM_STEP) {
    return null;
  }
  return (
    <div className="StepPersonInfo">
      <label
        htmlFor="StepPersonInfo__name"
        className="StepPersonInfo__name-label StepPersonInfo__label"
      >
        <span className="blue">*</span> Name:
        <input
          type="text"
          value={personName}
          onChange={handleChange}
          name="personName"
          id="StepPersonInfo__name"
          className="StepPersonInfo__name StepPersonInfo__input"
          placeholder="First and last name"
        />
      </label>
      <label
        htmlFor="StepPersonInfo__email"
        className="StepPersonInfo__email-label StepPersonInfo__label"
      >
        <span className="blue">*</span> Email:
        <input
          type="text"
          value={personEmail}
          onChange={handleChange}
          name="personEmail"
          id="StepPersonInfo__email"
          className="StepPersonInfo__email StepPersonInfo__input"
          placeholder="Your email"
        />
      </label>
      <label
        htmlFor="StepPersonInfo__date-of-birth"
        className="StepPersonInfo__date-of-birth-label StepPersonInfo__label"
      >
        <span className="blue">*</span> Date of birth:
        <input
          type="date"
          value={personDateOfBirth}
          onChange={handleChange}
          name="personDateOfBirth"
          id="StepPersonInfo__date-of-birth"
          className="StepPersonInfo__date-of-birth StepPersonInfo__input"
        />
      </label>
    </div>
  );
}
