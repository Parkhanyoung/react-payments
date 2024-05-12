import CardBrandLogo from './CardBrandLogo';
import CardNumber from './CardNumberContainer';
import ExpiryDate from './ExpiryDate';

import * as S from '../cardPreview.styles';
import { CardBrand } from 'ryan-card-info-hooks';

interface CardPreviewFrontProps {
  cardType: string;
  cardNumbers: string[];
  cardBrand: CardBrand;
  expiryDate: { month: string; year: string };
  cardholderName: string;
}

const CardPreviewFront = ({ cardType, cardNumbers, cardBrand, expiryDate, cardholderName }: CardPreviewFrontProps) => {
  return (
    <S.CardPreviewContainer $cardType={cardType}>
      <S.CardPreviewFrontWrapper>
        <S.HeaderWrapper>
          <S.CardMagnetic />
          <CardBrandLogo cardBrand={cardBrand} />
        </S.HeaderWrapper>
        <S.BodyWrapper>
          <S.CardNumbersWrapper>
            <CardNumber data={cardNumbers[0]} />
            <CardNumber data={cardNumbers[1]} />
            <CardNumber data={cardNumbers[2]} type="secret" />
            <CardNumber data={cardNumbers[3]} type="secret" />
          </S.CardNumbersWrapper>
          <ExpiryDate expiryDate={expiryDate} />
          <S.CardholderNameWrapper>
            <S.CardholderNameText>{cardholderName}</S.CardholderNameText>
          </S.CardholderNameWrapper>
        </S.BodyWrapper>
      </S.CardPreviewFrontWrapper>
    </S.CardPreviewContainer>
  );
};

export default CardPreviewFront;
