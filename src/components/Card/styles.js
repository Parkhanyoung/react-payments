import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLORS, GRADATION, LAYOUT } from 'styles/theme';

const CARD_COLORS = {
  gray: css`
    background-image: ${GRADATION['persimmon-carrotOrange-60deg']};
    filter: grayscale(1);
  `,
  purple: css`
    background-image: ${GRADATION['cornflowerBlue-affair-135deg']};
    color: ${COLORS.white};
  `,
  yellow: css`
    background-image: ${GRADATION['creamCan-vividTangerine-120deg']};
    color: ${COLORS.cloudBurst};
  `,
  sky: css`
    background-image: ${GRADATION['pictonBlue-danube-left']};
    color: ${COLORS.white};
  `,
  white: css`
    background-image: ${GRADATION['mystic-bottom']};
  `,
  green: css`
    background-image: ${GRADATION['gossamer-keppel-top']};
    color: ${COLORS.white};
  `,
  orange: css`
    background-image: ${GRADATION['persimmon-carrotOrange-60deg']};
    color: ${COLORS.white};
  `,
  blue: css`
    background-image: ${GRADATION['dodgerBlue-aquamarineBlue-top']};
    color: ${COLORS.white};
  `,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isMargin }) =>
    isMargin &&
    css`
      margin: 2rem 0;
    `};

  & > .card {
    ${({ isClick }) =>
      isClick &&
      css`
        cursor: pointer;
      `};

    position: relative;
    width: 16.75rem;
    height: 10.6rem;
    border-radius: ${LAYOUT.BORDER_RADIUS}px;
    box-shadow: 3px 1.563rem 1.563rem ${COLORS['black-25']};
    overflow: hidden;
    transition: filter 0.3s ease, opacity 0.2s ease;

    ${({ color }) => css`
      ${CARD_COLORS[color]}
    `}

    ${({ companyId }) =>
      !companyId &&
      css`
        & > * {
          display: none;
        }

        &::after {
          content: '이곳을 눌러 카드사를 선택해주세요';

          position: absolute;
          display: block;

          top: 1rem;
          left: 50%;
          right: 1rem;

          font-size: 1.2rem;
          letter-spacing: 1px;
          word-break: keep-all;
          line-height: 145%;
          text-align: right;

          color: ${COLORS['white-50']};
        }
      `}

    &:hover {
      opacity: 0.8;
    }

    &::before {
      content: '';
      position: absolute;
      display: block;
      left: 10%;
      right: 76%;
      top: 42%;
      bottom: 43%;
      transform: translateY(-50%);
      background-color: ${COLORS.laser};
      border-radius: 0.25rem;
    }

    > .card-name {
      position: absolute;
      top: 7%;
      left: 5%;
      right: 35%;

      font-weight: bold;
      font-size: 0.9rem;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    > .icon {
      position: absolute;
      top: 5.5%;
      right: 15%;

      font-size: 4rem;
      text-shadow: 0 0.625rem 1.563rem rgba(0, 0, 0, 0.25);
    }

    > .company-name {
      position: absolute;
      width: 9.2rem;
      top: 2%;
      right: 0%;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: justify;
      text-justify: inter-character;
      opacity: 0.5;

      transform: rotate(90deg) translateX(85%) translateY(63%);
      transform-origin: right;

      &::after {
        content: '';
        display: inline-block;
        width: 100%;
      }
    }

    > .expire-date {
      position: absolute;
      top: 38%;
      left: 28%;

      font-size: 0.8rem;
      font-style: italic;
      opacity: 0.5;
    }

    > .user-name {
      position: absolute;
      bottom: 22%;
      left: 5%;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      font-weight: bold;
      font-size: 0.8rem;
      letter-spacing: -0.006rem;
    }

    > .card-number {
      position: absolute;
      bottom: 7%;
      left: 5%;

      font-size: 0.9rem;
      font-style: italic;
    }
  }
`;

export default Container;