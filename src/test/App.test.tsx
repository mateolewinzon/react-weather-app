import { render, screen, waitFor } from "test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { store } from "app/store";
import { mockCitySearchResults, weatherData } from "mocks/mockData";
import {
  DELETE,
  SEARCH,
  SEARCH_CITY,
  SEARCH_TO_ADD_CITY,
} from "config/texts";
import convertTempFromK from "utils/convertTemp";

test("user searches for a city, selects one, deletes it", async () => {
  render(<App />, { store: store });

  const emptyCityCards = screen.getAllByText(SEARCH_TO_ADD_CITY);
  expect(emptyCityCards).toHaveLength(5);

  // Type on search bar, click button

  const searchBar = screen.getByPlaceholderText(SEARCH_CITY);
  const button = screen.getByRole("button", { name: SEARCH });

  await userEvent.type(searchBar, "Buenos aires");

  userEvent.hover(searchBar);
  userEvent.click(button);

  // Click on a result

  const results = await screen.findAllByText(mockCitySearchResults[0].name, {
    exact: false,
  });
  await waitFor(() => {
    expect(results).toHaveLength(5);
  });

  userEvent.click(results[0]);

  // Expect new city card to be added, with weather data.

  const selectedCityCard = await screen.findByTestId("selected-city-card");

  expect(selectedCityCard).toBeInTheDocument();
  expect(selectedCityCard).toHaveTextContent(
    String(convertTempFromK(weatherData.current.temp))
  );

  // Delete the city

  const deleteButton = await screen.findByRole("button", { name: DELETE });
  userEvent.click(deleteButton);

  await waitFor(() => {
    expect(selectedCityCard).not.toBeInTheDocument();
  });
});

test("user adds 5 cities and can't add more", async () => {
  render(<App />, { store: store });

  const searchBar = screen.getByPlaceholderText(SEARCH_CITY);
  const button = screen.getByRole("button", { name: SEARCH });

  await userEvent.type(searchBar, "Buenos aires");

  userEvent.click(button);

  const results = await screen.findAllByText(mockCitySearchResults[0].name, {
    exact: false,
  });

  userEvent.click(results[0]);
  userEvent.click(results[1]);
  userEvent.click(results[2]);
  userEvent.click(results[3]);
  userEvent.click(results[4]);

  await waitFor(async () => {
    const selectedCityCard = await screen.findAllByTestId("selected-city-card");
    expect(selectedCityCard).toHaveLength(5);
  });

  userEvent.click(results[0]);
  await waitFor(async () => {
    const selectedCityCard = await screen.findAllByTestId("selected-city-card");
    expect(selectedCityCard).toHaveLength(5);
    expect(selectedCityCard).not.toHaveLength(6);
  });
});

