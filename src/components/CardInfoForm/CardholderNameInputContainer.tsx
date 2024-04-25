import Input from '../common/Input';
import { ErrorWrapper, ErrorText } from '../../styles/common';
import InputSection from '../common/InputSection';
import useDisplayingErrorStatus from '../../hooks/useDisplayingErrorStatus';

interface CardholderNameInputContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateValue: (targetValue: string) => void;
  errorStatus: { errorMessage: string; isError: boolean };
}

const CardholderNameInputContainer = ({
  value,
  setValue,
  validateValue,
  errorStatus,
}: CardholderNameInputContainerProps) => {
  const {
    displayingErrorStatus: { isError, errorMessage },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateValue(e.target.value);
    setValue(e.target.value.toUpperCase());
  };

  return (
    <div>
      <InputSection title="카드 소유자 이름 입력" labelText="소유자 이름" labelFor="cardholder-name-input">
        <Input
          id="cardholder-name-input"
          isError={isError}
          value={value}
          onChange={onChange}
          onBlur={bringErrorStatus}
          placeholder="JOHN DOE"
          width="100%"
          maxLength={100}
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardholderNameInputContainer;