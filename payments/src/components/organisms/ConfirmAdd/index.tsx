import "./index.scss";

import { useCardContext } from "../../../context/CardProvider";

interface ConfirmAddProps {
  closeModal: () => void;
  submit: () => void;
}

const ConfirmAdd = ({ closeModal, submit }: ConfirmAddProps) => {
  const { cardInfo } = useCardContext();

  return (
    <div className="confirm-add">
      <span className="title">입력하신 정보가 맞습니까?</span>
      <span className="subtitle">카드이름</span>
      <span
        className="content"
        data-testid={"card-name-confirm"}
      >{`${cardInfo.cardName}`}</span>
      <span className="subtitle">카드번호</span>
      <span className="content" data-testid={"card-number-confirm"}>
        {`${cardInfo.cardNumber[0]}-${cardInfo.cardNumber[1]}-`}
        <span className="dot">····</span>-<span className="dot">····</span>
      </span>
      <span className="subtitle">카드소유주</span>
      <span
        className="content"
        data-testid={"card-owner-confirm"}
      >{`${cardInfo.ownerName}`}</span>

      <div className="button--container">
        <button className="confirm--button pink" onClick={closeModal}>
          취소
        </button>
        <button className="confirm--button blue" onClick={submit}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ConfirmAdd;