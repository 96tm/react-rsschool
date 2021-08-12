import IDonationFormState from '../models/IDonationFormState';
import { EMAIL_REGEXP } from './constants';

interface IValidationResult {
  hasErrors: boolean;
  stepErrors: Record<string, string>;
}

export default class ValidationService {
  validateDonationStep = (customDonationAmount: number): IValidationResult => {
    const stepErrors: Record<string, string> = {};
    let hasErrors = false;
    if (customDonationAmount <= 0) {
      stepErrors.customDonationAmount =
        'Donation amount must be greater than zero';
    }
    if (Object.keys(stepErrors).length) {
      hasErrors = true;
    }
    return { hasErrors, stepErrors };
  };

  validatePersonInfoStep = ({
    personName,
    personEmail,
    personDateOfBirth,
    hasAgreedToPrivacyPolicy,
  }: IDonationFormState): IValidationResult => {
    const ADULT_AGE = 18;
    let hasErrors = false;
    const stepErrors: Record<string, string> = {};
    if (personName.length === 0) {
      stepErrors.personName = "Name can't be empty";
    } else if (personName.length > 50) {
      stepErrors.personName = 'Name can be at most 50 letters long';
    }
    if (personEmail.length === 0) {
      stepErrors.personEmail = "Email can't be empty";
    } else if (personEmail.length > 50) {
      stepErrors.personEmail = 'Email can be at most 50 letters long';
    } else if (!EMAIL_REGEXP.test(personEmail)) {
      stepErrors.personEmail =
        'E-mail must match the following pattern: local-part@domain. Example: email@email.com';
    }
    const birth = new Date(personDateOfBirth);
    const now = new Date();
    if (now.getFullYear() - birth.getFullYear() >= ADULT_AGE) {
      const monthNow = now.getMonth();
      const monthBirth = birth.getMonth();
      if (
        now.getFullYear() - birth.getFullYear() === ADULT_AGE &&
        (monthNow < monthBirth ||
          (monthNow === monthBirth && now.getDate() < birth.getDate()))
      ) {
        stepErrors.personDateOfBirth =
          'You have to be at least 18 years old to donate';
      }
    } else {
      stepErrors.personDateOfBirth =
        'You have to be at least 18 years old to donate';
    }
    if (!personDateOfBirth) {
      stepErrors.personDateOfBirth = 'Please specify date of birth';
    }
    if (!hasAgreedToPrivacyPolicy) {
      stepErrors.hasAgreedToPrivacyPolicy =
        'You have to agree to the privacy policy to continue';
    }
    if (Object.keys(stepErrors).length) {
      hasErrors = true;
    }
    return { hasErrors, stepErrors };
  };

  validateCreditCardStep = ({
    creditCardNumber,
    creditCardCVV,
    creditCardMonth,
    creditCardYear,
  }: IDonationFormState): IValidationResult => {
    const NUMBER_OF_MONTHS = 12;
    const CARD_NUMBER_LENGTH = 16;
    const CVV_LENGTH = 3;
    const stepErrors: Record<string, string> = {};
    let hasErrors = false;
    if (!creditCardNumber) {
      stepErrors.creditCardNumber = 'This field is required';
    } else if (!/^\d*$/.test(creditCardNumber)) {
      stepErrors.creditCardNumber = `Credit card number must contain only digits`;
    } else if (creditCardNumber.length !== CARD_NUMBER_LENGTH) {
      stepErrors.creditCardNumber = `Credit card number must be ${CARD_NUMBER_LENGTH} digits long`;
    }
    if (!creditCardCVV) {
      stepErrors.creditCardCVV = 'This field is required';
    } else if (!/^\d*$/.test(creditCardCVV)) {
      stepErrors.creditCardCVV = `CVV must contain only digits`;
    } else if (creditCardCVV.length !== CVV_LENGTH) {
      stepErrors.creditCardCVV = `CVV must be ${CVV_LENGTH} digits long`;
    } else if (!parseInt(creditCardCVV, 10)) {
      stepErrors.creditCardCVV = 'Invalid CVV';
    }
    const month = parseInt(creditCardMonth, 10);
    if (!month) {
      stepErrors.creditCardMonth = 'This field is required';
    } else if (month < 1 || month > NUMBER_OF_MONTHS) {
      stepErrors.creditCardMonth = 'Invalid month';
    }
    const now = new Date();
    const year = parseInt(creditCardYear, 10);
    if (!year) {
      stepErrors.creditCardYear = 'This field is required';
    } else if (year < now.getFullYear()) {
      stepErrors.creditCardYear = 'Invalid year';
    } else if (year === now.getFullYear() && month < now.getMonth()) {
      stepErrors.creditCardMonth = 'Invalid month';
    }

    if (Object.keys(stepErrors).length) {
      hasErrors = true;
    }
    return { hasErrors, stepErrors };
  };
}
