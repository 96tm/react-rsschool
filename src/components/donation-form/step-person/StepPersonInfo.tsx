import React, { ChangeEvent } from 'react';
import './StepPersonInfo.css';

interface IStepPersonInfoProps {
  step: number;
  personName: string;
  personEmail: string;
  personDateOfBirth: string;
  hasAgreedToPrivacyPolicy: boolean;
  errors: Record<string, string>;
  handleChange: (event: ChangeEvent) => void;
}

export default function StepPersonInfo({
  step,
  personName,
  personEmail,
  personDateOfBirth,
  hasAgreedToPrivacyPolicy,
  errors,
  handleChange,
}: IStepPersonInfoProps): JSX.Element | null {
  const FORM_STEP = 2;
  if (step !== FORM_STEP) {
    return null;
  }
  return (
    <div className="StepPersonInfo">
      <div className="StepPersonInfo__field-container">
        <label
          htmlFor="StepPersonInfo__name"
          className="StepPersonInfo__name-label StepPersonInfo__label"
        >
          <span className="blue">*</span> Name:
        </label>

        <div className="StepPersonInfo__input-container">
          <input
            type="text"
            value={personName}
            onChange={handleChange}
            name="personName"
            id="StepPersonInfo__name"
            className="StepPersonInfo__name StepPersonInfo__input"
            placeholder="First and last name"
          />
        </div>
        <div className="StepPersonInfo__field-error-container">
          <p className="input-error">{errors.personName}</p>
        </div>
      </div>
      <div className="StepPersonInfo__field-container">
        <label
          htmlFor="StepPersonInfo__email"
          className="StepPersonInfo__email-label StepPersonInfo__label"
        >
          <span className="blue">*</span> Email:
        </label>
        <div className="StepPersonInfo__input-container">
          <input
            type="text"
            value={personEmail}
            onChange={handleChange}
            name="personEmail"
            id="StepPersonInfo__email"
            className="StepPersonInfo__email StepPersonInfo__input"
            placeholder="Your email"
          />
        </div>
        <div className="StepPersonInfo__field-error-container email-field-error-container">
          <p className="input-error">{errors.personEmail}</p>
        </div>
      </div>
      <div className="StepPersonInfo__field-container birth-field-container">
        <div className="StepPersonInfo__input-container birth-input-container">
          <label
            htmlFor="StepPersonInfo__date-of-birth"
            className="StepPersonInfo__date-of-birth-label StepPersonInfo__label"
          >
            <span className="blue">*</span> Date of birth:
          </label>
          <input
            type="date"
            value={personDateOfBirth}
            onChange={handleChange}
            name="personDateOfBirth"
            id="StepPersonInfo__date-of-birth"
            className="StepPersonInfo__date-of-birth StepPersonInfo__input"
          />
        </div>
        <div className="StepPersonInfo__field-error-container birth-error-container">
          <p className="input-error input-error-birth">
            {errors.personDateOfBirth}
          </p>
        </div>
      </div>
      <div className="StepPersonInfo__field-container">
        <div className="StepPersonInfo__input-container privacy-policy-input-container">
          <input
            type="checkbox"
            checked={hasAgreedToPrivacyPolicy}
            onChange={handleChange}
            name="hasAgreedToPrivacyPolicy"
            id="StepPersonInfo__privacy-policy"
            className="StepPersonInfo__privacy-policy"
          />
          <span className="StepPersonInfo__privacy-policy-checkmark" />
          <label
            htmlFor="StepPersonInfo__privacy-policy"
            className="StepPersonInfo__privacy-policy-label"
          >
            I agree to the privacy policy
          </label>
        </div>
        <div className="StepPersonInfo__field-error-container privacy-policy-error-container">
          <p className="input-error">{errors.hasAgreedToPrivacyPolicy}</p>
        </div>
      </div>
    </div>
  );
}
