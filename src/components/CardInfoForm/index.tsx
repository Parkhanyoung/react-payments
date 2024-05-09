import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CardNumbersInputContainer from './InputContainers/CardNumbersInputContainer';
import CardExpiryDateInputContainer from './InputContainers/CardExpiryDateInputContainer';
import CardholderNameInputContainer from './InputContainers/CardholderNameInputContainer';
import CvcInputContainer from './InputContainers/CvcInputContainer';
import PasswordInputContainer from './InputContainers/PasswordInputContainer';
import CardTypeRadioContainer from './InputContainers/CardTypeRadioContainer';

import useSequence from '../../hooks/useSequence';
import { ICardInfoInputsControl } from '../../hooks/useCardInfo/useCardInfoInput';
import { ICardInfoCompletionStatus } from '../../hooks/useCardInfo/useCardInfoCompletionStatus';
import getObjectValues from '../../utils/getObjectValues';
import ROUTE_PATH from '../../pages/constants/routePath';
import AgreementBottomSheet from './AgreementBottomSheet';
import { useState } from 'react';

export interface ICardInfoFormProps {
  cardInfoControl: ICardInfoInputsControl;
  completionStatus: ICardInfoCompletionStatus;
  setIsCardFront: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Agreement {
  isPersonalInfoAgreed: boolean;
  isThirdPartySharingAgreed: boolean;
}

export default function CardInfoForm({ cardInfoControl, completionStatus, setIsCardFront }: ICardInfoFormProps) {
  const navigate = useNavigate();
  const [isAgreementBottomSheetOpen, setIsAgreementBottomSheetOpen] = useState(false);
  const [agreement, setAgreement] = useState<Agreement>({
    isPersonalInfoAgreed: false,
    isThirdPartySharingAgreed: false,
  });

  const { cardNumbers, cardType, expiryDate, cardholderName, cvc, password } = cardInfoControl;

  const completionFlags = getObjectValues<boolean>(completionStatus);
  const sequence = useSequence(completionFlags);
  const isSubmitable = completionFlags.every((v: boolean) => v);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAgreementBottomSheetOpen(true);
  };

  const onAgree = () => {
    const isAgreed = Object.values(agreement).every(v => v);
    if (isAgreed && isSubmitable) {
      navigate(ROUTE_PATH.cardRegisterComplete, {
        state: { cardNumberPrefix: cardNumbers.value, cardType: cardType.value },
      });
    }
  };

  const onAgreementBottomSheetClose = () => {
    setIsAgreementBottomSheetOpen(false);
  };

  return (
    <form onSubmit={onSubmit}>
      {sequence >= 5 && <PasswordInputContainer {...password} />}
      {sequence >= 4 && <CvcInputContainer {...cvc} setIsCardFront={setIsCardFront} />}
      {sequence >= 3 && <CardholderNameInputContainer {...cardholderName} />}
      {sequence >= 2 && <CardExpiryDateInputContainer {...expiryDate} />}
      {sequence >= 1 && <CardTypeRadioContainer {...cardType} />}
      <CardNumbersInputContainer {...cardNumbers} />
      {isSubmitable && <S.SubmitButton type="submit">확인</S.SubmitButton>}
      <AgreementBottomSheet
        isOpen={isAgreementBottomSheetOpen}
        onClose={onAgreementBottomSheetClose}
        agreement={agreement}
        setAgreement={setAgreement}
        onAgree={onAgree}
      />
    </form>
  );
}

const S = {
  SubmitButton: styled.button`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #333333;
    color: #f3f3f3;
    padding: 20px 0;

    left: 0;
    font-size: 1.1rem;
  `,
};
