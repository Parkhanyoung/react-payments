import styled from 'styled-components';

import InputContainer from '../../../common/InputContainer';

import getObjectKeys from '../../../../utils/getObjectKeys';
import { CARD_TYPE } from '../../../../constants/cardType';
import CardTypeRadioModal from './CardTypeRadioModal';
import { useState } from 'react';
import { UseCardIssuerReturn } from '../../../../hooks/useCardInfo/useCardInfoInputs';

const cardTypeOptions = getObjectKeys(CARD_TYPE);

export default function CardTypeSelectContainer({ value, onChange }: UseCardIssuerReturn) {
  const [isCardTypeModalOpen, setIsCardTypeModalOpen] = useState(false);

  const onCardTypeModalClose = () => {
    setIsCardTypeModalOpen(false);
  };

  const currentCardType = value || '카드사를 선택해 주세요';

  return (
    <S.Container>
      <InputContainer title="카드사를 선택해 주세요" subtitle="현재 국내 카드사만 가능합니다.">
        <S.CardTypeSelectButton type="button" $hasValue={Boolean(value)} onClick={() => setIsCardTypeModalOpen(true)}>
          {currentCardType}
        </S.CardTypeSelectButton>
        <CardTypeRadioModal
          cardTypeOptions={cardTypeOptions}
          isOpen={isCardTypeModalOpen}
          onClose={onCardTypeModalClose}
          onChange={onChange}
        />
      </InputContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    margin-bottom: 44px;
  `,

  CardTypeSelectButton: styled.button<{ $hasValue: boolean }>`
    width: 100%;
    height: 36px;
    border: 1px solid #acacac;
    border-radius: 4px;
    background-color: #ffffff;
    color: ${({ $hasValue }) => ($hasValue ? '#333333' : '#b3b3b3')};

    text-align: left;
    padding-left: 7px;
  `,
};
