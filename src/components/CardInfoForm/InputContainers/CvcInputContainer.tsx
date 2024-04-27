import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';
import { IInputControl } from '../../../hooks/useInput';

import * as S from '../../../styles/common';

export interface ICvcInputContainerProps {
  setIsCardFront: React.Dispatch<React.SetStateAction<boolean>>;
}

const CvcInputContainer = ({
  value,
  onChange,
  validateValue,
  errorStatus,
  setIsCardFront,
}: IInputControl & ICvcInputContainerProps) => {
  const onFocus = () => setIsCardFront(false);
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validateValue(e.target.value);
    setIsCardFront(true);
  };

  return (
    <div>
      <InputContainer title="CVC 번호를 입력해 주세요" labelFor="CVC" labelText="CVC">
        <Input
          isError={errorStatus.isError}
          placeholder="123"
          maxLength={3}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
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
