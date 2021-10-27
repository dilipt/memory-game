import React from 'react';
import styled from 'styled-components';

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
    <Container>
      <header>
        <h1>Front-end Template</h1>
      </header>
      <article>
        Feel free to add some content here.
      </article>
    </Container>
  );
}
