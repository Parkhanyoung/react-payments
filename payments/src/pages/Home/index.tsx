import Card from "../../components/common/Card";
import { useCardListContext } from "../../context/CardListProvider";
import { Link } from "react-router-dom";
import "./index.scss";
import useModal from "../../hooks/useModal";
import ConfirmCardControl from "../../components/organisms/ConfirmCardControl";
import React, { useEffect } from "react";
import { CARD_LIST_ACTION } from "../../hooks/useCardList";

const Home = () => {
  const { cardList, updateCardList } = useCardListContext();
  const {
    closeModal: closeConfirmCardControlModal,
    ModalElement: ConfirmCardControlModal,
    setElement: setModal,
  } = useModal();

  useEffect(() => {
    localStorage.setItem("CARD_LIST", JSON.stringify(cardList));
  }, [cardList]);

  const handleCardClick = (idx: number) => {
    setModal(
      <ConfirmCardControl
        closeModal={closeConfirmCardControlModal}
        removeCard={() => {
          updateCardList({
            type: CARD_LIST_ACTION.REMOVE_CARD,
            payload: {
              targetIndex: idx,
            },
          });
          closeConfirmCardControlModal();
        }}
      />
    );
  };

  return (
    <div className="home--container">
      <header>
        <p>💳보유카드</p>
      </header>
      {cardList.map((card, idx) => (
        <div className="labeled" key={idx}>
          <div className="home--container-card">
            <Card
              cardInfo={card}
              onClick={() => {
                handleCardClick(idx);
              }}
            />
          </div>
          <p>{card.nickname}</p>
        </div>
      ))}
      <div className="card-add-btn--container">
        <Link to="/addCard">
          <button className="home-container-card-add-btn">+</button>
        </Link>
      </div>
      <ConfirmCardControlModal />
    </div>
  );
};

export default Home;