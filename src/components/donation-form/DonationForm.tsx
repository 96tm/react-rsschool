import React, { useState, FormEvent } from 'react';
import './DonationForm.css';
import StepDonation from './step-donation/StepDonation';
import StepCreditCard from './step-credit-card/StepCreditCard';
import StepPersonInfo from './step-person/StepPersonInfo';
import IDonationFormState from '../../models/IDonationFormState';

const defaultFormValues: IDonationFormState = {
  step: 1,
  personName: '',
  personEmail: '',
  personDateOfBirth: '',
  creditCardNumber: '',
  creditCardCVV: '',
  creditCardMonth: '',
  creditCardYear: '',
  isMonthly: false,
  donationAmount: 30,
  customDonationAmount: 40,
  hasAgreedToPrivacyPolicy: false,
};

export default function DonationForm(): JSX.Element {
  const LAST_STEP = 3;
  const [state, setState] = useState<IDonationFormState>(defaultFormValues);

  const handleChange: (event: FormEvent) => void = (event) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name } = target;
    const { value } = target;
    let stateValue: string | number | boolean = value;
    if (['isMonthly', 'hasAgreedToPrivacyPolicy'].includes(name)) {
      setState((previousState) => ({
        ...previousState,
        [name]: !previousState[name],
      }));
      return;
    }
    if (['donationAmount', 'customDonationAmount'].includes(name)) {
      stateValue = Number(value);
    }
    setState((previousState) => ({
      ...previousState,
      [name]: stateValue,
    }));
  };

  const renderNextStep: () => void = () => {
    let { step } = state;
    if (step < LAST_STEP) {
      step += 1;
    } else {
      step = LAST_STEP;
    }
    setState({ ...state, step });
  };

  const renderPreviousStep: () => void = () => {
    let { step } = state;
    if (step > 1) {
      step -= 1;
    } else {
      step = 1;
    }
    setState({ ...state, step });
  };

  const getNextButton: () => JSX.Element | null = () => {
    if (state.step < LAST_STEP) {
      return (
        <button
          type="button"
          className="DonationForm__button-next DonationForm__button"
          onClick={renderNextStep}
        >
          Next
        </button>
      );
    }
    return null;
  };

  const getPreviousButton: () => JSX.Element | null = () => {
    if (state.step > 1) {
      return (
        <button
          type="button"
          className="DonationForm__button-back DonationForm__button"
          onClick={renderPreviousStep}
        >
          Back
        </button>
      );
    }
    return null;
  };

  const getSubheaderText = () => {
    switch (state.step) {
      case 1:
        return 'Donation information';
      case 2:
        return 'Billing information';
      case 3:
        return 'Payment information';
      default:
        return '';
    }
  };

  return (
    <div className="DonationForm">
      <header className="DonationForm__header">Donation</header>
      <div className="DonationForm__container">
        <div className="DonationForm__subheader">{getSubheaderText()}</div>
        <StepDonation
          step={state.step}
          isMonthly={state.isMonthly}
          donationAmount={state.donationAmount}
          customDonationAmount={state.customDonationAmount}
          handleChange={handleChange}
        />
        <StepCreditCard
          step={state.step}
          creditCardNumber={state.creditCardNumber}
          creditCardCVV={state.creditCardCVV}
          creditCardMonth={state.creditCardMonth}
          creditCardYear={state.creditCardYear}
          handleChange={handleChange}
        />
        <StepPersonInfo
          step={state.step}
          personName={state.personName}
          personEmail={state.personEmail}
          personDateOfBirth={state.personDateOfBirth}
          hasAgreedToPrivacyPolicy={state.hasAgreedToPrivacyPolicy}
          handleChange={handleChange}
        />
        <div className="DonationForm__buttons-container">
          {getPreviousButton()}
          {getNextButton()}
          {state.step === LAST_STEP ? (
            <button
              type="submit"
              className="DonationForm__button-submit DonationForm__button"
            >
              Submit
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
