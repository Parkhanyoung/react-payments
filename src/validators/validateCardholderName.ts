import { IErrorStatus } from './index.d';

const TWO_BLANKS = '  ';

const validateCardholderName = (cardholderName: string): IErrorStatus => {
  const isEnglish = /^[a-zA-Z ]+$/.test(cardholderName);
  if (!isEnglish) {
    return { isError: true, errorMessage: '영어로만 입력해 주세요' };
  }

  if (cardholderName.trim() !== cardholderName) {
    return { isError: true, errorMessage: '양 끝에 공백이 포함될 수 없습니다' };
  }

  if (cardholderName.includes(TWO_BLANKS)) {
    return { isError: true, errorMessage: '사이 공백은 최대 한 칸 입력할 수 있습니다' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateCardholderName;
