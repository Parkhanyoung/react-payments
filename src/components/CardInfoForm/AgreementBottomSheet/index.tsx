import { Modal } from 'ryan-modal';
import styled from 'styled-components';
import CheckIcon from '../../../assets/images/check-icon';
import { Agreement } from '..';
import { useWindowSize } from '../../../hooks/useWindowSize';

export interface IAgreementBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  agreement: Agreement;
  setAgreement: React.Dispatch<React.SetStateAction<Agreement>>;
  onAgree: () => void;
}

export default function AgreementBottomSheet({
  isOpen,
  onClose,
  agreement,
  setAgreement,
  onAgree,
}: IAgreementBottomSheetProps) {
  const { width: windowWidth } = useWindowSize();
  const isAgreed = Object.values(agreement).every(v => v);

  const togglePersonalInfoAgreement = () => {
    setAgreement({
      ...agreement,
      isPersonalInfoAgreed: !agreement.isPersonalInfoAgreed,
    });
  };

  const toggleThirdPartySharingAgreement = () => {
    setAgreement({
      ...agreement,
      isThirdPartySharingAgreed: !agreement.isThirdPartySharingAgreed,
    });
  };

  const isMobile = windowWidth && windowWidth < 520;
  const modalPosition = isMobile ? 'bottom' : 'center';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Dimmer />
      <Modal.Content size="medium" position={modalPosition}>
        <S.Title>약관에 동의해 주세요</S.Title>
        <S.AgreementItem onClick={togglePersonalInfoAgreement}>
          <CheckIcon role="button" isActive={agreement.isPersonalInfoAgreed} />
          <S.AgreementItemText>[필수] 개인정보 수집이용 동의</S.AgreementItemText>
        </S.AgreementItem>
        <S.AgreementItem onClick={toggleThirdPartySharingAgreement}>
          <CheckIcon role="button" isActive={agreement.isThirdPartySharingAgreed} />
          <S.AgreementItemText>[필수] 고객정보 제 3자 제공동의</S.AgreementItemText>
        </S.AgreementItem>
        <Modal.Button fullWidth disabled={!isAgreed} button="button" onClick={onAgree} theme="dark">
          동의하고 저장하기
        </Modal.Button>
        <Modal.Button fullWidth type="button" style={{ marginTop: '12px' }} onClick={onClose} theme="light">
          닫기
        </Modal.Button>
      </Modal.Content>
    </Modal>
  );
}

const S = {
  Title: styled.h2`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 22px;
  `,

  AgreementItem: styled.div`
    font-size: 16px;
    margin-bottom: 20px;
    color: #8b95a1;

    display: flex;
    align-items: center;
    cursor: pointer;
  `,

  AgreementItemText: styled.label`
    margin-left: 10px;
    cursor: pointer;
  `,
};
