import { useEffect, useRef } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';
import {
  isInputNumber,
  isNextInputFocusable,
  isOverLength,
  isValidMonth,
} from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT_MAX_LENGTH } from '../../utils/Constants';
import type { CardItemInfo } from '../../types/Card';

interface ExpirationDateInputProps {
  expirationDate: CardItemInfo['expirationDate'];
  setExpirationDate: (expirationDate: CardItemInfo['expirationDate']) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const ExpirationDateInput = ({
  expirationDate,
  setExpirationDate,
  errorMessage,
  setErrorMessage,
}: ExpirationDateInputProps) => {
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    if (!expirationDate[0].length && !expirationDate[1].length) return;

    if (
      expirationDate[0].length < INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH ||
      expirationDate[1].length < INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH
    ) {
      setErrorMessage(ERROR_MESSAGE.EXPIRATION_DATE_FORM);
      return;
    }

    if (
      expirationDate[0].length === INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH &&
      !isValidMonth(expirationDate[0])
    ) {
      setErrorMessage(ERROR_MESSAGE.VALID_MONTH);
      return;
    }
  }, [expirationDate, setErrorMessage]);

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH))
        return;
      if (isInputNumber(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH)) {
        setErrorMessage(ERROR_MESSAGE.ONLY_NUMBER);
        return;
      }

      const newInputs = [...expirationDate];
      newInputs[inputIndex] = inputValue;

      setExpirationDate(newInputs);

      if (
        isNextInputFocusable(
          inputValue,
          inputIndex,
          INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH
        )
      )
        refs[inputIndex + 1].current?.focus();

      setErrorMessage('');
    };

  return (
    <InputGroup labelValue='만료일' errorMessage={errorMessage}>
      <InputBox width='137px' isError={!!errorMessage}>
        <Input
          placeholder='MM'
          ref={refs[0]}
          value={expirationDate[0]}
          onChange={handleChangeInput(0)}
        />
        <InputSeparator color='var(--grey-color)' isActive>
          /
        </InputSeparator>
        <Input
          placeholder='YY'
          ref={refs[1]}
          value={expirationDate[1]}
          onChange={handleChangeInput(1)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;