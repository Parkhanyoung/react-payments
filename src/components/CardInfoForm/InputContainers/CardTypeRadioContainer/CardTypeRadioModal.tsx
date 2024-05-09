import { Modal } from 'ryan-modal';
import CardTypeRadioContent from './CardTypeRadioContent';
import styled from 'styled-components';
import { CardType } from '../../../../constants/cardType';

export interface ICardTypeRadioModalProps {
  cardTypeOptions: CardType[];
  isOpen: boolean;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardTypeRadioModal({ isOpen, cardTypeOptions, onClose, onChange }: ICardTypeRadioModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Dimmer />
      <Modal.Content size="small" style={{ padding: '24px 26px' }}>
        <S.Title>카드사 선택</S.Title>
        <Modal.CloseButton />
        <CardTypeRadioContent cardTypeOptions={cardTypeOptions} onChange={onChange} onClose={onClose} />
      </Modal.Content>
    </Modal>
  );
}

const S = {
  Title: styled.h2`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 22px;
  `,
};
