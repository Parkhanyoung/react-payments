import {
  useCVC,
  useCardIssuer,
  useCardNumber,
  useCardholderName,
  useExpiryDate,
  usePasswordPrefix,
} from 'ryan-card-info-hooks';
import { CardBrand } from '../../assets/images/card-brand-icons';

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

export interface UseCardNumberReturn {
  value: {
    raw: string;
    formatted: string[];
  };
  errorStatus: ErrorStatus;
  cardBrand: CardBrand;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface ICardInfoInputsControl {
  cardNumbers: UseCardNumberReturn;
  cardType: UseCardIssuerReturn;
  expiryDate: UseExpiryDateReturn;
  cardholderName: UseCardholderNameReturn;
  cvc: UseCVCReturn;
  password: UsePasswordPrefixReturn;
}

const useCardInfoInput = (): ICardInfoInputsControl => {
  const cardNumberControl = useCardNumber();
  const cardIssuerControl = useCardIssuer();
  const expiryDateControl = useExpiryDate();
  const cardholderNameControl = useCardholderName();
  const cvcControl = useCVC();
  const passwordControl = usePasswordPrefix();

  return {
    cardNumbers: cardNumberControl,
    cardType: cardIssuerControl,
    expiryDate: expiryDateControl,
    cardholderName: cardholderNameControl,
    cvc: cvcControl,
    password: passwordControl,
  };
};

export default useCardInfoInput;
