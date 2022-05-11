import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardsContext } from 'context/CardsProvider';
import Card from 'components/card/Card';

function CardList() {
  const { cards } = useContext(CardsContext);

  return (
    <div className="flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      {cards.map((card) => (
        <>
          <Card key={card.id} card={card} />
          <span className="card-nickname">{card.category}</span>
        </>
      ))}
      <div className="card-box">
        <Link to="/react-payments/add">
          <div className="empty-card">+</div>
        </Link>
      </div>
    </div>
  );
}

export default CardList;