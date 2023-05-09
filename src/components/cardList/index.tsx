import styled from "styled-components";
import { CardItem } from "./CardItem";
import { EmptyCard } from "./EmptyCard";
import { useContext } from "react";
import { CardListContext } from "../../context/cardListContext";

export const CardList = () => {
  const { cards } = useContext(CardListContext);

  return (
    <CardListWrapper>
      {!cards.length && <GuideText>새로운 카드를 등록해주세요.</GuideText>}
      <List>
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
        <EmptyCard />
      </List>
    </CardListWrapper>
  );
};

const CardListWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const GuideText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #575757;
  margin-bottom: 10px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;