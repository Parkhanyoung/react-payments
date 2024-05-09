import { CardBrand } from '../../assets/images/card-brand-icons';
import CardPreviewBack from './CardPreviewBack';
import CardPreviewFront from './CardPreviewFront';
import * as S from './cardPreview.styles';

export interface ICardPreviewProps {
  isFront: boolean;
  cardType: string;
  cardNumbers: string[];
  cardBrand: CardBrand;
  expiryDate: { month: string; year: string };
  cardholderName: string;
  cvc: string;
}

export default function CardPreview({
  isFront = true,
  cardType,
  cardBrand,
  cardNumbers,
  expiryDate,
  cardholderName,
  cvc,
}: ICardPreviewProps) {
  return (
    <S.CardPreviewAnimationContainer $isFront={isFront}>
      <CardPreviewFront
        cardBrand={cardBrand}
        cardType={cardType}
        cardNumbers={cardNumbers}
        expiryDate={expiryDate}
        cardholderName={cardholderName}
      />
      <CardPreviewBack cardType={cardType} cvc={cvc} />
    </S.CardPreviewAnimationContainer>
  );
}
