import {
  validateCardNumber,
  validateCardType,
  validateCardholderName,
  validateCvc,
  validateExpiryMonth,
  validateExpiryYear,
  validatePassword,
} from '../../validators';
import { ICardInfoInputsControl } from './useCardInfoInput';

interface DynamicObject<T> {
  [key: string]: T;
}

export interface ICardInfoCompletionStatus extends DynamicObject<boolean> {
  isCardNumbersCompleted: boolean;
  isCardTypeCompleted: boolean;
  isExpiryDateCompleted: boolean;
  isCardholderNameCompleted: boolean;
  isCvcCompleted: boolean;
  isPasswordCompleted: boolean;
}

const useCardInfoCompletionStatus = ({
  cardNumbers,
  cardType,
  expiryDate: { month: expiryMonth, year: expiryYear },
  cardholderName,
  cvc,
  password,
}: ICardInfoInputsControl): ICardInfoCompletionStatus => {
  const evaluateCompletion = (value: string, validate: (value: string) => { isError: boolean }) =>
    !validate(value).isError;

  console.log(
    evaluateCompletion(cardNumbers.value.raw, (value: string) => validateCardNumber(value, cardNumbers.cardBrand)),
  );
  return {
    isCardNumbersCompleted: evaluateCompletion(cardNumbers.value.raw, (value: string) =>
      validateCardNumber(value, cardNumbers.cardBrand),
    ),
    isCardTypeCompleted: evaluateCompletion(cardType.value, validateCardType),
    isExpiryDateCompleted:
      evaluateCompletion(expiryMonth.value, validateExpiryMonth) &&
      evaluateCompletion(expiryYear.value, validateExpiryYear),
    isCardholderNameCompleted: evaluateCompletion(cardholderName.value, validateCardholderName),
    isCvcCompleted: evaluateCompletion(cvc.value, validateCvc),
    isPasswordCompleted: evaluateCompletion(password.value, validatePassword),
  };
};

export default useCardInfoCompletionStatus;
