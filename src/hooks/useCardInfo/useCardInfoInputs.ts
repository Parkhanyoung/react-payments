import useInputs, { IInputsControl } from '../useInputs';
import { validateCardNumber } from '../../validators';
import { useCVC, useCardIssuer, useCardholderName, useExpiryDate, usePasswordPrefix } from 'ryan-card-info-hooks';

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

export interface UseCardIssuerReturn {
  value: string;
  errorStatus: ErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export interface UseExpiryDateReturn {
  month: {
    value: string;
    errorStatus: ErrorStatus;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  year: {
    value: string;
    errorStatus: ErrorStatus;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
}

export interface ICardInfoInputsControl {
  cardNumbers: IInputsControl;
  cardType: UseCardIssuerReturn;
  expiryDate: UseExpiryDateReturn;
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
  const cardTypeControl = useCardIssuer();
  const expiryDateControl = useExpiryDate();
  const cardholderNameControl = useCardholderName();
  const cvcControl = useCVC();
  const passwordControl = usePasswordPrefix();

  return {
    cardNumbers: cardNumbersControl,
    cardType: cardTypeControl,
    expiryDate: expiryDateControl,
    cardholderName: cardholderNameControl,
    cvc: cvcControl,
    password: passwordControl,
  };
};

export default useCardInfoInputs;
