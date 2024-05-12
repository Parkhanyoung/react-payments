import styled from 'styled-components';
import { BANK_ICON } from '../../../../assets/images/bank-icons';
import { CardType } from '../../../../constants/cardType';

export interface ICardTypeRadioContentProps {
  cardTypeOptions: CardType[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
}

export default function CardTypeRadioContent({ cardTypeOptions, onChange, onClose }: ICardTypeRadioContentProps) {
  const CardTypeOptions = cardTypeOptions.map(cardType => {
    const CardTypeOption = BANK_ICON[cardType];

    return (
      <S.BankItem key={cardType}>
        <S.BankItemLabel htmlFor={cardType} tabIndex={0} aria-label={cardType}>
          <CardTypeOption width="32px" />
          <S.BankName>{cardType}</S.BankName>
        </S.BankItemLabel>
        <input
          aria-hidden="true"
          name="card-type"
          id={cardType}
          type="radio"
          onChange={onChange}
          onClick={onClose}
          hidden
          value={cardType}
        />
      </S.BankItem>
    );
  });
  return <S.Container>{CardTypeOptions}</S.Container>;
}

const S = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 14px;
  `,

  Title: styled.h2`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  `,

  BankItem: styled.div`
    width: 54px;
  `,

  BankItemLabel: styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:focus {
      outline: 1px solid lightblue;
    }
  `,

  BankName: styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-top: 6px;
  `,

  Blank: styled.div`
    width: 100%;
    height: 13px;
  `,
};
