import React, { useState } from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { Header } from './Header';
import { createBoard } from './util';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export function Game() {
  const [gameBoard] = useState<number[][]>(createBoard(8));
  return (
    <Container>
      <Header />
      <Board board={gameBoard} />
    </Container>
  );
}