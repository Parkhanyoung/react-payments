import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';

import * as S from '../../../styles/common';
import makeUniqueString from '../../../utils/getUniqueId';
import { UseCVCReturn } from '../../../hooks/useCardInfo/useCardInfoInputs';

export interface ICvcInputContainerProps {
  setIsCardFront: React.Dispatch<React.SetStateAction<boolean>>;
}

const CvcInputContainer = ({
  value,
  onChange,
  onBlur,
  errorStatus,
  setIsCardFront,
}: UseCVCReturn & ICvcInputContainerProps) => {
  const onFocus = () => setIsCardFront(false);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur(e);
    setIsCardFront(true);
  };

  const inputId = makeUniqueString(`cvc-input`);

  return (
    <div>
      <InputContainer title="CVC 번호를 입력해 주세요" labelFor={inputId} labelText="CVC">
        <Input
          id={inputId}
          isError={errorStatus.isError}
          placeholder="123"
          maxLength={3}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={handleBlur}
          width="100%"
        />
      </InputContainer>
      <S.ErrorWrapper>
        <S.ErrorText>{errorStatus.errorMessage}</S.ErrorText>
      </S.ErrorWrapper>
    </div>
  );
};

export default CvcInputContainer;
