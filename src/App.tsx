import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from './theme';
import { Game } from './Game';
import { store } from './store/store';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Game />
      </Provider>
    </ThemeProvider>
  );
}
