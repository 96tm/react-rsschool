export default interface IDonationFormState {
  [key: string]: string | number | undefined | boolean | string[];
  step: number;
  personName: string;
  personEmail: string;
  personDateOfBirth: string;
  creditCardNumber: string;
  creditCardCVV: string;
  creditCardMonth: string;
  creditCardYear: string;
  months: string[];
  years: string[];
  isMonthly: boolean;
  donationAmount: number;
  customDonationAmount: number;
  hasAgreedToPrivacyPolicy: boolean;
}
