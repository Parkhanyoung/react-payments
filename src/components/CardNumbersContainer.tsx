import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import RegistrationLayout from './common/RegistrationLayout';

type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export interface CardNumbersContainerProps {
  cardNumbers: Record<CardNumberKey, string>;
  generateChangeHandler: (targetKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  errorStatus: Record<string, boolean>;
  generateErrorMessageUpdater: (targetKey: string) => () => void;
}

export default function CardNumberContainer({
  cardNumbers,
  generateChangeHandler,
  errorMessage,
  errorStatus,
  generateErrorMessageUpdater,
}: CardNumbersContainerProps) {
  const arr = ['first', 'second', 'third', 'fourth'] as const;
  return (
    <div>
      <RegistrationLayout
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
        labelFor="first-card-numbers-input"
      >
        {arr.map(key => {
          const PASSWORD_INPUT_KEYS = ['third', 'fourth'];
          const type = PASSWORD_INPUT_KEYS.includes(key) ? 'password' : 'text';

          return (
            <Input
              key={key}
              id={`${key}-card-numbers-input`}
              isError={errorStatus[key]}
              value={cardNumbers[key]}
              onChange={generateChangeHandler(key)}
              onBlur={generateErrorMessageUpdater(key)}
              placeholder="1234"
              maxLength={4}
              type={type}
              width="23%"
            />
          );
        })}
      </RegistrationLayout>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}