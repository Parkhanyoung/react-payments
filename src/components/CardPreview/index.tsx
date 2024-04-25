import CardPreviewBack from './CardPreviewBack';
import CardPreviewFront from './CardPreviewFront';
import { CardType } from './cardPreview.styles';

type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export interface ICardPreviewProps {
  isFront: boolean;
  cardType: CardType;
  cardNumbers: Record<CardNumberKey, string>;
  expiryDate: { month: string; year: string };
  cardholderName: string;
  cvc: string;
}

export default function CardPreview({
  isFront,
  cardType,
  cardNumbers,
  expiryDate,
  cardholderName,
  cvc,
}: ICardPreviewProps) {
  return isFront ? (
    <CardPreviewFront
      cardType={cardType}
      cardNumbers={cardNumbers}
      expiryDate={expiryDate}
      cardholderName={cardholderName}
    />
  ) : (
    <CardPreviewBack cardType={cardType} cvc={cvc} />
  );
}
