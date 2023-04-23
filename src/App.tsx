import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CardListPage from './components/pages/CardListPage';
import CardRegistrationPage from './components/pages/CardRegistrationPage';
import NotFoundPage from './components/pages/NotFoundPage';
import type { CardItemInfo } from './types/Card';

function App() {
  const [cardList, setCardList] = useState<CardItemInfo[]>([]);

  const addCardItem = (cardItem: CardItemInfo) => {
    setCardList((prevCardList) => [...prevCardList, cardItem]);
  };

  return (
    <AppContainer className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<CardListPage cardList={cardList} />} />
          <Route
            path='/register'
            element={<CardRegistrationPage addCardItem={addCardItem} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--white-color);

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 100vw;
  }
`;

export default App;