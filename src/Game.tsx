import React from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { Header } from './Header';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export function Game() {
  return (
    <Container>
      <Header>Oh, the Memories!</Header>
      <Board />
    </Container>
  );
}
