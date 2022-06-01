import "./index.scss";
import { Fragment } from "react";

import Input from "../../common/Input";
import InputLabel from "../../common/label";
import InputContainer from "../../common/InputContainer";

import { useCardContext } from "../../../context/CardProvider";

import useControlInput from "../../../hooks/useControlInput";
import { CARD_ACTION } from "../../../hooks/useCard";

import { blockCharacter, limitInputLength } from "../../../util/input";

const INPUT_LENGTH = 2;
const NUM_OF_INPUT = 2;
const BACKSPACE_KEY_CODE = 8;

const ExpiredDateInput = () => {
  const {
    cardInfo: { expiredDate },
    updateCard,
  } = useCardContext();

  const { itemRef, controlInput, autoFocusBackward } = useControlInput({
    maxLength: INPUT_LENGTH,
  });

  const updateExpiredDate = (target: HTMLInputElement, idx: number) => {
    updateCard({
      type: CARD_ACTION.SET_EXPIRED_DATE,
      payload: {
        value: limitInputLength(blockCharacter(target.value), INPUT_LENGTH),
        index: idx,
      },
    });
    controlInput(target);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === BACKSPACE_KEY_CODE && e.currentTarget.value === "") {
      autoFocusBackward(e.currentTarget);
    }
  };

  return (
    <div className="expire__input__container">
      <InputLabel>만료일</InputLabel>
      <InputContainer>
        {new Array(NUM_OF_INPUT).fill(null).map((_, idx) => (
          <Fragment key={idx}>
            <Input
              placeholder={idx === 0 ? "MM" : "YY"}
              type="text"
              value={expiredDate[idx]}
              ref={(el) => {
                if (el) itemRef.current[idx] = el;
              }}
              onChange={({ target }) => {
                updateExpiredDate(target, idx);
              }}
              onKeyDown={handleKeyDown}
              testId={`expired-date${idx}`}
            />
            {idx === 0 ? "/" : ""}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default ExpiredDateInput;