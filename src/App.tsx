import styled from 'styled-components';

import CardholderNameInputContainer from './components/CardholderNameInputContainer';
import CardExpiryDateInputContainer from './components/CardExpiryDateInputContainer';
import CardNumbersInputContainer from './components/CardNumbersInputContainer';
import CardPreview from './components/CardPreview';

import useCardInfo from './hooks/useCardInfo/useCardInfo';
import CvcInputContainer from './components/CvcInputContainer';
import PasswordInputContainer from './components/PasswordInputContainer';
import SequenceContainer from './components/common/SequenceContainer';

const App = () => {
  const {
    cardInfoControl: { cardNumbers, expiryDate, cardholderName, cvc, password },
    completionStatus,
  } = useCardInfo();

  const completionFlags = Object.values(completionStatus);
  const isSubmitable = completionFlags.every(v => v);

  return (
    <AppLayout>
      <CardPreview
        cardNumbers={cardNumbers.value}
        expiryDate={{ month: expiryDate.month.value, year: expiryDate.year.value }}
        cardholderName={cardholderName.value}
      />
      <CardInfoInputWrapper>
        {isSubmitable && <button>Submit</button>}
        <SequenceContainer
          predicates={completionFlags}
          componentQueue={[
            <CardNumbersInputContainer {...cardNumbers} />,
            <CardExpiryDateInputContainer {...expiryDate} />,
            <CardholderNameInputContainer {...cardholderName} />,
            <CvcInputContainer {...cvc} />,
            <PasswordInputContainer {...password} />,
          ]}
        />
      </CardInfoInputWrapper>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const CardInfoInputWrapper = styled.section`
  margin-top: 50px;
`;

export default App;
