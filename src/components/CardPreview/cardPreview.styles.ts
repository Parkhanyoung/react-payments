import styled from 'styled-components';

import { CARD_COLOR, CardType } from '../../constants/cardType';

const DEFAULT_CARD_COLOR = '#333333';

export const CardPreviewAnimationContainer = styled.div<{ $isFront: boolean }>`
  transition: transform 1.5s;
  transform: ${({ $isFront }) =>
    $isFront ? 'perspective(900px) rotateY(0deg)' : 'perspective(900px) rotateY(180deg)'};
  transform-style: preserve-3d;
  display: inline-grid;

  & > * {
    grid-area: 1 / 1 / 1 / 1;
    backface-visibility: hidden;
  }

  .card-preview-back {
    transform: rotateY(180deg);
  }
`;

export const CardPreviewContainer = styled.div<{ $cardType?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 200px;

  background-color: ${({ $cardType }) =>
    $cardType ? CARD_COLOR[$cardType as CardType] || DEFAULT_CARD_COLOR : DEFAULT_CARD_COLOR};

  border-radius: 8px;

  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

export const CardPreviewFrontWrapper = styled.div`
  padding: 16px 20px 20px;
`;

// card preview front
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
`;

export const CardMagnetic = styled.div`
  background-color: #ddcd78;
  width: 50px;
  border-radius: 5px;
`;

export const BodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  letter-spacing: 2;
`;

export const CardNumbersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-top: 20px;
  gap: 20px;
`;

export const CardholderNameWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const CardholderNameText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// card preview back
export const CvcLine = styled.div`
  position: absolute;
  background-color: #cbba64;
  bottom: 44px;
  height: 30px;
  width: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const CvcText = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
`;
