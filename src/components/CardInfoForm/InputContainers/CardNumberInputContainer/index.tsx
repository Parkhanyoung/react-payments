import InputContainer from '../../../common/InputContainer';

import { ErrorWrapper, ErrorText } from '../../../../styles/common';
import makeUniqueString from '../../../../utils/getUniqueId';
import CardNumberInput from './CardNumberInput';
import { UseCardNumberReturn } from 'ryan-card-info-hooks';

export default function CardNumberInputContainer({
  value,
  cardBrand,
  onChange,
  onBlur,
  errorStatus,
}: UseCardNumberReturn) {
  const inputId = makeUniqueString('card-number-input');

  const formatted = value.formatted.filter(v => v).join(' ');

  return (
    <div>
      <InputContainer
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
        labelFor={inputId}
      >
        <CardNumberInput
          id={inputId}
          width="100%"
          onChange={onChange}
          isError={errorStatus.isError}
          formattedValue={formatted}
          cardBrand={cardBrand}
          onBlur={onBlur}
          placeholder="1234 1234 1234 1234"
          autoFocus
        />
      </InputContainer>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
