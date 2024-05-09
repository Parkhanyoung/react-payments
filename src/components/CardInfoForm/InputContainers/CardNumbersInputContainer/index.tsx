import InputContainer from '../../../common/InputContainer';

import { ErrorWrapper, ErrorText } from '../../../../styles/common';
import { UseCardNumberReturn } from '../../../../hooks/useCardInfo/useCardInfoInput';
import Input from '../../../common/Input';

export default function CardNumbersContainer({ value, onChange, onBlur, errorStatus }: UseCardNumberReturn) {
  return (
    <div>
      <InputContainer
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
      >
        <Input
          width="100%"
          onChange={onChange}
          isError={errorStatus.isError}
          value={value.raw}
          onBlur={onBlur}
          placeholder="1234"
          maxLength={16}
          autoFocus
        />
      </InputContainer>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
