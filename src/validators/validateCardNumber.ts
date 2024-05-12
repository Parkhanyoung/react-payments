import { CARD_BRAND, CardBrand } from 'ryan-card-info-hooks';
import { IErrorStatus } from './index.d';

const validateCardNumber = (cardNumber: string, cardBrand: CardBrand): IErrorStatus => {
  const isDiners = cardBrand === CARD_BRAND.Diners && /^\d{14}$/.test(cardNumber);
  const isAMEX = cardBrand === CARD_BRAND.AMEX && /^\d{15}$/.test(cardNumber);
  const is16Digits = /^\d{16}$/.test(cardNumber);

  if (!is16Digits && !isDiners && !isAMEX) {
    return {
      isError: true,
      errorMessage: '카드번호는 16자리로 입력해 주세요. (Diners - 14자리, AMEX - 15자리 제외)',
    };
  }

  return { isError: false, errorMessage: '' };
};

export default validateCardNumber;
