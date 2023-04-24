import React, { useContext } from 'react';

import { Form, useNavigate } from 'react-router-dom';
import useCardList from '../../../hooks/useCardList';
import { CardNumber } from '../cardNumber/CardNumber';
import ExpireDate from '../expireDate/ExpireDate';
import OwnerNameInput from '../ownerNameInput/OwnerName';
import SecurityCode from '../securityCode/SecurityCode';
import CardPassword from '../cardPassword/CardPassword';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import { NextButton } from './CardRegisterForm.style';

function CardRegisterForm() {
  const navigation = useNavigate();
  const creditCardInfo = useContext(CreditCardContext)[0];

  const { saveCard } = useCardList({ key: 'card-list' });
  const { cardNumber, expirationDate, securityCode, password } = creditCardInfo;

  const hasShowButton =
    cardNumber.join('').length === 16 &&
    /^(0[1-9]|1[0-2])$/.test(expirationDate[0]) &&
    /^\d{2}$/.test(expirationDate[1]) &&
    securityCode.length === 3 &&
    password.join('').length === 2;

  const _onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    saveCard(creditCardInfo);
    navigation('/');
  };

  return (
    <Form onSubmit={_onSubmit}>
      <CardNumber />
      <ExpireDate />
      <OwnerNameInput />
      <SecurityCode />
      <CardPassword />
      {hasShowButton && (
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <NextButton>다음</NextButton>
        </div>
      )}
    </Form>
  );
}

export default CardRegisterForm;