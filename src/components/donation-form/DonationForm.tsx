import React, { useState, FormEvent } from 'react';
import './DonationForm.css';
import StepDonation from './step-donation/StepDonation';
import StepCreditCard from './step-credit-card/StepCreditCard';
import StepPersonInfo from './step-person/StepPersonInfo';
import IDonationFormState from '../../models/IDonationFormState';
import IAddCard from '../../models/IAddCard';
import ValidationService from '../../shared/validation-service';

const defaultFormValues: IDonationFormState = {
  step: 1,
  personName: '',
  personEmail: '',
  personDateOfBirth: '',
  creditCardNumber: '',
  creditCardCVV: '',
  creditCardMonth: '',
  creditCardYear: '',
  months: [],
  years: [],
  isMonthly: false,
  donationAmount: 30,
  customDonationAmount: 40,
  hasAgreedToPrivacyPolicy: false,
};

const validationService = new ValidationService();

export default function DonationForm({
  addCard,
}: {
  addCard: IAddCard;
}): JSX.Element {
  const LAST_STEP = 3;
  const NUMBER_OF_MONTHS = 12;
  const NUMBER_OF_YEARS = 5;

  const createYearsOptions = () => {
    const currentYear = new Date().getFullYear();
    return Array(NUMBER_OF_YEARS)
      .fill(0)
      .map((_, index) => String(currentYear + index));
  };

  const createMonthsOptions = () =>
    Array(NUMBER_OF_MONTHS)
      .fill(0)
      .map((_, index) => String(index < 9 ? `0${index + 1}` : index + 1));

  const [state, setState] = useState<IDonationFormState>({
    ...defaultFormValues,
    months: createMonthsOptions(),
    years: createYearsOptions(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    switch (state.step) {
      case 1: {
        const { hasErrors, stepErrors } =
          validationService.validateDonationStep(state.customDonationAmount);
        setErrors(stepErrors);
        return !hasErrors;
      }
      case 2: {
        const { hasErrors, stepErrors } =
          validationService.validatePersonInfoStep({ ...state });
        setErrors(stepErrors);
        return !hasErrors;
      }
      case 3: {
        const { hasErrors, stepErrors } =
          validationService.validateCreditCardStep({ ...state });
        setErrors(stepErrors);
        return !hasErrors;
      }
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
      stateValue = parseInt(value, 10);
    }
    setState((previousState) => ({
      ...previousState,
      [name]: stateValue,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    addCard({
      ...state,
      donationAmount: state.donationAmount || state.customDonationAmount,
    });
    setState({
      ...defaultFormValues,
      step: 1,
      months: createMonthsOptions(),
      years: createYearsOptions(),
    });
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
          months={state.months}
          years={state.years}
          errors={errors}
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
