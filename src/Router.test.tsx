import React from "react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

describe('<App/>', () => {
  it('Router test', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </MemoryRouter>
    );

    userEvent.click(screen.getByTestId('basket-link'));
    expect(screen.getByTestId('basket-title')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('main-link'));
    expect(screen.getByTestId('catalog-title')).toBeInTheDocument();
  });
});