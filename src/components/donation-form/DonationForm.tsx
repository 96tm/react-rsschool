import React, { useState, FormEvent } from 'react';
import './DonationForm.css';
import StepDonation from './step-donation/StepDonation';
import StepCreditCard from './step-credit-card/StepCreditCard';
import StepPersonInfo from './step-person/StepPersonInfo';
import IDonationFormState from '../../models/IDonationFormState';
import IAddCard from '../../models/IAddCard';
import { EMAIL_REGEXP } from '../../shared/constants';

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

export default function DonationForm({
  addCard,
}: {
  addCard: IAddCard;
}): JSX.Element {
  const LAST_STEP = 3;
  const [state, setState] = useState<IDonationFormState>(defaultFormValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateDonationStep = () => {
    const stepErrors: Record<string, string> = {};
    if (state.customDonationAmount <= 0) {
      stepErrors.customDonationAmount =
        'Donation amount must be greater than zero';
    }
    setErrors({ ...stepErrors });
    if (Object.keys(stepErrors).length) {
      return false;
    }
    return true;
  };

  const validatePersonInfoStep = () => {
    const stepErrors: Record<string, string> = {};
    if (state.personName.length === 0) {
      stepErrors.personName = "Name can't be empty";
    } else if (state.personName.length > 50) {
      stepErrors.personName = 'Name can be at most 50 letters long';
    }
    if (state.personEmail.length === 0) {
      stepErrors.personEmail = "Email can't be empty";
    } else if (state.personEmail.length > 50) {
      stepErrors.personEmail = 'Email can be at most 50 letters long';
    } else if (!EMAIL_REGEXP.test(state.personEmail)) {
      stepErrors.personEmail =
        'E-mail must match the following pattern: local-part@domain. Example: email@email.com';
    }
    const birth = new Date(state.personDateOfBirth);
    const now = new Date();
    if (now.getFullYear() - birth.getFullYear() >= 18) {
      const monthNow = now.getMonth();
      const monthBirth = birth.getMonth();
      if (
        monthNow < monthBirth ||
        (monthNow === monthBirth && now.getDate() < birth.getDate())
      ) {
        stepErrors.personDateOfBirth =
          'You have to be at least 18 years old to donate';
      }
    } else {
      stepErrors.personDateOfBirth =
        'You have to be at least 18 years old to donate';
    }
    if (!state.personDateOfBirth) {
      stepErrors.personDateOfBirth = 'Please specify date of birth';
    }
    if (!state.hasAgreedToPrivacyPolicy) {
      stepErrors.hasAgreedToPrivacyPolicy =
        'You have to agree to the privacy policy to continue';
    }
    setErrors({ ...stepErrors });
    if (Object.keys(stepErrors).length) {
      return false;
    }
    return true;
  };

  const validate = () => {
    switch (state.step) {
      case 1:
        return validateDonationStep();
      case 2:
        return validatePersonInfoStep();
      default:
        break;
    }
    return false;
  };

  const handleChange: (event: FormEvent) => void = (event) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name } = target;
    const { value } = target;
    let stateValue: string | number | boolean = value;
    setErrors((previousErrors) => ({ ...previousErrors, [name]: '' }));
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

  const handleSubmit = (event: FormEvent) => {
    addCard({ ...state });
    event.preventDefault();
  };

  const renderNextStep: () => void = () => {
    if (!validate()) {
      return;
    }
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
          className="DonationForm__button-back"
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
    <form action="" className="DonationForm" onSubmit={handleSubmit}>
      <header className="DonationForm__header">Donation</header>
      <div className="DonationForm__container">
        <div className="DonationForm__subheader">{getSubheaderText()}</div>
        <StepDonation
          step={state.step}
          isMonthly={state.isMonthly}
          donationAmount={state.donationAmount}
          customDonationAmount={state.customDonationAmount}
          errors={errors}
          handleChange={handleChange}
        />
        <StepPersonInfo
          step={state.step}
          personName={state.personName}
          personEmail={state.personEmail}
          personDateOfBirth={state.personDateOfBirth}
          hasAgreedToPrivacyPolicy={state.hasAgreedToPrivacyPolicy}
          errors={errors}
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
    </form>
  );
}
