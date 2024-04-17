const inquireCardholderName = (cardholderName: string) => {
  const isValidLength = cardholderName.length < 101;
  if (!isValidLength) {
    return '카드 소유자 이름은 100자 이하로 입력해주세요';
  }

  const isEnglish = /^[a-zA-Z]*$/.test(cardholderName);
  if (!isEnglish) {
    return '카드 소유자 이름은 영어로 입력해주세요';
  }
  return '';
};

export default inquireCardholderName;
