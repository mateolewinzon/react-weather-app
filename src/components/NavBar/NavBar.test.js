import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import {
  screen,
  render,
  waitFor,
  findByText,
} from "../../test-utils/testing-library-utils";
import NavBar from "./NavBar";
import { store } from "../../app/store";
import { server } from "../../mocks/server";
import { APP_TITLE, ERROR_FETCHING_CITY, SEARCH, SEARCH_CITY } from "../../config/texts";
import { mockCitySearchResults } from "../../mocks/mockData";
import { SEARCH_CITY_ENDPOINT } from "../../config/endpoints";

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
  userEvent.hover(searchBar);

  const button = screen.getByRole("button", { name: SEARCH });
  expect(button).toBeDisabled();

  await userEvent.type(searchBar, "Buenos aires");

  expect(button).toBeEnabled();

  userEvent.click(button);

  userEvent.hover(searchBar);

  const results = await screen.findAllByText(mockCitySearchResults[0].name, {
    exact: false,
  });

  await waitFor(() => {
    expect(results).toHaveLength(5);
  });
});

test("if city search request fails, show an error", async()=> {
  server.resetHandlers(
    rest.get(SEARCH_CITY_ENDPOINT, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );

  render(<NavBar/>, {store:store})

  const searchBar = screen.getByPlaceholderText(SEARCH_CITY);
  expect(searchBar).toBeInTheDocument();

  const button = screen.getByRole("button", { name: SEARCH });
  expect(button).toBeInTheDocument();

  await userEvent.type(searchBar, "Buenos aires");
  userEvent.click(button);

  const errorMessage = await screen.findByText(ERROR_FETCHING_CITY)
  expect(errorMessage).toBeInTheDocument()
})