import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Game } from './Game';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  );
}
