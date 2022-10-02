import { screen, render } from "test-utils/testing-library-utils";
import { CityCard } from "components";
import { store } from "app/store";
import { DELETE, SEARCH_TO_ADD_CITY } from "config/texts";
import { mockAddedCityWeatherData } from "mocks/mockData";
import convertTempFromK from "utils/convertTemp";

test("card without city data displays an instruction message", () => {
  render(<CityCard cityIndex={0} city={{}} />, { store: store });

  const emptyCardMessage = screen.getByText(SEARCH_TO_ADD_CITY);
  expect(emptyCardMessage).toBeInTheDocument();
});

test("card with city data displays temperature, icon, and delete button", () => {
  render(
    <CityCard
      cityIndex={0}
      city={{ loading: false, data: mockAddedCityWeatherData }}
    />,
    { store: store }
  );

  const tempText = screen.getByText(
    convertTempFromK(mockAddedCityWeatherData.weather.current.temp, "C"),
    {
      exact: false,
    }
  );
  expect(tempText).toBeInTheDocument();

  const tempIcon = screen.getByRole("img", {
    name: mockAddedCityWeatherData.weather.current.weather[0].icon,
  });
  expect(tempIcon).toBeInTheDocument();

  const deleteButton = screen.getByRole("button", { name: DELETE });
  expect(deleteButton).toBeInTheDocument();
});
