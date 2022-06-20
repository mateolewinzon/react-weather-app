import { store } from "../../app/store";
import { MAX_TEMP, MIN_TEMP, WEATHER_IN } from "../../config/texts";
import {
  mockLocalCityName,
  mockLocalWeather,
  mockLocation,
} from "../../mocks/responses";
import {
  screen,
  render,
  waitFor,
  queryAllByTestId,
} from "../../test-utils/testing-library-utils";
import convertTempFromK from "../../utils/convertTemp";
import LocalWeather from "./LocalWeather";

test("shows current local temperature with drawing and city name", async () => {
  render(<LocalWeather />, { store: store });

  const weather = await screen.findByText(
    convertTempFromK(mockLocalWeather.current.temp)
  );
  expect(weather).toBeInTheDocument();

  const image = await screen.findByRole("img", { name: "sunny" });
  expect(image).toBeInTheDocument();

  const cityName = await screen.findByRole("heading", {
    level: 2,
    name: WEATHER_IN + mockLocalCityName[0].name,
  });
  expect(cityName).toBeInTheDocument();
});

test("shows local 5 day forecast; with max/min temp and small icon", async () => {
  render(<LocalWeather />, { store });

  const forecastDayMax = await screen.findAllByText(MIN_TEMP, {exact: false})
  await screen.findAllByText(MIN_TEMP, {exact: false})

  expect(forecastDayMax).toHaveLength(5)
});
