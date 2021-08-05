export default interface IDonationFormState {
  [key: string]: string | number | undefined | boolean;
  step: number;
  personName: string;
  personEmail: string;
  personDateOfBirth: string;
  creditCardNumber: string;
  creditCardCVV: string;
  creditCardMonth: string;
  creditCardYear: string;
  isMonthly: boolean;
  donationAmount: number;
  customDonationAmount: number;
  hasAgreedToPrivacyPolicy: boolean;
}
