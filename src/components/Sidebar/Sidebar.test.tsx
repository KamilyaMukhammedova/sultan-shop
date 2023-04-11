import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { store } from "../../store";
import Sidebar from "./Sidebar";

test("Sidebar producer search input event", () => {
  render(
    <Provider store={store}>
      <Sidebar/>
    </Provider>
  );
  const searchInput = screen.getByTestId('producerSearch');

  expect(searchInput).toHaveValue('');

  fireEvent.input(searchInput, {
    target: {value: 'Nivea'}
  });

  expect(searchInput).toHaveValue('Nivea');
});