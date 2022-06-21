import userEvent from "@testing-library/user-event";
import { screen, render } from "../../test-utils/testing-library-utils";
import NavBar from "./NavBar";
import { store } from "../../app/store";
import { APP_TITLE } from "../../config/texts";
import { mockCitySearchResults } from "../../mocks/responses";

test("navbar renders app title and search bar", () => {
  render(<NavBar />, { store: store });

  const appTitle = screen.getByText(APP_TITLE);
  expect(appTitle).toBeInTheDocument();

  const searchBar = screen.getByRole("textbox");
  expect(searchBar).toBeInTheDocument();
});

test("typing on searchbar autocompletes list of results", async () => {
  render(<NavBar />, { store: store });

  const searchBar = screen.getByRole("textbox");
  userEvent.type(searchBar, "Buenos Aires");

  const results = await screen.findAllByText(mockCitySearchResults[0].name, {
    exact: false,
  });
  expect(results).toHaveLength(5)
});
