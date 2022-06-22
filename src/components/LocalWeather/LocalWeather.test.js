import { rest } from "msw";
import {
  screen,
  render,
} from "../../test-utils/testing-library-utils";
import LocalWeather from "./LocalWeather";
import { store } from "../../app/store";
import convertTempFromK from "../../utils/convertTemp";
import {
  ERROR_LOCAL_WEATHER,
  MAX_TEMP,
  MIN_TEMP,
  WEATHER_IN,
} from "../../config/texts";
import { mockLocalCityName, weatherData } from "../../mocks/mockData";
import { server } from "../../mocks/server";
import {
  IP_LOCATION_API_ENDPOINT,
  WEATHER_API_ENDPOINT,
} from "../../config/endpoints";

test("if an error occurs when fetching, show a message", async () => {
  server.resetHandlers(
    rest.get(WEATHER_API_ENDPOINT, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get(IP_LOCATION_API_ENDPOINT, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<LocalWeather />, { store });

  const errorMessage = await screen.findByRole("alert");
  expect(errorMessage).toHaveTextContent(ERROR_LOCAL_WEATHER);
});

test("shows current local temperature with drawing and city name", async () => {
  render(<LocalWeather />, { store: store });

  const weather = await screen.findByText(
    convertTempFromK(weatherData.current.temp)
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

  const forecastDayMax = await screen.findAllByText(MIN_TEMP, { exact: false });
  const forecastDayMin = await screen.findAllByText(MAX_TEMP, { exact: false });

  expect(forecastDayMax).toHaveLength(5);
  expect(forecastDayMin).toHaveLength(5);

  const forecastIcon = await screen.findAllByRole("img", {
    name: weatherData.daily[0].weather[0].icon,
  });
  expect(forecastIcon).toHaveLength(5);
});
