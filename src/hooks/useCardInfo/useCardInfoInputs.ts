import {
  useCardholderName,
  useCardIssuer,
  useCVC,
  useExpiryDate,
  usePasswordPrefix,
  useCardNumber,
  UseCardNumberReturn,
  UseCardIssuerReturn,
  UseExpiryDateReturn,
  UseCardholderNameReturn,
  UseCVCReturn,
  UsePasswordPrefixReturn,
} from 'ryan-card-info-hooks';

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
