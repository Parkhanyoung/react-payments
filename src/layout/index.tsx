import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Style.Wrapper>
      <Style.ChildrenContainer>{children}</Style.ChildrenContainer>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ChildrenContainer: styled.div`
    width: max-content;
    height: max-content;
    min-width: 368px;
    min-height: 754px;

    padding: 25px;

    background-color: white;
  `,
};