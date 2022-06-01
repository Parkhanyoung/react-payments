import { useContext } from "react";
import styled from "styled-components";
import { CardInfoStateContext } from "../../providers/CardInfoProvider";

import { Card } from "../common/Card";

export const CardPreview = ({ onClickCard }) => {
  const cardInfo = useContext(CardInfoStateContext);

  return (
    <Style.CardPreviewLayout>
      <Card cardInfo={cardInfo} onClickCard={onClickCard} size="md" />
    </Style.CardPreviewLayout>
  );
};

const Style = {
  CardPreviewLayout: styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
  `,
};