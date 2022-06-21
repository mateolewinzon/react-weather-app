import userEvent from "@testing-library/user-event";
import { screen, render } from "../../test-utils/testing-library-utils";
import NavBar from "./NavBar";
import { store } from "../../app/store";
import { APP_TITLE, SEARCH, SEARCH_CITY } from "../../config/texts";
import { mockCitySearchResults } from "../../mocks/responses";

test("navbar renders app title, search bar and button", () => {
  render(<NavBar />, { store: store });

  const appTitle = screen.getByText(APP_TITLE);
  expect(appTitle).toBeInTheDocument();

  const searchBar = screen.getByPlaceholderText(SEARCH_CITY);
  expect(searchBar).toBeInTheDocument();

  const button = screen.getByRole("button", { name: SEARCH });
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test("typing something on searchbar enables button. Clicking sends request and displays search resutls", async () => {
  render(<NavBar />, { store: store });

  const searchBar = screen.getByPlaceholderText(SEARCH_CITY);

  const button = screen.getByRole("button", { name: SEARCH });
  expect(button).toBeDisabled();

  await userEvent.type(searchBar, "Buenos Aires");
  expect(button).toBeEnabled();

  userEvent.click(button);

  const results = await screen.findAllByText(mockCitySearchResults[0].name, {
    exact: false,
  });
  expect(results).toHaveLength(5);
});
