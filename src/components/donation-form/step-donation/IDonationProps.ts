import { FormEvent } from 'react';

export default interface IDonationProps {
  step: number;
  donationAmount: number;
  isMonthly: boolean;
  customDonationAmount: number;
  handleChange: (event: FormEvent) => void;
}
