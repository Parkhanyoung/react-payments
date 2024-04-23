import styled from 'styled-components';

import CardholderNameInputContainer from './components/CardholderNameInputContainer';
import CardExpiryDateInputContainer from './components/CardExpiryDateInputContainer';
import CardNumbersInputContainer from './components/CardNumbersInputContainer';
import CardPreview from './components/CardPreview';

import useCardInfo from './hooks/useCardInfo';
import CVCInputContainer from './components/CVCInputContainer';
import PasswordInputContainer from './components/PasswordInputContainer';

const App = () => {
  const { cardNumbers, expiryDate, cardholderName } = useCardInfo();

  return (
    <AppLayout>
      <CardPreview cardNumbers={cardNumbers.data} expiryDate={expiryDate.data} cardholderName={cardholderName.data} />
      <CardInfoInputWrapper>
        <PasswordInputContainer />
        <CVCInputContainer />
        <CardholderNameInputContainer {...cardholderName} />
        <CardExpiryDateInputContainer {...expiryDate} />
        <CardNumbersInputContainer {...cardNumbers} />
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
