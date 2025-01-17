import styled from 'styled-components';
import { CARD_BRAND, CardBrand } from 'ryan-card-info-hooks';
import { CARD_BRAND_ICON, CardBrandIcon } from '../../../assets/images/card-brand-icons';

interface ICardBrandLogoProps {
  cardBrand: CardBrand;
}

const getCardBrandLogo = (cardBrand: CardBrand): CardBrandIcon | null => {
  if (cardBrand === CARD_BRAND.UNKNOWN) {
    return null;
  }

  return CARD_BRAND_ICON[cardBrand];
};

const CardBrandLogo = ({ cardBrand }: ICardBrandLogoProps) => {
  const BrandLogo = getCardBrandLogo(cardBrand);

  if (!BrandLogo) return null;

  return (
    <S.BrandLogoContainer>
      <BrandLogo />
    </S.BrandLogoContainer>
  );
};

const S = {
  BrandLogoContainer: styled.div`
    width: 50px;
    border-radius: 5px;
  `,
  StyledImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};

export default CardBrandLogo;
