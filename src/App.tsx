import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <header>
          <h1>Oh, the Memories</h1>
        </header>
        <article>
          Feel free to add some content here.
        </article>
      </Container>
    </ThemeProvider>
  );
}
