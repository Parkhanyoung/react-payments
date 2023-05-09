import React from 'react';
import styled from 'styled-components';
import Button from '../../atomics/Button';
import Message from '../../atomics/Message';
import CardCVC from '../../molecules/CardCVC';
import CardExpiration from '../../molecules/CardExpiration';
import CardNumbers from '../../molecules/CardNumbers';
import CardOwner from '../../molecules/CardOwner';
import CardPWD from '../../molecules/CardPWD';

import { useNavigate } from 'react-router-dom';
import FocusRefProvider from '../../context/FocusRefsProvider';

import { getUniqueID } from '../../../utils/key';
import { useCardPaymentState } from '../../context/CardPaymentContext';
import { ROUTER } from '../../../utils/constant';

/* component */
const CardForm: React.FC = () => {
  const state = useCardPaymentState();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(ROUTER.addCardAlias, {
      state: {
        id: getUniqueID(),
        cardName: state.cardName,
        cardNumbers: state.cardNumbers,
        cardExpirationDate: state.cardExpirationDate,
        cardOwner: state.cardOwner,
        cardCVC: state.cardCVC,
        cardPWD: state.cardPWD,
      },
    });
  };

  return (
    <FocusRefProvider>
      <StyledForm onSubmit={handleSubmit}>
        <CardNumbers />
        <CardExpiration />
        <CardOwner />
        <CardCVC />
        <CardPWD />

        <NextButtonWrapper>
          <Button type="submit" width="50px" height="30px">
            <Message fontSize="14px" lineHeight="16px" fontWeight={700} color="#000">
              다음
            </Message>
          </Button>
        </NextButtonWrapper>
      </StyledForm>
    </FocusRefProvider>
  );
};

/* styles */
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default CardForm;