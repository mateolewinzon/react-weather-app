import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";

const renderWithStore = (
  ui,
  { store, ...renderOptions } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

export * from "@testing-library/react";

export { renderWithStore as render };
