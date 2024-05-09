import { IInputControl } from './../useInput';
import useInput from '../useInput';
import useInputs, { IInputsControl } from '../useInputs';
import {
  validateCardNumber,
  validateCvc,
  validateExpiryMonth,
  validateExpiryYear,
  validatePassword,
  validateCardType,
} from '../../validators';
import { useCVC, useCardholderName, usePasswordPrefix } from 'ryan-card-info-hooks';

export type ErrorStatus =
  | {
      isError: false;
      errorMessage: null;
    }
  | {
      isError: true;
      errorMessage: string;
    };

export interface UseCardholderNameReturn {
  value: string;
  errorStatus: ErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface UseCVCReturn {
  value: string;
  errorStatus: ErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface UsePasswordPrefixReturn {
  value: string;
  errorStatus: ErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface ICardInfoInputsControl {
  cardNumbers: IInputsControl;
  cardType: IInputControl<HTMLInputElement>;
  expiryDate: { month: IInputControl; year: IInputControl };
  cardholderName: UseCardholderNameReturn;
  cvc: UseCVCReturn;
  password: UsePasswordPrefixReturn;
}

const initialCardNumbers = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const useCardInfoInputs = (): ICardInfoInputsControl => {
  const cardNumbersControl = useInputs(validateCardNumber, initialCardNumbers);
  const cardTypeControl = useInput(validateCardType);
  const expiryMonthControl = useInput(validateExpiryMonth);
  const expiryYearControl = useInput(validateExpiryYear);
  const cardholderNameControl = useCardholderName();
  const cvcControl = useCVC();
  const passwordControl = usePasswordPrefix();

  return {
    cardNumbers: cardNumbersControl,
    cardType: cardTypeControl,
    expiryDate: { month: expiryMonthControl, year: expiryYearControl },
    cardholderName: cardholderNameControl,
    cvc: cvcControl,
    password: passwordControl,
  };
};

export default useCardInfoInputs;
