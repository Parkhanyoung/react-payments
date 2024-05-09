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
import { useCardholderName } from 'ryan-card-info-hooks';

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

export interface ICardInfoInputsControl {
  cardNumbers: IInputsControl;
  cardType: IInputControl<HTMLInputElement>;
  expiryDate: { month: IInputControl; year: IInputControl };
  cardholderName: UseCardholderNameReturn;
  cvc: IInputControl;
  password: IInputControl;
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
  const cvcControl = useInput(validateCvc);
  const passwordControl = useInput(validatePassword);

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
